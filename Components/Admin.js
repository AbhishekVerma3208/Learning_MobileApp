import React, { useState, useEffect } from 'react';
import { View, Button, Text, Image, StyleSheet, Alert, Platform, FlatList, TouchableOpacity } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import { launchImageLibrary } from 'react-native-image-picker';
import { API_URL } from './College/config';
import RNFetchBlob from 'rn-fetch-blob';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AdminComponent = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [files, setFiles] = useState([]);
  const [offlineFiles, setOfflineFiles] = useState([]);

  // Load files on component mount
  useEffect(() => {
    fetchFiles();
    loadOfflineFiles();
  }, []);

  const fetchFiles = async () => {
    try {
      const response = await fetch(`${API_URL}/files`);
      const data = await response.json();
      setFiles(data);
    } catch (error) {
      console.error('Error fetching files:', error);
    }
  };

  const loadOfflineFiles = async () => {
    try {
      const storedFiles = await AsyncStorage.getItem('offlineFiles');
      if (storedFiles) {
        setOfflineFiles(JSON.parse(storedFiles));
      }
    } catch (error) {
      console.error('Error loading offline files:', error);
    }
  };

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.images, DocumentPicker.types.pdf],
      });
      setSelectedFile({
        uri: result.uri,
        name: result.name,
        type: result.type || getFileType(result.name)
      });
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled document picker');
      } else {
        Alert.alert('Error', 'Failed to pick document');
        console.error(err);
      }
    }
  };

  const pickImage = async () => {
    const options = {
      mediaType: 'photo',
      maxWidth: 1000,
      maxHeight: 1000,
      quality: 0.8,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        Alert.alert('Error', 'Failed to pick image');
        console.error(response.error);
      } else if (response.assets && response.assets.length > 0) {
        const asset = response.assets[0];
        setSelectedFile({
          uri: asset.uri,
          name: asset.fileName || `image_${Date.now()}.jpg`,
          type: asset.type || 'image/jpeg',
        });
      }
    });
  };

  const getFileType = (filename) => {
    if (!filename) return 'application/octet-stream';
    
    const extension = filename.split('.').pop().toLowerCase();
    switch (extension) {
      case 'jpg':
      case 'jpeg':
        return 'image/jpeg';
      case 'png':
        return 'image/png';
      case 'pdf':
        return 'application/pdf';
      default:
        return 'application/octet-stream';
    }
  };

  const uploadFile = async () => {
    if (!selectedFile) return;

    setIsUploading(true);

    try {
      const fileType = selectedFile.type || getFileType(selectedFile.name);
      
      const response = await RNFetchBlob.fetch(
        'POST',
        `${API_URL}/upload`,
        {
          'Content-Type': 'multipart/form-data',
        },
        [
          {
            name: 'file',
            filename: selectedFile.name,
            type: fileType,
            data: RNFetchBlob.wrap(
              Platform.OS === 'android' 
                ? selectedFile.uri 
                : selectedFile.uri.replace('file://', '')
            ),
          },
        ]
      );

      const data = response.json();
      if (response.info().status >= 200 && response.info().status < 300) {
        Alert.alert('Success', 'File uploaded successfully');
        setSelectedFile(null);
        fetchFiles();
      } else {
        throw new Error(data.message || 'Upload failed');
      }
    } catch (error) {
      console.error('Upload error:', error);
      Alert.alert('Error', error.message || 'Failed to upload file');
    } finally {
      setIsUploading(false);
    }
  };

  const downloadFileForOffline = async (file) => {
    try {
      const { config, fs } = RNFetchBlob;
      const downloadDir = fs.dirs.DownloadDir;
      const filePath = `${downloadDir}/${file.filename}`;
      
      const response = await config({
        fileCache: true,
        path: filePath,
        addAndroidDownloads: {
          useDownloadManager: true,
          notification: true,
          title: file.filename,
          description: 'File downloaded for offline use',
          path: filePath,
        }
      }).fetch('GET', `${API_URL}/file/${file.filename}`);
      
      // Save reference to offline file
      const newOfflineFile = {
        id: file._id,
        filename: file.filename,
        localPath: response.path(),
        contentType: file.contentType
      };
      
      const updatedOfflineFiles = [...offlineFiles, newOfflineFile];
      setOfflineFiles(updatedOfflineFiles);
      await AsyncStorage.setItem('offlineFiles', JSON.stringify(updatedOfflineFiles));
      
      Alert.alert('Success', 'File saved for offline use');
    } catch (error) {
      console.error('Download error:', error);
      Alert.alert('Error', 'Failed to download file for offline use');
    }
  };

  const deleteFile = async (fileId) => {
    try {
      const response = await fetch(`${API_URL}/file/${fileId}`, {
        method: 'DELETE'
      });
      
      if (response.ok) {
        Alert.alert('Success', 'File deleted successfully');
        fetchFiles();
        
        // Remove from offline files if exists
        const updatedOfflineFiles = offlineFiles.filter(f => f.id !== fileId);
        setOfflineFiles(updatedOfflineFiles);
        await AsyncStorage.setItem('offlineFiles', JSON.stringify(updatedOfflineFiles));
      } else {
        throw new Error('Failed to delete file');
      }
    } catch (error) {
      console.error('Delete error:', error);
      Alert.alert('Error', error.message || 'Failed to delete file');
    }
  };

  const renderFileItem = ({ item }) => (
    <View style={styles.fileItem}>
      <Text style={styles.fileName}>{item.filename}</Text>
      <View style={styles.fileActions}>
        <Button 
          title="Download" 
          onPress={() => downloadFileForOffline(item)} 
        />
        <Button 
          title="Delete" 
          color="red" 
          onPress={() => deleteFile(item._id)} 
        />
      </View>
    </View>
  );

  const renderOfflineFileItem = ({ item }) => (
    <View style={styles.fileItem}>
      <Text style={styles.fileName}>{item.filename} (Offline)</Text>
      {item.contentType.startsWith('image/') && (
        <Image 
          source={{ uri: item.localPath }} 
          style={styles.thumbnail} 
        />
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Admin Panel</Text>
      
      <View style={styles.uploadSection}>
        <Button title="Select Image" onPress={pickImage} />
        <Button title="Select PDF" onPress={pickDocument} />
        
        {selectedFile && (
          <View style={styles.preview}>
            {(selectedFile.type?.startsWith('image/') || 
              getFileType(selectedFile.name).startsWith('image/')) ? (
              <Image 
                source={{ uri: selectedFile.uri }} 
                style={styles.image} 
              />
            ) : (
              <Text>PDF selected: {selectedFile.name}</Text>
            )}
            <Button 
              title={isUploading ? "Uploading..." : "Upload File"} 
              onPress={uploadFile} 
              disabled={isUploading}
            />
          </View>
        )}
      </View>
      
      <Text style={styles.sectionTitle}>Online Files</Text>
      <FlatList
        data={files}
        renderItem={renderFileItem}
        keyExtractor={(item) => item._id}
        style={styles.fileList}
      />
      
      <Text style={styles.sectionTitle}>Offline Files</Text>
      <FlatList
        data={offlineFiles}
        renderItem={renderOfflineFileItem}
        keyExtractor={(item) => item.id}
        style={styles.fileList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  uploadSection: {
    marginBottom: 20,
  },
  preview: {
    marginTop: 20,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  fileList: {
    flex: 1,
  },
  fileItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  fileName: {
    fontSize: 16,
    marginBottom: 10,
  },
  fileActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  thumbnail: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
});

export default AdminComponent;