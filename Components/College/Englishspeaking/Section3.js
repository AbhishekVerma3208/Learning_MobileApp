import React, { useState } from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  StyleSheet, 
  TouchableOpacity, 
  TextInput, 
  Alert,
  Modal,
  Pressable
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DailyPhrasesComponent = () => {
  const [expandedSections, setExpandedSections] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [bookmarkedPhrases, setBookmarkedPhrases] = useState([]);
  const [showBookmarksModal, setShowBookmarksModal] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const toggleBookmark = (phrase) => {
    if (bookmarkedPhrases.some(p => p.english === phrase.english)) {
      setBookmarkedPhrases(bookmarkedPhrases.filter(p => p.english !== phrase.english));
    } else {
      setBookmarkedPhrases([...bookmarkedPhrases, phrase]);
    }
  };

  const phrasesData = [
    {
      title: "1. At Home (घर पर)",
      categories: [
        {
          name: "Morning Routine",
          phrases: [
            { english: "Good morning!", hindi: "शुभ प्रभात!" },
            { english: "I woke up late today.", hindi: "मैं आज देर से उठा।" },
            { english: "I need to brush my teeth.", hindi: "मुझे दांत साफ़ करने हैं।" },
            { english: "What's for breakfast?", hindi: "नाश्ते में क्या है?" },
            { english: "I'm going to take a bath.", hindi: "मैं नहाने जा रहा हूँ।" }
          ]
        },
        {
          name: "Household Chores",
          phrases: [
            { english: "Please clean your room.", hindi: "कृपया अपना कमरा साफ़ करो।" },
            { english: "Can you help me in the kitchen?", hindi: "क्या तुम मेरी रसोई में मदद कर सकते हो?" },
            { english: "The laundry is piling up.", hindi: "कपड़े जमा हो रहे हैं।" },
            { english: "Take out the garbage.", hindi: "कचरा बाहर फेंक दो।" },
            { english: "Turn off the lights/fan.", hindi: "लाइट/पंखा बंद कर दो।" }
          ]
        },
        {
          name: "Evening Activities",
          phrases: [
            { english: "How was your day?", hindi: "तुम्हारा दिन कैसा रहा?" },
            { english: "I'm watching TV.", hindi: "मैं टीवी देख रहा हूँ।" },
            { english: "Let's go for a walk.", hindi: "चलो टहलने चलते हैं।" },
            { english: "What time will you sleep?", hindi: "तुम कितने बजे सोओगे?" },
            { english: "Good night!", hindi: "शुभ रात्रि!" }
          ]
        }
      ]
    },
    {
      title: "2. At Work (काम पर)",
      categories: [
        {
          name: "Office Communication",
          phrases: [
            { english: "I'll finish this by EOD.", hindi: "मैं इसे दिन के अंत तक पूरा कर दूँगा।" },
            { english: "Can we schedule a meeting?", hindi: "क्या हम एक मीटिंग शेड्यूल कर सकते हैं?" },
            { english: "I need a day off.", hindi: "मुझे एक दिन की छुट्टी चाहिए।" },
            { english: "The report is ready.", hindi: "रिपोर्ट तैयार है।" },
            { english: "Please check your email.", hindi: "कृपया अपना ईमेल चेक करें।" }
          ]
        },
        {
          name: "Business Phrases",
          phrases: [
            { english: "What's our target for this quarter?", hindi: "इस क्वार्टर के लिए हमारा टारगेट क्या है?" },
            { english: "The client needs an update.", hindi: "क्लाइंट को अपडेट चाहिए।" },
            { english: "Let's brainstorm some ideas.", hindi: "चलो कुछ आइडियाज पर बात करते हैं।" },
            { english: "The presentation went well.", hindi: "प्रेजेंटेशन अच्छा रहा।" },
            { english: "We need to improve our strategy.", hindi: "हमें अपनी रणनीति सुधारने की जरूरत है।" }
          ]
        }
      ]
    },
    {
      title: "3. Shopping (खरीदारी)",
      categories: [
        {
          name: "At the Market",
          phrases: [
            { english: "How much does this cost?", hindi: "यह कितने का है?" },
            { english: "Do you have a smaller size?", hindi: "क्या आपके पास छोटा साइज़ है?" },
            { english: "Can I try this on?", hindi: "क्या मैं इसे ट्राई कर सकता हूँ?" },
            { english: "I'm just looking.", hindi: "मैं बस देख रहा हूँ।" },
            { english: "Do you accept credit cards?", hindi: "क्या आप क्रेडिट कार्ड लेते हैं?" }
          ]
        },
        {
          name: "Bargaining",
          phrases: [
            { english: "That's too expensive.", hindi: "यह बहुत महंगा है।" },
            { english: "Can you give me a discount?", hindi: "क्या आप मुझे छूट दे सकते हैं?" },
            { english: "I'll take it if you lower the price.", hindi: "अगर आप कीमत कम करेंगे तो मैं ले लूँगा।" },
            { english: "What's your final price?", hindi: "आपकी आखिरी कीमत क्या है?" },
            { english: "I saw this cheaper elsewhere.", hindi: "मैंने यह कहीं और सस्ता देखा है।" }
          ]
        }
      ]
    },
    {
      title: "4. Travel (यात्रा)",
      categories: [
        {
          name: "Transportation",
          phrases: [
            { english: "Where is the bus stop?", hindi: "बस स्टॉप कहाँ है?" },
            { english: "How much is the fare?", hindi: "किराया कितना है?" },
            { english: "Does this train go to Delhi?", hindi: "क्या यह ट्रेन दिल्ली जाती है?" },
            { english: "When is the next flight?", hindi: "अगली फ्लाइट कब है?" },
            { english: "I need a taxi.", hindi: "मुझे टैक्सी चाहिए।" }
          ]
        },
        {
          name: "Hotel Stay",
          phrases: [
            { english: "I have a reservation.", hindi: "मेरा रिज़र्वेशन है।" },
            { english: "What time is checkout?", hindi: "चेकआउट कितने बजे है?" },
            { english: "The AC isn't working.", hindi: "एसी काम नहीं कर रहा है।" },
            { english: "Can I get extra towels?", hindi: "क्या मुझे अतिरिक्त तौलिए मिल सकते हैं?" },
            { english: "Where is the nearest restaurant?", hindi: "निकटतम रेस्तरां कहाँ है?" }
          ]
        }
      ]
    }
  ];

  const filteredData = phrasesData.map(section => ({
    ...section,
    categories: section.categories.map(category => ({
      ...category,
      phrases: category.phrases.filter(phrase =>
        phrase.english.toLowerCase().includes(searchQuery.toLowerCase()) ||
        phrase.hindi.toLowerCase().includes(searchQuery.toLowerCase())
      )
    })).filter(category => category.phrases.length > 0)
  })).filter(section => section.categories.length > 0);

  const renderPhraseCard = (phrase) => (
    <View style={styles.phraseCard} key={phrase.english}>
      <View style={styles.phraseContent}>
        <Text style={styles.englishText}>{phrase.english}</Text>
        <Text style={styles.hindiText}>{phrase.hindi}</Text>
      </View>
      <TouchableOpacity onPress={() => toggleBookmark(phrase)} style={styles.bookmarkButton}>
        <Icon 
          name={bookmarkedPhrases.some(p => p.english === phrase.english) ? "bookmark" : "bookmark-outline"} 
          size={24} 
          color={bookmarkedPhrases.some(p => p.english === phrase.english) ? '#FFD700' : '#555'} 
        />
      </TouchableOpacity>
    </View>
  );

  const renderSection = (section) => (
    <View style={styles.sectionContainer} key={section.title}>
      <TouchableOpacity onPress={() => toggleSection(section.title)} style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{section.title}</Text>
        <Icon 
          name={expandedSections[section.title] ? "keyboard-arrow-up" : "keyboard-arrow-down"} 
          size={24} 
          color="white" 
        />
      </TouchableOpacity>
      {expandedSections[section.title] && (
        <View style={styles.sectionContent}>
          {section.categories.map(category => (
            <View key={category.name} style={styles.categoryContainer}>
              <Text style={styles.categoryTitle}>{category.name}</Text>
              {category.phrases.map(phrase => renderPhraseCard(phrase))}
            </View>
          ))}
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Daily English Phrases</Text>
        <Text style={styles.headerSubtitle}>Learn practical English for daily use</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#555" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search phrases..."
          placeholderTextColor="#888"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        {searchQuery.length > 0 && (
          <TouchableOpacity onPress={() => setSearchQuery('')} style={styles.clearSearch}>
            <Icon name="close" size={20} color="#555" />
          </TouchableOpacity>
        )}
      </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'all' && styles.activeTab]}
          onPress={() => setActiveTab('all')}
        >
          <Text style={[styles.tabText, activeTab === 'all' && styles.activeTabText]}>All Phrases</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'bookmarks' && styles.activeTab]}
          onPress={() => setActiveTab('bookmarks')}
        >
          <View style={styles.bookmarkTab}>
            <Text style={[styles.tabText, activeTab === 'bookmarks' && styles.activeTabText]}>Bookmarks</Text>
            {bookmarkedPhrases.length > 0 && (
              <View style={styles.bookmarkCount}>
                <Text style={styles.bookmarkCountText}>{bookmarkedPhrases.length}</Text>
              </View>
            )}
          </View>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <ScrollView style={styles.scrollContainer}>
        {activeTab === 'all' ? (
          filteredData.length > 0 ? (
            filteredData.map(section => renderSection(section))
          ) : (
            <View style={styles.noResults}>
              <Icon name="search-off" size={40} color="#888" />
              <Text style={styles.noResultsText}>No phrases found matching your search</Text>
            </View>
          )
        ) : (
          bookmarkedPhrases.length > 0 ? (
            <View style={styles.bookmarksContainer}>
              <Text style={styles.bookmarksTitle}>Your Bookmarked Phrases</Text>
              {bookmarkedPhrases.map(phrase => (
                <View key={phrase.english} style={styles.bookmarkedPhrase}>
                  <Text style={styles.bookmarkedEnglish}>{phrase.english}</Text>
                  <Text style={styles.bookmarkedHindi}>{phrase.hindi}</Text>
                </View>
              ))}
            </View>
          ) : (
            <View style={styles.noBookmarks}>
              <Icon name="bookmark-outline" size={40} color="#888" />
              <Text style={styles.noBookmarksText}>No bookmarked phrases yet</Text>
              <Text style={styles.noBookmarksSubtext}>Tap the bookmark icon to save phrases</Text>
            </View>
          )
        )}

        {/* Learning Tips */}
        {activeTab === 'all' && (
          <View style={styles.learningTips}>
            <Text style={styles.tipsTitle}>Learning Tips</Text>
            <View style={styles.tipItem}>
              <Icon name="lightbulb-outline" size={20} color="#FFD700" />
              <Text style={styles.tipText}>Practice 5 new phrases daily</Text>
            </View>
            <View style={styles.tipItem}>
              <Icon name="record-voice-over" size={20} color="#FFD700" />
              <Text style={styles.tipText}>Repeat phrases out loud</Text>
            </View>
            <View style={styles.tipItem}>
              <Icon name="book" size={20} color="#FFD700" />
              <Text style={styles.tipText}>Review bookmarks weekly</Text>
            </View>
            <View style={styles.tipItem}>
              <Icon name="group" size={20} color="#FFD700" />
              <Text style={styles.tipText}>Practice with a friend</Text>
            </View>
          </View>
        )}
      </ScrollView>

      {/* Bookmarks Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showBookmarksModal}
        onRequestClose={() => setShowBookmarksModal(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Bookmarked Phrases</Text>
            <ScrollView>
              {bookmarkedPhrases.length > 0 ? (
                bookmarkedPhrases.map((phrase, index) => (
                  <View key={index} style={styles.modalPhrase}>
                    <Text style={styles.modalEnglish}>{phrase.english}</Text>
                    <Text style={styles.modalHindi}>{phrase.hindi}</Text>
                  </View>
                ))
              ) : (
                <Text style={styles.noBookmarksText}>No bookmarked phrases yet</Text>
              )}
            </ScrollView>
            <Pressable
              style={styles.modalCloseButton}
              onPress={() => setShowBookmarksModal(false)}
            >
              <Text style={styles.modalCloseText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  header: {
    backgroundColor: '#4A6FA5',
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    elevation: 3,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#E0E7FF',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 15,
    paddingHorizontal: 15,
    elevation: 2,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 45,
    color: '#333',
  },
  clearSearch: {
    padding: 5,
  },
  tabsContainer: {
    flexDirection: 'row',
    marginHorizontal: 15,
    marginBottom: 10,
    backgroundColor: '#E9ECF1',
    borderRadius: 10,
    overflow: 'hidden',
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#4A6FA5',
  },
  tabText: {
    color: '#555',
    fontWeight: '500',
  },
  activeTabText: {
    color: 'white',
    fontWeight: '600',
  },
  bookmarkTab: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bookmarkCount: {
    backgroundColor: '#FFD700',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginLeft: 5,
  },
  bookmarkCountText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  sectionContainer: {
    marginBottom: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 2,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#4A6FA5',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  sectionContent: {
    padding: 10,
  },
  categoryContainer: {
    marginBottom: 15,
  },
  categoryTitle: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#E9ECF1',
  },
  phraseCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F8FAFD',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
    borderLeftWidth: 3,
    borderLeftColor: '#4A6FA5',
  },
  phraseContent: {
    flex: 1,
  },
  englishText: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
    color: '#222',
  },
  hindiText: {
    fontSize: 14,
    color: '#555',
  },
  bookmarkButton: {
    padding: 5,
    marginLeft: 10,
  },
  noResults: {
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noResultsText: {
    marginTop: 10,
    color: '#888',
    fontSize: 16,
  },
  learningTips: {
    margin: 15,
    padding: 15,
    backgroundColor: '#E9F2FF',
    borderRadius: 10,
  },
  tipsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4A6FA5',
    marginBottom: 10,
  },
  tipItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  tipText: {
    marginLeft: 10,
    fontSize: 14,
    color: '#333',
  },
  bookmarksContainer: {
    padding: 15,
  },
  bookmarksTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4A6FA5',
    marginBottom: 15,
  },
  bookmarkedPhrase: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 1,
  },
  bookmarkedEnglish: {
    fontSize: 16,
    fontWeight: '500',
    color: '#222',
    marginBottom: 4,
  },
  bookmarkedHindi: {
    fontSize: 14,
    color: '#555',
  },
  noBookmarks: {
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noBookmarksText: {
    marginTop: 10,
    color: '#888',
    fontSize: 16,
    fontWeight: '500',
  },
  noBookmarksSubtext: {
    marginTop: 5,
    color: '#AAA',
    fontSize: 14,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    maxHeight: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4A6FA5',
    marginBottom: 15,
    textAlign: 'center',
  },
  modalPhrase: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  modalEnglish: {
    fontSize: 16,
    fontWeight: '500',
    color: '#222',
  },
  modalHindi: {
    fontSize: 14,
    color: '#555',
  },
  modalCloseButton: {
    marginTop: 15,
    padding: 10,
    backgroundColor: '#4A6FA5',
    borderRadius: 5,
    alignItems: 'center',
  },
  modalCloseText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default DailyPhrasesComponent;