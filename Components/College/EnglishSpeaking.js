import React, { useState } from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  TouchableOpacity, 
  StyleSheet,
  Animated
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// Import your section components
import Section1 from './Englishspeaking/Section1';
import Section2 from './Englishspeaking/Section2';
import Section3 from './Englishspeaking/Section3';
import Section4 from './Englishspeaking/Section4';
import Section5 from './Englishspeaking/Section5';
import Section6 from './Englishspeaking/Section6';

const EnglishSpeakingLessons = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const fadeAnim = useState(new Animated.Value(0))[0];
  
  // Array of all your section components
  const sections = [
    { component: Section1, title: "Greetings & Introductions" },
    { component: Section2, title: "Asking for Directions" },
    { component: Section3, title: "Ordering Food" },
    { component: Section4, title: "Shopping Vocabulary" },
    { component: Section5, title: "Making Appointments" },
    { component: Section6, title: "Emergency Phrases" },
  ];

  const fadeIn = () => {
    fadeAnim.setValue(0);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true
    }).start();
  };

  const nextSection = () => {
    fadeIn();
    setCurrentSection(Math.min(sections.length - 1, currentSection + 1));
  };

  const prevSection = () => {
    fadeIn();
    setCurrentSection(Math.max(0, currentSection - 1));
  };

  const CurrentSectionComponent = sections[currentSection].component;

  return (
    <View style={styles.container}>
      {/* Header */}
      <LinearGradient
        colors={['#4F46E5', '#6366F1']}
        style={styles.header}
      >
        <Text style={styles.headerText}>English Speaking Master</Text>
        <Text style={styles.headerSubtext}>{sections[currentSection].title}</Text>
      </LinearGradient>
      
      {/* Lesson Content */}
      <Animated.View style={[styles.contentContainer, { opacity: fadeAnim }]}>
        <ScrollView style={styles.scrollContainer}>
          <CurrentSectionComponent />
        </ScrollView>
      </Animated.View>
      
      {/* Navigation Buttons */}
      <View style={styles.navButtons}>
        <TouchableOpacity 
          style={[styles.navButton, currentSection === 0 && styles.disabledButton]}
          onPress={prevSection}
          disabled={currentSection === 0}
        >
          <MaterialIcons name="arrow-back" size={20} color={currentSection === 0 ? "#CCCCCC" : "#4F46E5"} />
          <Text style={[styles.navButtonText, currentSection === 0 && styles.disabledText]}>Previous</Text>
        </TouchableOpacity>
        
        <Text style={styles.pageIndicator}>
          {currentSection + 1}/{sections.length}
        </Text>
        
        <TouchableOpacity 
          style={[styles.navButton, currentSection === sections.length - 1 && styles.disabledButton]}
          onPress={nextSection}
          disabled={currentSection === sections.length - 1}
        >
          <Text style={[styles.navButtonText, currentSection === sections.length - 1 && styles.disabledText]}>Next</Text>
          <MaterialIcons name="arrow-forward" size={20} color={currentSection === sections.length - 1 ? "#CCCCCC" : "#4F46E5"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  headerSubtext: {
    color: '#E0E7FF',
    fontSize: 16,
  },
  contentContainer: {
    flex: 1,
    padding: 20,
  },
  scrollContainer: {
    flex: 1,
  },
  navButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    backgroundColor: 'white',
  },
  navButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  navButtonText: {
    marginHorizontal: 8,
    color: '#4F46E5',
    fontWeight: '500',
  },
  disabledButton: {
    opacity: 0.5,
  },
  disabledText: {
    color: '#9CA3AF',
  },
  pageIndicator: {
    color: '#6B7280',
    fontWeight: '500',
  },
});

export default EnglishSpeakingLessons;