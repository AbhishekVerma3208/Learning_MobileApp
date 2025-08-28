import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput, Alert, Modal, Button } from 'react-native';
import { Audio } from 'expo-av';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Section4 = () => {
  const [expandedSections, setExpandedSections] = useState({});
  const [sound, setSound] = useState();
  const [practiceModalVisible, setPracticeModalVisible] = useState(false);
  const [currentPractice, setCurrentPractice] = useState(null);
  const [userResponse, setUserResponse] = useState('');
  const [bookmarks, setBookmarks] = useState([]);
  const [activeTab, setActiveTab] = useState('phrases');

  const spokenEnglishData = [
    {
      title: "1. Introducing Yourself (अपना परिचय देना)",
      categories: [
        {
          name: "Formal Introduction (Job/Interview/Meeting)",
          phrases: [
            { 
              english: "Hello, my name is [Your Name]. I'm pleased to meet you.", 
              hindi: "नमस्ते, मेरा नाम [आपका नाम] है। आपसे मिलकर खुशी हुई।",
              audio: 'formal_intro', 
              tips: "Maintain eye contact and firm handshake. Smile naturally."
            },
            { 
              english: "Good morning, I'm [Your Name] from [Your Company/Department].", 
              hindi: "सुप्रभात, मैं [आपकी कंपनी/विभाग] से [आपका नाम] हूँ।",
              audio: 'morning_intro',
              tips: "State your name clearly and pause slightly after saying it"
            },
          ],
          practiceScenarios: [
            {
              prompt: "You're entering a job interview. Introduce yourself to the panel.",
              suggestions: [
                "Good morning, my name is...",
                "I'm pleased to be here for...",
                "Thank you for this opportunity..."
              ],
              keywords: "name, opportunity, position"
            }
          ]
        },
        {
          name: "Casual Introduction (Friends/Social Settings)",
          phrases: [
            { 
              english: "Hey! I'm [Name]. What's your name?", 
              hindi: "हेय! मैं [नाम] हूँ। तुम्हारा नाम क्या है?",
              audio: 'casual_intro',
              tips: "Use a friendly tone and open body language"
            },
            { 
              english: "Hi there! I don't think we've met. I'm [Name].", 
              hindi: "हाय! मुझे नहीं लगता कि हम मिले हैं। मैं [नाम] हूँ।",
              tips: "Good for parties or social gatherings"
            },
          ]
        },
        {
          name: "Self-Introduction Tips",
          phrases: [
            { 
              english: "Keep it concise (30-60 seconds)", 
              hindi: "संक्षिप्त रखें (30-60 सेकंड)",
              tips: "Practice your elevator pitch"
            },
            { 
              english: "Mention your role and one interesting fact", 
              hindi: "अपनी भूमिका और एक रोचक तथ्य बताएं",
              tips: "Helps people remember you"
            },
          ]
        }
      ],
      tips: "Use appropriate body language (smile, eye contact, handshake). Ask follow-up questions to show interest in others."
    },
    {
      title: "2. Daily Conversations (दैनिक वार्तालाप)",
      categories: [
        {
          name: "Greetings (अभिवादन)",
          phrases: [
            { 
              english: "Good morning! How are you today?", 
              hindi: "सुप्रभात! आप आज कैसे हैं?",
              audio: 'morning_greet'
            },
            { 
              english: "Hi there! Long time no see. How have you been?", 
              hindi: "नमस्ते! लंबे समय से मुलाकात नहीं हुई। आप कैसे हैं?",
              audio: 'long_time'
            },
          ]
        },
        {
          name: "Small Talk (हल्की-फुल्की बातचीत)",
          phrases: [
            { 
              english: "Lovely weather we're having, isn't it?", 
              hindi: "मौसम बहुत अच्छा है, है ना?",
              tips: "Safe topic in most cultures"
            },
            { 
              english: "How was your weekend? Do anything interesting?", 
              hindi: "आपका सप्ताहांत कैसा रहा? कुछ दिलचस्प किया?",
              audio: 'weekend_talk'
            },
          ],
          practiceScenarios: [
            {
              prompt: "You meet a colleague at the coffee machine. Start a casual conversation.",
              suggestions: [
                "Hi [Name], how's your day going?",
                "Did you catch the game last night?",
                "Working on anything interesting today?"
              ],
              keywords: "how, day, going"
            }
          ]
        },
        {
          name: "Asking for Help (मदद मांगना)",
          phrases: [
            { 
              english: "Excuse me, could you help me with something?", 
              hindi: "क्षमा करें, क्या आप मेरी किसी बात में मदद कर सकते हैं?",
              audio: 'ask_help'
            },
            { 
              english: "I'm having trouble with [task]. Do you have a minute?", 
              hindi: "मुझे [कार्य] में परेशानी हो रही है। क्या आपके पास एक मिनट है?",
              tips: "Be specific about what you need"
            },
          ]
        }
      ],
      tips: "Listen actively and show genuine interest. Pay attention to cultural norms in different settings."
    },
    {
      title: "3. Professional Communication (पेशेवर संचार)",
      categories: [
        {
          name: "Meetings (बैठकें)",
          phrases: [
            { 
              english: "Let's circle back to that point later in the discussion.", 
              hindi: "चलो चर्चा में बाद में उस बिंदु पर वापस आते हैं।",
              audio: 'circle_back'
            },
            { 
              english: "I'd like to build on what [Name] just said...", 
              hindi: "मैं [नाम] द्वारा अभी कही गई बात पर आगे बनाना चाहूंगा...",
              tips: "Shows you're listening and contributing"
            },
          ]
        },
        {
          name: "Email Communication (ईमेल संचार)",
          phrases: [
            { 
              english: "I'm writing to follow up on our recent conversation...", 
              hindi: "मैं हमारी हाल की बातचीत पर फॉलो अप करने के लिए लिख रहा हूँ...",
              audio: 'email_followup'
            },
            { 
              english: "Please find attached the document you requested.", 
              hindi: "कृपया अनुरोध किया गया दस्तावेज़ संलग्न पाएं।",
              tips: "Standard email phrase"
            },
          ],
          practiceScenarios: [
            {
              prompt: "You need to write a professional email requesting information from a client.",
              suggestions: [
                "Dear [Name], I hope this email finds you well.",
                "I'm reaching out to inquire about...",
                "Could you please provide details regarding..."
              ],
              keywords: "inquire, details, regarding"
            }
          ]
        },
        {
          name: "Phone Etiquette (फोन शिष्टाचार)",
          phrases: [
            { 
              english: "Hello, this is [Your Name] calling from [Company].", 
              hindi: "नमस्ते, यह [कंपनी] से [आपका नाम] बोल रहा है।",
              audio: 'phone_intro'
            },
            { 
              english: "Could you please hold for a moment while I transfer your call?", 
              hindi: "क्या आप कृपया एक पल रुक सकते हैं जबकि मैं आपका कॉल ट्रांसफर करता हूँ?",
              tips: "Always ask before putting someone on hold"
            },
          ]
        }
      ],
      tips: "Be concise but polite. Use professional vocabulary appropriate to your industry."
    },
    {
      title: "4. Travel & Directions (यात्रा और दिशा-निर्देश)",
      categories: [
        {
          name: "Asking for Directions (रास्ता पूछना)",
          phrases: [
            { 
              english: "Excuse me, could you tell me how to get to [location]?", 
              hindi: "क्षमा करें, क्या आप मुझे बता सकते हैं कि [स्थान] तक कैसे पहुँचा जाए?",
              audio: 'ask_directions'
            },
            { 
              english: "Is this the right way to [landmark]?", 
              hindi: "क्या यह [लैंडमार्क] का सही रास्ता है?",
              tips: "Point while asking to be clearer"
            },
          ]
        },
        {
          name: "Public Transportation (सार्वजनिक परिवहन)",
          phrases: [
            { 
              english: "Does this bus go to [destination]?", 
              hindi: "क्या यह बस [गंतव्य] तक जाती है?",
              audio: 'bus_destination'
            },
            { 
              english: "How much is a ticket to [station]?", 
              hindi: "[स्टेशन] तक का टिकट कितने का है?",
              tips: "Have small bills ready when asking"
            },
          ],
          practiceScenarios: [
            {
              prompt: "You're lost in a new city. Ask a stranger for directions to your hotel.",
              suggestions: [
                "Excuse me, I seem to be lost...",
                "Could you help me find [Hotel Name]?",
                "Is it within walking distance or should I take a taxi?"
              ],
              keywords: "lost, help, find"
            }
          ]
        },
        {
          name: "Hotel/Airport Phrases (होटल/हवाई अड्डे के वाक्यांश)",
          phrases: [
            { 
              english: "I have a reservation under the name [Your Name].", 
              hindi: "मेरा [आपका नाम] नाम से आरक्षण है।",
              audio: 'hotel_reservation'
            },
            { 
              english: "Where is the baggage claim area?", 
              hindi: "सामान दावा क्षेत्र कहाँ है?",
              tips: "Essential airport phrase"
            },
          ]
        }
      ],
      tips: "Learn basic phrases of the local language. Always be polite when asking for help in unfamiliar places."
    },
    {
      title: "5. Social Situations (सामाजिक स्थितियाँ)",
      categories: [
        {
          name: "Invitations (आमंत्रण)",
          phrases: [
            { 
              english: "Would you like to join us for dinner this weekend?", 
              hindi: "क्या आप इस सप्ताहांत हमारे साथ रात के खाने में शामिल होंगे?",
              audio: 'dinner_invite'
            },
            { 
              english: "We're having a small get-together. Do you think you can make it?", 
              hindi: "हम एक छोटी सी गेट-टुगेदर कर रहे हैं। क्या आप आ सकते हैं?",
              tips: "Casual invitation phrasing"
            },
          ]
        },
        {
          name: "Expressing Opinions (राय व्यक्त करना)",
          phrases: [
            { 
              english: "In my view, the best approach would be...", 
              hindi: "मेरे विचार में, सबसे अच्छा तरीका यह होगा...",
              audio: 'express_opinion'
            },
            { 
              english: "I see what you're saying, but I have a slightly different perspective.", 
              hindi: "मैं समझता हूँ कि आप क्या कह रहे हैं, लेकिन मेरा एक थोड़ा अलग नजरिया है।",
              tips: "Polite way to disagree"
            },
          ],
          practiceScenarios: [
            {
              prompt: "A friend asks your opinion about a controversial topic. Respond diplomatically.",
              suggestions: [
                "That's an interesting question...",
                "I can see both sides of this issue...",
                "Personally, I tend to think that..."
              ],
              keywords: "interesting, both sides, personally"
            }
          ]
        },
        {
          name: "Dealing with Difficult Situations (कठिन परिस्थितियों से निपटना)",
          phrases: [
            { 
              english: "I appreciate your patience while we resolve this issue.", 
              hindi: "हम इस मुद्दे को हल करते समय आपके धैर्य की सराहना करते हैं।",
              audio: 'appreciate_patience'
            },
            { 
              english: "Let me see what I can do to help with this situation.", 
              hindi: "मुझे देखने दो कि मैं इस स्थिति में मदद के लिए क्या कर सकता हूँ।",
              tips: "Shows willingness to help without promising solutions"
            },
          ]
        }
      ],
      tips: "Read the room before expressing strong opinions. Be mindful of cultural differences in social norms."
    }
  ];

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const toggleBookmark = (phrase) => {
    if (bookmarks.some(b => b.english === phrase.english)) {
      setBookmarks(bookmarks.filter(p => p.english !== phrase.english));
    } else {
      setBookmarks([...bookmarks, phrase]);
    }
  };

  const startPractice = (practice) => {
    setCurrentPractice(practice);
    setPracticeModalVisible(true);
    setUserResponse('');
  };

  const checkPracticeResponse = () => {
    if (!currentPractice) return;
    
    const keywordMatch = currentPractice.keywords.split(', ').some(keyword => 
      userResponse.toLowerCase().includes(keyword.toLowerCase())
    );
    
    if (keywordMatch || userResponse.length > 20) {
      Alert.alert(
        "Good job!", 
        "Your response was appropriate for this situation.",
        [{ text: "OK", onPress: () => setPracticeModalVisible(false) }]
      );
    } else {
      Alert.alert(
        "Try again", 
        "Consider using some of the suggested phrases or expanding your response.",
        [{ text: "OK" }]
      );
    }
  };

  // const playSound = async (soundFile) => {
  //   try {
  //     const { sound } = await Audio.Sound.createAsync(
  //       require(`../assets/sounds/${soundFile}.mp3`)
  //     );
  //     setSound(sound);
  //     await sound.playAsync();
  //   } catch (error) {
  //     console.error("Error playing sound:", error);
  //     Alert.alert("Audio not available", "The sound file is missing.");
  //   }
  // };

  const renderPhraseCard = (phrase, category) => (
    <View style={styles.phraseCard} key={phrase.english}>
      <View style={styles.phraseContent}>
        <Text style={styles.englishText}>{phrase.english}</Text>
        <Text style={styles.hindiText}>{phrase.hindi}</Text>
        {phrase.tips && (
          <View style={styles.tipContainer}>
            <MaterialIcons name="lightbulb-outline" size={16} color="#FFD700" />
            <Text style={styles.tipText}> {phrase.tips}</Text>
          </View>
        )}
      </View>
      <View style={styles.phraseActions}>
        {phrase.audio && (
          <TouchableOpacity 
            onPress={() => playSound(phrase.audio)}
            style={styles.audioButton}
          >
            <Ionicons name="volume-medium-outline" size={24} color="#5E35B1" />
          </TouchableOpacity>
        )}
        <TouchableOpacity 
          onPress={() => toggleBookmark(phrase)}
          style={styles.bookmarkButton}
        >
          <FontAwesome 
            name={bookmarks.some(b => b.english === phrase.english) ? "bookmark" : "bookmark-o"} 
            size={22} 
            color="#5E35B1" 
          />
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderPracticeButton = (scenario) => (
    <TouchableOpacity 
      style={styles.practiceButton}
      onPress={() => startPractice(scenario)}
    >
      <Text style={styles.practiceButtonText}>
        <MaterialIcons name="record-voice-over" size={16} color="white" /> Practice This Scenario
      </Text>
    </TouchableOpacity>
  );

  const renderSection = (section) => (
    <View style={styles.sectionContainer} key={section.title}>
      <TouchableOpacity 
        onPress={() => toggleSection(section.title)}
        style={styles.sectionHeader}
      >
        <Text style={styles.sectionTitle}>{section.title}</Text>
        <MaterialIcons 
          name={expandedSections[section.title] ? "keyboard-arrow-down" : "keyboard-arrow-right"} 
          size={24} 
          color="white" 
        />
      </TouchableOpacity>
      
      {expandedSections[section.title] && (
        <View style={styles.sectionContent}>
          {activeTab === 'phrases' && section.categories.map(category => (
            <View key={category.name} style={styles.categoryContainer}>
              <Text style={styles.categoryTitle}>{category.name}</Text>
              {category.phrases.map(phrase => renderPhraseCard(phrase, category.name))}
              
              {category.practiceScenarios?.map((scenario, index) => (
                <View key={index}>
                  {renderPracticeButton(scenario)}
                </View>
              ))}
            </View>
          ))}
          
          {activeTab === 'tips' && section.tips && (
            <View style={styles.tipsBox}>
              <Text style={styles.tipsTitle}>Pro Tips:</Text>
              <Text style={styles.tipsText}>{section.tips}</Text>
            </View>
          )}
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Spoken English Guide</Text>
        <View style={styles.tabContainer}>
          <TouchableOpacity 
            style={[styles.tabButton, activeTab === 'phrases' && styles.activeTab]}
            onPress={() => setActiveTab('phrases')}
          >
            <Text style={styles.tabText}>Phrases</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.tabButton, activeTab === 'tips' && styles.activeTab]}
            onPress={() => setActiveTab('tips')}
          >
            <Text style={styles.tabText}>Tips</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {spokenEnglishData.map(section => renderSection(section))}
        
        <View style={styles.finalTips}>
          <Text style={styles.finalTipsTitle}>Final Tips for Better Spoken English:</Text>
          <View style={styles.tipItem}>
            <MaterialIcons name="check-circle" size={16} color="#5E35B1" />
            <Text style={styles.tipText}> Listen & Repeat – Watch English movies, repeat dialogues aloud</Text>
          </View>
          <View style={styles.tipItem}>
            <MaterialIcons name="check-circle" size={16} color="#5E35B1" />
            <Text style={styles.tipText}> Think in English – Avoid translating from Hindi in your mind</Text>
          </View>
          <View style={styles.tipItem}>
            <MaterialIcons name="check-circle" size={16} color="#5E35B1" />
            <Text style={styles.tipText}> Practice Daily – Talk to friends or record yourself speaking</Text>
          </View>
          <View style={styles.tipItem}>
            <MaterialIcons name="check-circle" size={16} color="#5E35B1" />
            <Text style={styles.tipText}> Expand Vocabulary – Learn 5 new words daily and use them</Text>
          </View>
          <View style={styles.tipItem}>
            <MaterialIcons name="check-circle" size={16} color="#5E35B1" />
            <Text style={styles.tipText}> Don't Fear Mistakes – Every error is a learning opportunity</Text>
          </View>
        </View>
      </ScrollView>

      {/* Practice Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={practiceModalVisible}
        onRequestClose={() => setPracticeModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Practice Scenario</Text>
            <Text style={styles.modalPrompt}>{currentPractice?.prompt}</Text>
            
            <TextInput
              style={styles.responseInput}
              multiline
              placeholder="Type your response in English..."
              value={userResponse}
              onChangeText={setUserResponse}
              placeholderTextColor="#999"
            />
            
            <Text style={styles.suggestionsTitle}>Suggested Phrases:</Text>
            <View style={styles.suggestionsContainer}>
              {currentPractice?.suggestions.map((suggestion, index) => (
                <Text key={index} style={styles.suggestionText}>• {suggestion}</Text>
              ))}
            </View>
            
            <View style={styles.modalButtons}>
              <TouchableOpacity 
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setPracticeModalVisible(false)}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.modalButton, styles.checkButton]}
                onPress={checkPracticeResponse}
              >
                <Text style={styles.buttonText}>Check Response</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3EDF7',
  },
  header: {
    backgroundColor: '#5E35B1',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    elevation: 4,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
  },
  tabButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  activeTab: {
    backgroundColor: '#7E57C2',
  },
  tabText: {
    color: 'white',
    fontWeight: '500',
  },
  scrollContainer: {
    paddingBottom: 30,
  },
  sectionContainer: {
    marginHorizontal: 15,
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 2,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 18,
    backgroundColor: '#7E57C2',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    flexShrink: 1,
  },
  sectionContent: {
    padding: 15,
  },
  categoryContainer: {
    marginBottom: 25,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
    color: '#333',
    borderBottomWidth: 1,
    borderBottomColor: '#E1BEE7',
    paddingBottom: 8,
  },
  phraseCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FAF5FF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#5E35B1',
    elevation: 1,
  },
  phraseContent: {
    flex: 1,
    marginRight: 10,
  },
  englishText: {
    fontSize: 16,
    marginBottom: 6,
    fontWeight: '500',
    color: '#333',
  },
  hindiText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 8,
    lineHeight: 20,
  },
  tipContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  tipText: {
    fontSize: 13,
    color: '#666',
    fontStyle: 'italic',
    flexShrink: 1,
  },
  phraseActions: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  audioButton: {
    marginRight: 10,
  },
  bookmarkButton: {
    marginLeft: 5,
  },
  tipsBox: {
    backgroundColor: '#EDE7F6',
    padding: 15,
    borderRadius: 10,
    marginTop: 15,
  },
  tipsTitle: {
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#5E35B1',
    fontSize: 16,
  },
  tipsText: {
    color: '#444',
    lineHeight: 22,
  },
  practiceButton: {
    backgroundColor: '#5E35B1',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  practiceButtonText: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  finalTips: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    margin: 15,
    elevation: 2,
  },
  finalTipsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#5E35B1',
    textAlign: 'center',
  },
  tipItem: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'flex-start',
  },
  tipText: {
    flex: 1,
    marginLeft: 8,
    color: '#444',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    borderRadius: 12,
    width: '90%',
    maxHeight: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#5E35B1',
  },
  modalPrompt: {
    fontSize: 16,
    marginBottom: 20,
    color: '#333',
    lineHeight: 22,
  },
  responseInput: {
    borderWidth: 1,
    borderColor: '#D1C4E9',
    borderRadius: 8,
    padding: 15,
    minHeight: 120,
    marginBottom: 15,
    fontSize: 15,
    backgroundColor: '#FAF5FF',
  },
  suggestionsTitle: {
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#5E35B1',
  },
  suggestionsContainer: {
    backgroundColor: '#F3EDF7',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  suggestionText: {
    marginBottom: 5,
    color: '#555',
    lineHeight: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  modalButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    minWidth: '48%',
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#E1BEE7',
  },
  checkButton: {
    backgroundColor: '#5E35B1',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Section4;