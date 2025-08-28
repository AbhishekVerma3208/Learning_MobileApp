import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, SectionList,Linking } from 'react-native';

const VocabularyBuildingComponent = () => {
  const [activeTab, setActiveTab] = useState('verbs');

  // Vocabulary Data
  const vocabularyData = {
    verbs: [
      { id: 1, word: 'Run', hindi: 'दौड़ना', example: 'I run daily for fitness.' },
      { id: 2, word: 'Eat', hindi: 'खाना', example: 'We eat dinner at 8 PM.' },
      { id: 3, word: 'Think', hindi: 'सोचना', example: 'Think before you speak.' },
      // Add more verbs...
    ],
    adjectives: [
      { id: 1, word: 'Happy', hindi: 'खुश', example: 'She looks happy today.' },
      { id: 2, word: 'Sad', hindi: 'उदास', example: 'Why are you sad?' },
      // Add more adjectives...
    ],
    mostUsedWords: [
      { category: 'Time', words: ['Yesterday', 'Today', 'Tomorrow'] },
      { category: 'Family', words: ['Father', 'Mother', 'Sibling'] },
      // Add more categories...
    ],
    synonyms: [
      { word: 'Happy', synonym: 'Joyful', antonym: 'Sad' },
      { word: 'Big', synonym: 'Large', antonym: 'Small' },
      // Add more synonyms...
    ],
    idioms: [
      { 
        idiom: 'Break the ice', 
        meaning: 'Start a conversation',
        example: 'He told a joke to break the ice.' 
      },
      // Add more idioms...
    ],
    proverbs: [
      {
        proverb: 'Actions speak louder than words',
        hindi: 'कर्म शब्दों से ज़्यादा बोलते हैं',
        meaning: 'What you do is more important than what you say'
      },
      // Add more proverbs...
    ],
    slang: [
      { term: 'Ghost', meaning: 'Ignore someone', example: 'She ghosted me after the date.' },
      // Add more slang...
    ]
  };

  // Render content based on active tab
  const renderContent = () => {
    switch(activeTab) {
      case 'verbs':
        return (
          <View style={styles.contentContainer}>
            <Text style={styles.sectionTitle}>Common Verbs</Text>
            {vocabularyData.verbs.map(item => (
              <View key={item.id} style={styles.card}>
                <Text style={styles.word}>{item.word}</Text>
                <Text style={styles.hindi}>{item.hindi}</Text>
                <Text style={styles.example}>Example: {item.example}</Text>
              </View>
            ))}
          </View>
        );
      case 'adjectives':
        return (
          <View style={styles.contentContainer}>
            <Text style={styles.sectionTitle}>Adjectives</Text>
            {vocabularyData.adjectives.map(item => (
              <View key={item.id} style={styles.card}>
                <Text style={styles.word}>{item.word}</Text>
                <Text style={styles.hindi}>{item.hindi}</Text>
                <Text style={styles.example}>{item.example}</Text>
              </View>
            ))}
          </View>
        );
      case 'words':
        return (
          <View style={styles.contentContainer}>
            <Text style={styles.sectionTitle}>500 Most Used Words</Text>
            {vocabularyData.mostUsedWords.map((category, index) => (
              <View key={index} style={styles.categoryCard}>
                <Text style={styles.categoryTitle}>{category.category}</Text>
                <View style={styles.wordsContainer}>
                  {category.words.map((word, i) => (
                    <Text key={i} style={styles.wordItem}>{word}</Text>
                  ))}
                </View>
              </View>
            ))}
          </View>
        );
      case 'synonyms':
        return (
          <View style={styles.contentContainer}>
            <Text style={styles.sectionTitle}>Synonyms & Antonyms</Text>
            {vocabularyData.synonyms.map((item, index) => (
              <View key={index} style={styles.synonymCard}>
                <Text style={styles.word}>{item.word}</Text>
                <View style={styles.synonymRow}>
                  <Text style={styles.synonymLabel}>Synonym: </Text>
                  <Text style={styles.synonymText}>{item.synonym}</Text>
                </View>
                <View style={styles.synonymRow}>
                  <Text style={styles.antonymLabel}>Antonym: </Text>
                  <Text style={styles.antonymText}>{item.antonym}</Text>
                </View>
              </View>
            ))}
          </View>
        );
      case 'idioms':
        return (
          <View style={styles.contentContainer}>
            <Text style={styles.sectionTitle}>Idioms & Phrases</Text>
            {vocabularyData.idioms.map((item, index) => (
              <View key={index} style={styles.idiomCard}>
                <Text style={styles.idiomText}>"{item.idiom}"</Text>
                <Text style={styles.meaningText}>Meaning: {item.meaning}</Text>
                <Text style={styles.exampleText}>Example: {item.example}</Text>
              </View>
            ))}
          </View>
        );
      case 'proverbs':
        return (
          <View style={styles.contentContainer}>
            <Text style={styles.sectionTitle}>Proverbs</Text>
            {vocabularyData.proverbs.map((item, index) => (
              <View key={index} style={styles.proverbCard}>
                <Text style={styles.proverbText}>"{item.proverb}"</Text>
                <Text style={styles.hindiText}>{item.hindi}</Text>
                <Text style={styles.meaningText}>{item.meaning}</Text>
              </View>
            ))}
          </View>
        );
      case 'slang':
        return (
          <View style={styles.contentContainer}>
            <Text style={styles.sectionTitle}>Slang Words</Text>
            {vocabularyData.slang.map((item, index) => (
              <View key={index} style={styles.slangCard}>
                <Text style={styles.slangTerm}>{item.term}</Text>
                <Text style={styles.meaningText}>{item.meaning}</Text>
                <Text style={styles.exampleText}>Example: {item.example}</Text>
              </View>
            ))}
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Vocabulary Building</Text>
      
      {/* Navigation Tabs */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.tabContainer}
      >
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'verbs' && styles.activeTab]}
          onPress={() => setActiveTab('verbs')}
        >
          <Text style={styles.tabText}>Verbs</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'adjectives' && styles.activeTab]}
          onPress={() => setActiveTab('adjectives')}
        >
          <Text style={styles.tabText}>Adjectives</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'words' && styles.activeTab]}
          onPress={() => setActiveTab('words')}
        >
          <Text style={styles.tabText}>500 Words</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'synonyms' && styles.activeTab]}
          onPress={() => setActiveTab('synonyms')}
        >
          <Text style={styles.tabText}>Synonyms</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'idioms' && styles.activeTab]}
          onPress={() => setActiveTab('idioms')}
        >
          <Text style={styles.tabText}>Idioms</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'proverbs' && styles.activeTab]}
          onPress={() => setActiveTab('proverbs')}
        >
          <Text style={styles.tabText}>Proverbs</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'slang' && styles.activeTab]}
          onPress={() => setActiveTab('slang')}
        >
          <Text style={styles.tabText}>Slang</Text>
        </TouchableOpacity>
      </ScrollView>
      
      {/* Content Area */}
      <ScrollView style={styles.contentScrollView}>
        {renderContent()}
      </ScrollView>
      
      {/* Download Button */}
      <TouchableOpacity style={styles.downloadButton} onPress={()=>Linking.openURL('https://www.cambridgeenglish.org/images/84669-pet-vocabulary-list.pdf')}>
        <Text style={styles.downloadText}>Download Full Vocabulary PDF</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 15,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  tabContainer: {
    marginBottom: 15,
    maxHeight: 50,
  },
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginRight: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 20,
  },
  activeTab: {
    backgroundColor: '#4CAF50',
  },
  tabText: {
    color: '#333',
    fontWeight: '500',
  },
  activeTabText: {
    color: 'white',
  },
  contentScrollView: {
    flex: 1,
    marginBottom: 60,
  },
  contentContainer: {
    paddingBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#444',
  },
  card: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  word: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  hindi: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  example: {
    fontSize: 14,
    color: '#888',
    marginTop: 8,
    fontStyle: 'italic',
  },
  categoryCard: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#4CAF50',
  },
  wordsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  wordItem: {
    backgroundColor: '#e8f5e9',
    padding: 8,
    margin: 5,
    borderRadius: 5,
  },
  synonymCard: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  synonymRow: {
    flexDirection: 'row',
    marginTop: 5,
  },
  synonymLabel: {
    fontWeight: 'bold',
    color: '#333',
  },
  synonymText: {
    color: '#2E7D32',
  },
  antonymLabel: {
    fontWeight: 'bold',
    color: '#333',
  },
  antonymText: {
    color: '#C62828',
  },
  idiomCard: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  idiomText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    fontStyle: 'italic',
  },
  meaningText: {
    marginTop: 8,
    color: '#555',
  },
  exampleText: {
    marginTop: 5,
    color: '#777',
    fontStyle: 'italic',
  },
  proverbCard: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  proverbText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    fontStyle: 'italic',
  },
  hindiText: {
    marginTop: 5,
    color: '#666',
  },
  slangCard: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  slangTerm: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  downloadButton: {
    position: 'absolute',
    bottom: 10,
    left: 15,
    right: 15,
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  downloadText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default VocabularyBuildingComponent;