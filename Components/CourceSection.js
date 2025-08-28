import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import { ProgressBar } from "react-native-paper";

const CoursesScreen = () => {
  const courses = {
    "trending": [
      { id: 1, title: "🚀 Mastering React Native", thumbnail: require("./College/assets/reactnative.jpg"), progress: 1.0, press: 'reactnative' },
      { id: 2, title: "🧠 Advanced JavaScript", thumbnail: require("./College/assets/Javascript.jpg"), progress: 0.6, press: 'Javascript' },
      { id: 3, title: "⚛️ Thrilled Reactjs", thumbnail: require("./College/assets/reactjs.jpg"), progress: 0.6, press: 'Reactjs' },
      { id: 4, title: "🎨 CSS Wizardry: Styling Like a Pro", thumbnail: require("./College/assets/Css.jpg"), progress: 0.6, press: 'Css' },
    ],
  };

  const navigation = useNavigation();

  const CourseCard = ({ course }) => (
    <TouchableOpacity style={styles.courseCard} onPress={() => navigation.navigate(course.press)}>
      <Image source={course.thumbnail} style={styles.courseImage} />
      <Text style={styles.courseTitle}>{course.title}</Text>
      {course.progress !== undefined && (
        <ProgressBar progress={course.progress} color="#4CAF50" style={styles.progressBar} />
      )}
    </TouchableOpacity>
  );

  const CourseSection = ({ title, data }) => (
    <View>
      <Text style={styles.sectionTitle}>{title}</Text>
      <FlatList
        data={data}
        horizontal
        renderItem={({ item }) => <CourseCard course={item} />}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.learningPathContainer}>
        <Text style={styles.learningPathTitle}>🎓 Learning Paths</Text>
        <TouchableOpacity style={styles.learningPathTouchable} onPress={()=>navigation.navigate("Learningjourney")}>
          <Image source={require('./College/assets/Learning_Path.jpg')} style={styles.learningPathImage} />
        </TouchableOpacity>
      </View>
      <View style={styles.courseSectionContainer}>
        <CourseSection title="🔥 Trending Courses" data={courses.trending} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 10,
  },
  learningPathContainer: {
    backgroundColor: "#E0E0E0",
    borderRadius: 7,
    padding: 10,
  },
  learningPathTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  learningPathTouchable: {
    marginVertical: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  learningPathImage: {
    width: "100%",
    height: 150,
    borderRadius: 5,
  },
  courseSectionContainer: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  courseCard: {
    marginRight: 10,
    backgroundColor: "#ffffffaa",
    padding: 10,
    borderRadius: 10,
    width: 160,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  courseImage: {
    width: "100%",
    height: 90,
    borderRadius: 5,
  },
  courseTitle: {
    color: "#333",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
  progressBar: {
    height: 6,
    marginTop: 5,
    borderRadius: 5,
  },
});

export default CoursesScreen;
