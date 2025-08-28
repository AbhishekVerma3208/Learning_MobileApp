import React from "react";
import { View, Text, FlatList, TouchableOpacity ,Linking} from "react-native";

const features = [
  { id: 1, name: "Ask Doubts", icon: "❓", color: "#FFEBEE" ,"url":"https://wa.me/919759429847?text=Ask%20your%20query%20here%3F"},
  { id: 2, name: "Daily Quizzes", icon: "📝", color: "#E3F2FD" ,"url":"https://www.srisaradacollege.ac.in/pdf/QUIZ%202017-18.pdf"},
  { id: 3, name: "Live Classes", icon: "🎥", color: "#FFF3E0" ,"url":"https://chat.whatsapp.com/Kj2QKrTBjHjLvAWXfkkEdC?mode=ac_t"},
  { id: 4, name: "Discussion Forum", icon: "💬", color: "#EDE7F6", "url":"https://wa.me/919759429847?text=Discuss%20your%20problem%20here%3F"},
  { id: 5, name: "E-Books & PDFs", icon: "📚", color: "#E0F7FA","url":"https://www.tpointtech.com/" },
];

const FeatureCard = ({ item }) => (
  <TouchableOpacity
    style={{
      backgroundColor: item.color,
      margin: 10,
      padding: 20,
      borderRadius: 12,
      alignItems: "center",
      width: 160,
      elevation: 4, // For Android shadow
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
    }}
    onPress={() =>Linking.openURL(item.url)}
  >
    <Text style={{ fontSize: 34 }}>{item.icon}</Text>
    <Text style={{ color: "#333", fontSize: 15, fontWeight: "bold", marginTop: 5, textAlign: "center" }}>
      {item.name}
    </Text>
  </TouchableOpacity>
);

const InteractiveLearning = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#FAFAFA", padding: 15 }}>
      <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 10, color: "#333" }}>
        📌 Interactive Learning
      </Text>
      <FlatList
        data={features}
        horizontal
        renderItem={({ item }) => <FeatureCard item={item} />}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default InteractiveLearning;
