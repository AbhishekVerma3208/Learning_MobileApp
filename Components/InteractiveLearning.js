import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";

const features = [
  { id: "1", name: "Ask Doubts", icon: "❓", color: "#ff6f61" },
  { id: "1", name: "Daily Quizzes", icon: "📝", color: "#420e6d" },
  { id: "2", name: "Live Classes", icon: "🎥", color: "#ffa500" },
  { id: "2", name: "Discussion Forum", icon: "💬", color: "#6b5b95" },
  { id: "4", name: "E-Books & PDFs", icon: "📚", color: "#00a8cc" },

];

const FeatureCard = ({ item }) => (
  <TouchableOpacity
    style={{
      backgroundColor: item.color,
      margin: 10,
      padding: 20,
      borderRadius: 10,
      alignItems: "center",
      width: 150,
    }}
    onPress={() => console.log(`${item.name} Clicked`)}
  >
    <Text style={{ fontSize: 30 }}>{item.icon}</Text>
    <Text style={{ color: "#fff", fontSize: 14, fontWeight: "bold", marginTop: 5, textAlign: "center" }}>
      {item.name}
    </Text>
  </TouchableOpacity>
);

const InteractiveLearning = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#121212", padding: 15 }}>
      <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
        📌 Interactive Learning
      </Text>
      <FlatList
        data={features}
        horizontal
        renderItem={({ item }) => <FeatureCard item={item} />}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default InteractiveLearning;
