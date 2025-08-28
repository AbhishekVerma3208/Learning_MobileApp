import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const Section2 = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const renderSection = (title, content) => {
    const isExpanded = expandedSections[title] || false;
    return (
      <View style={styles.sectionContainer} key={title}>
        <TouchableOpacity onPress={() => toggleSection(title)} style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>{title}</Text>
          <Text style={styles.expandIcon}>{isExpanded ? '▼' : '▶'}</Text>
        </TouchableOpacity>
        {isExpanded && (
          <View style={styles.sectionContent}>
            {content}
          </View>
        )}
      </View>
    );
  };

  const renderTable = (headers, rows) => (
    <View style={styles.table}>
      <View style={styles.tableRow}>
        {headers.map((header, index) => (
          <Text key={index} style={[styles.tableCell, styles.tableHeader]}>{header}</Text>
        ))}
      </View>
      {rows.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.tableRow}>
          {row.map((cell, cellIndex) => (
            <Text key={cellIndex} style={styles.tableCell}>{cell}</Text>
          ))}
        </View>
      ))}
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {renderSection("1. Nouns, Pronouns, and Articles", (
        <View>
          <Text style={styles.subTitle}>Nouns (संज्ञा)</Text>
          <Text style={styles.definition}>Definition: A noun is the name of a person, place, thing, or idea.</Text>
          
          <Text style={styles.subTitle}>Types of Nouns:</Text>
          
          <Text style={styles.boldText}>Common Noun (जातिवाचक संज्ञा)</Text>
          <Text>General names (e.g., boy, city, book)</Text>
          <Text style={styles.example}>Example: "The dog barks." (कुत्ता भौंकता है।)</Text>
          
          <Text style={styles.boldText}>Proper Noun (व्यक्तिवाचक संज्ञा)</Text>
          <Text>Specific names (e.g., Rahul, Delhi, Harry Potter)</Text>
          <Text style={styles.example}>Example: "Mumbai is a big city." (मुंबई एक बड़ा शहर है।)</Text>
          
          <Text style={styles.boldText}>Countable Noun (गणनीय संज्ञा)</Text>
          <Text>Can be counted (e.g., apple, chair)</Text>
          <Text style={styles.example}>Example: "I have two cats." (मेरे पास दो बिल्लियाँ हैं।)</Text>
          
          <Text style={styles.boldText}>Uncountable Noun (अगणनीय संज्ञा)</Text>
          <Text>Cannot be counted (e.g., water, sugar)</Text>
          <Text style={styles.example}>Example: "She drinks milk." (वह दूध पीती है।)</Text>
          
          <Text style={styles.subTitle}>Pronouns (सर्वनाम)</Text>
          <Text style={styles.definition}>Definition: Pronouns replace nouns to avoid repetition.</Text>
          
          {renderTable(
            ['Pronoun', 'Example (English)', 'Example (Hindi)'],
            [
              ['I', 'I am a student.', 'मैं एक छात्र हूँ।'],
              ['You', 'You are kind.', 'तुम दयालु हो।'],
              ['He/She/It', 'She sings well.', 'वह अच्छा गाती है।'],
              ['We', 'We play cricket.', 'हम क्रिकेट खेलते हैं।'],
              ['They', 'They are friends.', 'वे दोस्त हैं।']
            ]
          )}
          
          <Text style={styles.subTitle}>Articles (A, An, The)</Text>
          <Text style={styles.definition}>Definition: Articles define nouns as specific or general.</Text>
          
          {renderTable(
            ['Article', 'Usage', 'Example', 'Hindi Meaning'],
            [
              ['A', 'Before consonant sounds', '"I have a dog."', 'मेरे पास एक कुत्ता है।'],
              ['An', 'Before vowel sounds (a, e, i, o, u)', '"She ate an apple."', 'उसने एक सेब खाया।'],
              ['The', 'Specific things', '"The sun is bright."', 'सूरज चमकीला है।']
            ]
          )}
          
          <Text style={styles.note}>Extra Rule: No article is used for general plural nouns.</Text>
          <Text style={styles.example}>Example: "Cats are cute." (बिल्लियाँ प्यारी होती हैं।)</Text>
        </View>
      ))}
      
      {renderSection("2. Verbs and Tenses", (
        <View>
          <Text style={styles.subTitle}>Verbs (क्रिया)</Text>
          <Text style={styles.definition}>Definition: A verb shows action or state of being.</Text>
          
          <Text style={styles.subTitle}>Types of Verbs:</Text>
          
          <Text style={styles.boldText}>Action Verbs</Text>
          <Text>e.g., run, eat, write</Text>
          <Text style={styles.example}>Example: "She dances well." (वह अच्छा नाचती है।)</Text>
          
          <Text style={styles.boldText}>Linking Verbs</Text>
          <Text>e.g., is, am, are, seem</Text>
          <Text style={styles.example}>Example: "He is happy." (वह खुश है।)</Text>
          
          <Text style={styles.boldText}>Helping Verbs</Text>
          <Text>e.g., can, will, must</Text>
          <Text style={styles.example}>Example: "I can swim." (मैं तैर सकता हूँ।)</Text>
          
          <Text style={styles.subTitle}>Tenses (काल)</Text>
          <Text style={styles.definition}>Definition: Tenses show the time of an action (past, present, future).</Text>
          
          <Text style={styles.boldText}>1. Present Tense (वर्तमान काल)</Text>
          {renderTable(
            ['Tense', 'Structure', 'Example', 'Hindi Meaning'],
            [
              ['Simple Present', 'Subject + V1', '"She eats fruits."', 'वह फल खाती है।'],
              ['Present Continuous', 'Subject + is/am/are + V+ing', '"They are playing."', 'वे खेल रहे हैं।'],
              ['Present Perfect', 'Subject + has/have + V3', '"I have finished my work."', 'मैंने अपना काम पूरा कर लिया है।'],
              ['Present Perfect Continuous', 'Subject + has/have been + V+ing', '"He has been waiting for hours."', 'वह घंटों से इंतज़ार कर रहा है।']
            ]
          )}
          
          <Text style={styles.boldText}>2. Past Tense (भूतकाल)</Text>
          {renderTable(
            ['Tense', 'Structure', 'Example', 'Hindi Meaning'],
            [
              ['Simple Past', 'Subject + V2', '"She ate an apple."', 'उसने एक सेब खाया।'],
              ['Past Continuous', 'Subject + was/were + V+ing', '"I was reading a book."', 'मैं एक किताब पढ़ रहा था।'],
              ['Past Perfect', 'Subject + had + V3', '"He had left before I came."', 'वह मेरे आने से पहले जा चुका था।'],
              ['Past Perfect Continuous', 'Subject + had been + V+ing', '"They had been working for hours."', 'वे घंटों से काम कर रहे थे।']
            ]
          )}
          
          <Text style={styles.boldText}>3. Future Tense (भविष्य काल)</Text>
          {renderTable(
            ['Tense', 'Structure', 'Example', 'Hindi Meaning'],
            [
              ['Simple Future', 'Subject + will/shall + V1', '"She will call you."', 'वह तुम्हें कॉल करेगी।'],
              ['Future Continuous', 'Subject + will be + V+ing', '"I will be traveling tomorrow."', 'मैं कल यात्रा कर रहा होऊँगा।'],
              ['Future Perfect', 'Subject + will have + V3', '"They will have completed the project."', 'वे प्रोजेक्ट पूरा कर चुके होंगे।'],
              ['Future Perfect Continuous', 'Subject + will have been + V+ing', '"By 2025, he will have been working here for 10 years."', '2025 तक, उसने यहाँ 10 साल काम कर लिया होगा।']
            ]
          )}
        </View>
      ))}
      
      {renderSection("3. Adjectives and Adverbs", (
        <View>
          <Text style={styles.subTitle}>Adjectives (विशेषण)</Text>
          <Text style={styles.definition}>Definition: Adjectives describe nouns.</Text>
          <Text style={styles.example}>Example: "She has a red car." (उसके पास एक लाल कार है।)</Text>
          <Text style={styles.example}>Example: "He is a tall man." (वह एक लंबा आदमी है।)</Text>
          
          <Text style={styles.subTitle}>Degree of Comparison (तुलनात्मक अध्ययन)</Text>
          <Text style={styles.boldText}>Positive</Text>
          <Text style={styles.example}>"Rahul is tall." (राहुल लंबा है।)</Text>
          
          <Text style={styles.boldText}>Comparative</Text>
          <Text style={styles.example}>"Rahul is taller than Rohan." (राहुल, रोहन से लंबा है।)</Text>
          
          <Text style={styles.boldText}>Superlative</Text>
          <Text style={styles.example}>"Rahul is the tallest in the class." (राहुल कक्षा में सबसे लंबा है।)</Text>
          
          <Text style={styles.subTitle}>Adverbs (क्रिया-विशेषण)</Text>
          <Text style={styles.definition}>Definition: Adverbs describe verbs, adjectives, or other adverbs.</Text>
          <Text style={styles.example}>Example: "She runs quickly." (वह तेज़ दौड़ती है।)</Text>
          <Text style={styles.example}>Example: "He speaks very softly." (वह बहुत धीरे बोलता है।)</Text>
        </View>
      ))}
      
      {renderSection("4. Prepositions and Conjunctions", (
        <View>
          <Text style={styles.subTitle}>Prepositions (संबंधसूचक शब्द)</Text>
          <Text style={styles.definition}>Definition: Prepositions show relationships between nouns/pronouns and other words.</Text>
          
          {renderTable(
            ['Preposition', 'Example', 'Hindi Meaning'],
            [
              ['In', '"The book is in the bag."', 'किताब बैग में है।'],
              ['On', '"The pen is on the table."', 'कलम मेज़ पर है।'],
              ['At', '"She is at home."', 'वह घर पर है।']
            ]
          )}
          
          <Text style={styles.subTitle}>Conjunctions (संयोजक शब्द)</Text>
          <Text style={styles.definition}>Definition: Conjunctions join words or sentences.</Text>
          
          {renderTable(
            ['Conjunction', 'Example', 'Hindi Meaning'],
            [
              ['And', '"Tea and coffee."', 'चाय और कॉफी।'],
              ['But', '"She is poor but happy."', 'वह गरीब लेकिन खुश है।'],
              ['Because', '"I am late because of traffic."', 'मैं ट्रैफिक की वजह से लेट हूँ।']
            ]
          )}
        </View>
      ))}
      
      {renderSection("5. Modals (सहायक क्रियाएँ)", (
        <View>
          <Text style={styles.definition}>Definition: Modals express ability, permission, necessity, etc.</Text>
          
          {renderTable(
            ['Modal', 'Usage', 'Example', 'Hindi Meaning'],
            [
              ['Can', 'Ability', '"I can swim."', 'मैं तैर सकता हूँ।'],
              ['Could', 'Polite request', '"Could you help me?"', 'क्या आप मेरी मदद कर सकते हैं?'],
              ['Must', 'Necessity', '"You must study."', 'आपको पढ़ना चाहिए।'],
              ['Should', 'Advice', '"You should drink water."', 'आपको पानी पीना चाहिए।']
            ]
          )}
        </View>
      ))}
      
      {renderSection("6. Active & Passive Voice", (
        <View>
          <Text style={styles.subTitle}>Active Voice (कर्तृवाच्य)</Text>
          <Text style={styles.example}>"The cat chased the mouse." (बिल्ली ने चूहे को पीछा किया।)</Text>
          
          <Text style={styles.subTitle}>Passive Voice (कर्मवाच्य)</Text>
          <Text style={styles.example}>"The mouse was chased by the cat." (चूहे को बिल्ली द्वारा पीछा किया गया।)</Text>
          
          <Text style={styles.boldText}>Rule:</Text>
          <Text>Active: Subject + Verb + Object</Text>
          <Text>Passive: Object + Helping Verb (be) + V3 + by + Subject</Text>
        </View>
      ))}
      
      {renderSection("7. Direct & Indirect Speech", (
        <View>
          <Text style={styles.subTitle}>Direct Speech (प्रत्यक्ष कथन)</Text>
          <Text style={styles.example}>"She said, 'I am happy.'"</Text>
          
          <Text style={styles.subTitle}>Indirect Speech (अप्रत्यक्ष कथन)</Text>
          <Text style={styles.example}>"She said that she was happy."</Text>
          
          <Text style={styles.boldText}>Rule:</Text>
          <Text>1. Remove quotation marks ("").</Text>
          <Text>2. Change pronouns and tenses.</Text>
          <Text>3. Use that (optional).</Text>
        </View>
      ))}
      
      {renderSection("Extra Practice (Quiz Yourself!)", (
        <View>
          <Text style={styles.boldText}>Convert to Passive:</Text>
          <Text>"He writes a letter."</Text>
          
          <Text style={styles.boldText}>Change to Indirect Speech:</Text>
          <Text>"Rahul said, 'I will go tomorrow.'"</Text>
          
          <Text style={styles.boldText}>Fill in the modal:</Text>
          <Text>"You ___ wear a seatbelt." (must/should)</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f5f5f5',
  },
  sectionContainer: {
    marginBottom: 15,
    backgroundColor: 'white',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 2,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#6200ee',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  expandIcon: {
    fontSize: 16,
    color: 'white',
  },
  sectionContent: {
    padding: 15,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    color: '#333',
  },
  definition: {
    fontStyle: 'italic',
    marginBottom: 10,
    color: '#555',
  },
  boldText: {
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 3,
  },
  example: {
    backgroundColor: '#f0f0f0',
    padding: 8,
    borderRadius: 5,
    marginVertical: 5,
    fontFamily: 'monospace',
  },
  note: {
    backgroundColor: '#e3f2fd',
    padding: 8,
    borderRadius: 5,
    marginVertical: 5,
    fontStyle: 'italic',
  },
  table: {
    borderWidth: 1,
    borderColor: '#ddd',
    marginVertical: 10,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  tableHeader: {
    fontWeight: 'bold',
    backgroundColor: '#f0f0f0',
  },
  tableCell: {
    flex: 1,
    padding: 8,
    borderRightWidth: 1,
    borderColor: '#ddd',
  },
});

export default Section2;