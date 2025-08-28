import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Section1BasicEnglish = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Section 1: Basic English Foundations</Text>
      
      {/* Introduction to English Language */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>1. Introduction to English Language</Text>
        <Text style={styles.content}>
          English is a global language used in business, education, and communication. 
          It has 26 letters in its alphabet and follows grammatical rules to form sentences.
        </Text>
        <Text style={styles.subHeader}>Why Learn English?</Text>
        <Text style={styles.content}>• Used worldwide for communication.</Text>
        <Text style={styles.content}>• Important for jobs and education.</Text>
        <Text style={styles.content}>• Helps in travel and understanding media (movies, songs, books).</Text>
        <Text style={styles.hindi}>अंग्रेजी एक वैश्विक भाषा है जो व्यापार, शिक्षा और संचार में उपयोग की जाती है। इसमें 26 अक्षर होते हैं और वाक्य बनाने के लिए व्याकरण के नियम होते हैं।</Text>
      </View>

      {/* English Alphabets & Pronunciation */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>2. English Alphabets & Pronunciation</Text>
        <Text style={styles.content}>
          The English alphabet has 26 letters (5 vowels: A, E, I, O, U and 21 consonants).
        </Text>
        
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.tableHeader}>Letter</Text>
            <Text style={styles.tableHeader}>Pronunciation (English)</Text>
            <Text style={styles.tableHeader}>Pronunciation (Hindi)</Text>
          </View>
          {alphabetData.map((item, index) => (
            <View style={styles.tableRow} key={index}>
              <Text style={styles.tableCell}>{item.letter}</Text>
              <Text style={styles.tableCell}>{item.pronunciationEng}</Text>
              <Text style={styles.tableCell}>{item.pronunciationHindi}</Text>
            </View>
          ))}
        </View>
        
        <Text style={styles.subHeader}>Silent Letters (Extra Knowledge)</Text>
        <Text style={styles.content}>Some letters are not pronounced:</Text>
        <Text style={styles.content}>• K in Knee (नहीं बोला जाता)</Text>
        <Text style={styles.content}>• W in Write (नहीं बोला जाता)</Text>
      </View>

      {/* Basic Greetings and Self Introduction */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>3. Basic Greetings and Self Introduction</Text>
        <Text style={styles.subHeader}>English Greetings:</Text>
        {greetingsData.map((item, index) => (
          <Text style={styles.content} key={index}>
            {item.english} – {item.hindi}
          </Text>
        ))}
        
        <Text style={styles.subHeader}>Self Introduction (Example):</Text>
        <Text style={styles.content}>English:</Text>
        <Text style={styles.example}>"Hello, my name is Rahul. I am from Delhi. I am a student. Nice to meet you!"</Text>
        <Text style={styles.content}>Hindi:</Text>
        <Text style={styles.hindi}>"नमस्ते, मेरा नाम राहुल है। मैं दिल्ली से हूँ। मैं एक छात्र हूँ। आपसे मिलकर खुशी हुई!"</Text>
      </View>

      {/* Numbers, Days, Months, and Time in English */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>4. Numbers, Days, Months, and Time in English</Text>
        
        <Text style={styles.subHeader}>Numbers (1-10):</Text>
        <View style={styles.grid}>
          {numbersData.map((item, index) => (
            <Text style={styles.gridItem} key={index}>
              {item.num} – {item.english} ({item.hindi})
            </Text>
          ))}
        </View>
        
        <Text style={styles.subHeader}>Days of the Week:</Text>
        <View style={styles.grid}>
          {daysData.map((item, index) => (
            <Text style={styles.gridItem} key={index}>
              {item.english} ({item.hindi})
            </Text>
          ))}
        </View>
        
        <Text style={styles.subHeader}>Months of the Year:</Text>
        <View style={styles.grid}>
          {monthsData.slice(0, 6).map((item, index) => (
            <Text style={styles.gridItem} key={index}>
              {item.english} ({item.hindi})
            </Text>
          ))}
        </View>
        <View style={styles.grid}>
          {monthsData.slice(6).map((item, index) => (
            <Text style={styles.gridItem} key={index}>
              {item.english} ({item.hindi})
            </Text>
          ))}
        </View>
        
        <Text style={styles.subHeader}>Telling Time:</Text>
        <Text style={styles.content}>"What time is it?" – क्या समय हुआ है?</Text>
        <Text style={styles.content}>"It is 3 o'clock." – 3 बजे हैं।</Text>
        <Text style={styles.content}>"Half past 5." – साढ़े पांच बजे।</Text>
      </View>

      {/* Common Everyday Vocabulary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>5. Common Everyday Vocabulary</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.tableHeader}>English</Text>
            <Text style={styles.tableHeader}>Hindi Meaning</Text>
          </View>
          {vocabularyData.map((item, index) => (
            <View style={styles.tableRow} key={index}>
              <Text style={styles.tableCell}>{item.english}</Text>
              <Text style={styles.tableCell}>{item.hindi}</Text>
            </View>
          ))}
        </View>
        
        <Text style={styles.subHeader}>Extra Words (Advanced):</Text>
        <Text style={styles.content}>"Please" – कृपया</Text>
        <Text style={styles.content}>"Sorry" – माफ़ कीजिए</Text>
        <Text style={styles.content}>"Thank you" – धन्यवाद</Text>
      </View>

      {/* Basic Sentence Structure */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>6. Basic Sentence Structure (Subject + Verb + Object)</Text>
        <Text style={styles.subHeader}>Rule:</Text>
        <Text style={styles.content}>Subject (कर्ता) + Verb (क्रिया) + Object (कर्म)</Text>
        
        <Text style={styles.subHeader}>Examples:</Text>
        <Text style={styles.content}>I eat an apple.</Text>
        <Text style={styles.hindi}>(मैं एक सेब खाता हूँ।)</Text>
        <Text style={styles.content}>Subject = I, Verb = eat, Object = apple</Text>
        
        <Text style={styles.content}>She reads a book.</Text>
        <Text style={styles.hindi}>(वह एक किताब पढ़ती है।)</Text>
        <Text style={styles.content}>Subject = She, Verb = reads, Object = book</Text>
        
        <Text style={styles.subHeader}>Negative Sentences:</Text>
        <Text style={styles.content}>"I do not like tea." (मुझे चाय पसंद नहीं है।)</Text>
        
        <Text style={styles.subHeader}>Question Sentences:</Text>
        <Text style={styles.content}>"Do you speak English?" (क्या आप अंग्रेजी बोलते हैं?)</Text>
        
        <Text style={styles.subHeader}>Extra Practice (Quiz Yourself!)</Text>
        <Text style={styles.content}>1. Write your self-introduction in English.</Text>
        <Text style={styles.content}>2. Count from 1 to 20 in English.</Text>
        <Text style={styles.content}>3. Make a sentence using Subject + Verb + Object.</Text>
      </View>
    </ScrollView>
  );
};

// Data for the component
const alphabetData = [
  { letter: 'A', pronunciationEng: 'ए (as in "Apple")', pronunciationHindi: 'ए (सेब)' },
  { letter: 'B', pronunciationEng: 'बी (as in "Ball")', pronunciationHindi: 'बी (गेंद)' },
  { letter: 'C', pronunciationEng: 'सी / क (as in "Cat")', pronunciationHindi: 'सी / क (बिल्ली)' },
  { letter: 'Z', pronunciationEng: 'ज़ेड (as in "Zebra")', pronunciationHindi: 'ज़ेड (ज़ेबरा)' },
];

const greetingsData = [
  { english: 'Hello / Hi', hindi: 'नमस्ते / हाय' },
  { english: 'Good Morning', hindi: 'शुभ प्रभात' },
  { english: 'Good Evening', hindi: 'शुभ संध्या' },
  { english: 'How are you?', hindi: 'आप कैसे हैं?' },
  { english: 'I am fine, thank you.', hindi: 'मैं ठीक हूँ, धन्यवाद।' },
];

const numbersData = [
  { num: 1, english: 'One', hindi: 'वन' },
  { num: 2, english: 'Two', hindi: 'टू' },
  { num: 3, english: 'Three', hindi: 'थ्री' },
  { num: 4, english: 'Four', hindi: 'फोर' },
  { num: 5, english: 'Five', hindi: 'फाइव' },
  { num: 6, english: 'Six', hindi: 'सिक्स' },
  { num: 7, english: 'Seven', hindi: 'सेवन' },
  { num: 8, english: 'Eight', hindi: 'एट' },
  { num: 9, english: 'Nine', hindi: 'नाइन' },
  { num: 10, english: 'Ten', hindi: 'टेन' },
];

const daysData = [
  { english: 'Monday', hindi: 'सोमवार' },
  { english: 'Tuesday', hindi: 'मंगलवार' },
  { english: 'Wednesday', hindi: 'बुधवार' },
  { english: 'Thursday', hindi: 'गुरुवार' },
  { english: 'Friday', hindi: 'शुक्रवार' },
  { english: 'Saturday', hindi: 'शनिवार' },
  { english: 'Sunday', hindi: 'रविवार' },
];

const monthsData = [
  { english: 'January', hindi: 'जनवरी' },
  { english: 'February', hindi: 'फरवरी' },
  { english: 'March', hindi: 'मार्च' },
  { english: 'April', hindi: 'अप्रैल' },
  { english: 'May', hindi: 'मई' },
  { english: 'June', hindi: 'जून' },
  { english: 'July', hindi: 'जुलाई' },
  { english: 'August', hindi: 'अगस्त' },
  { english: 'September', hindi: 'सितंबर' },
  { english: 'October', hindi: 'अक्टूबर' },
  { english: 'November', hindi: 'नवंबर' },
  { english: 'December', hindi: 'दिसंबर' },
];

const vocabularyData = [
  { english: 'Book', hindi: 'किताब' },
  { english: 'Pen', hindi: 'कलम' },
  { english: 'Water', hindi: 'पानी' },
  { english: 'Food', hindi: 'खाना' },
  { english: 'House', hindi: 'घर' },
  { english: 'School', hindi: 'स्कूल' },
];

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  section: {
    marginBottom: 25,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2c3e50',
  },
  subHeader: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 5,
    color: '#34495e',
  },
  content: {
    fontSize: 14,
    marginBottom: 5,
    lineHeight: 20,
    color: '#333',
  },
  hindi: {
    fontSize: 14,
    marginBottom: 10,
    fontStyle: 'italic',
    color: '#7f8c8d',
  },
  example: {
    fontSize: 14,
    marginBottom: 10,
    color: '#2980b9',
    fontStyle: 'italic',
  },
  table: {
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  tableHeader: {
    flex: 1,
    padding: 8,
    fontWeight: 'bold',
    backgroundColor: '#f2f2f2',
    textAlign: 'center',
  },
  tableCell: {
    flex: 1,
    padding: 8,
    textAlign: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  gridItem: {
    width: '48%',
    marginBottom: 5,
    fontSize: 14,
  },
});

export default Section1BasicEnglish;