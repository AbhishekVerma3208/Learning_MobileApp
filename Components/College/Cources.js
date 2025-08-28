import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image } from "react-native";
import { fetchCourses } from "./fetchCourses";

const CoursesScreen = () => {
  const [courses, setCourses] = useState({
    trending: [],
    newCourses: [],
    popular: [],
    continueLearning: [],
  });

  useEffect(() => {
    const unsubscribe = fetchCourses(setCourses);
    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>New Courses:</Text>
      <FlatList
        data={courses.newCourses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Image source={{ uri: item.thumbnail }} style={{ width: 100, height: 100 }} />
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default CoursesScreen;
