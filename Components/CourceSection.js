import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { ProgressBar } from "react-native-paper";

const courses = {
  trending: [
    { id: "1", title: "React Native Basics", thumbnail: "https://via.placeholder.com/150", progress: 0.8 },
    { id: "2", title: "Advanced JavaScript", thumbnail: "https://via.placeholder.com/150", progress: 0.6 },
  ],
  newCourses: [
    { id: "3", title: "Python for Beginners", thumbnail: "https://via.placeholder.com/150", progress: 0.3 },
    { id: "4", title: "Full Stack Development", thumbnail: "https://via.placeholder.com/150", progress: 0.1 },
  ],
  popular: [
    { id: "5", title: "Machine Learning", thumbnail: "https://via.placeholder.com/150", progress: 0.9 },
    { id: "6", title: "Data Science with Python", thumbnail: "https://via.placeholder.com/150", progress: 0.7 },
  ],
  continueLearning: [
    { id: "7", title: "UI/UX Design Fundamentals", thumbnail: "https://via.placeholder.com/150", progress: 0.5 },
    { id: "8", title: "Cyber Security Basics", thumbnail: "https://via.placeholder.com/150", progress: 0.4 },
  ],
};

const CourseCard = ({ course }) => (
  <TouchableOpacity style={{ margin: 10, backgroundColor: "#222", padding: 10, borderRadius: 10, width: 160 }}>
    <Image source={{ uri: course.thumbnail }} style={{ width: "100%", height: 90, borderRadius: 5 }} />
    <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold", marginTop: 5 }}>{course.title}</Text>
    <ProgressBar progress={course.progress} color="#4CAF50" style={{ height: 6, marginTop: 5, borderRadius: 5 }} />
  </TouchableOpacity>
);

const CourseSection = ({ title, data }) => (
  <View>
    <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold", marginVertical: 10 }}>{title}</Text>
    <FlatList
      data={data}
      horizontal
      renderItem={({ item }) => <CourseCard course={item} />}
      keyExtractor={(item) => item.id}
      showsHorizontalScrollIndicator={false}
    />
  </View>
);

const CoursesScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#121212", padding: 15 }}>
      <CourseSection title="🔥 Trending Courses" data={courses.trending} />
      <CourseSection title="🆕 Newly Added Courses" data={courses.newCourses} />
      <CourseSection title="⭐ Most Popular Courses" data={courses.popular} />
      <CourseSection title="📖 Continue Learning" data={courses.continueLearning} />
    </View>
  );
};

export default CoursesScreen;