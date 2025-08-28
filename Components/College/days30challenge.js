import React, { useState } from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  StyleSheet, 
  TouchableOpacity, 
  Modal,
  TextInput,
  Dimensions,
  Platform
} from 'react-native';
import { CheckBox } from 'react-native-elements';

// Get screen dimensions
const { width, height } = Dimensions.get('window');
const isTablet = width >= 600;
const isSmallDevice = width < 350;

const ThirtyDayChallengeScreen = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [completedDays, setCompletedDays] = useState({});
  const [notes, setNotes] = useState({});

  const toggleDayCompletion = (day) => {
    setCompletedDays(prev => ({
      ...prev,
      [day]: !prev[day]
    }));
  };

  const updateNotes = (day, text) => {
    setNotes(prev => ({
      ...prev,
      [day]: text
    }));
  };

  const challengeData = [
    {
      day: 'Day 1',
      title: 'Digital Detox Conversation',
      task: '⏱️ 15 mins\nHave a meaningful face-to-face conversation without checking your phone. Notice how presence affects connection.',
      duration: '15 minutes',
      realLifeTip: 'Put your phone in another room during dinner conversations today.'
    },
    {
      day: 'Day 2',
      title: 'Compliment Authenticity',
      task: '⏱️ Throughout day\nGive 3 genuine compliments about specific actions or traits (not appearances).',
      duration: 'Daily practice',
      realLifeTip: "Instead of 'You look nice', try 'I appreciate how you always listen carefully'"
    },
    {
      day: 'Day 3',
      title: 'Active Listening',
      task: '⏱️ 1 conversation\nUse the WAIT technique (Why Am I Talking?) - Speak only 30% of conversation time.',
      duration: '1 conversation',
      realLifeTip: 'Count to 3 before responding to ensure the other person finished speaking'
    },
    {
      day: 'Day 4',
      title: 'Email Mindfulness',
      task: '⏱️ 10 mins\nWrite 2 important emails using the 24-hour rule: Save as draft and revise tomorrow.',
      duration: '10 minutes',
      realLifeTip: 'For emotional emails, add recipient address only after final review'
    },
    {
      day: 'Day 5',
      title: 'Vulnerability Practice',
      task: '⏱️ 1 interaction\nShare one genuine "I feel..." statement in a safe relationship today.',
      duration: '1 interaction',
      realLifeTip: 'Example: "I felt nervous presenting today" instead of "The presentation went fine"'
    },
    {
      day: 'Day 6',
      title: 'Non-Verbal Awareness',
      task: '⏱️ 3 interactions\nNotice your hand gestures - keep them open (palms up) during conversations.',
      duration: '3 interactions',
      realLifeTip: 'Record a 30-second video selfie to observe your natural gestures'
    },
    {
      day: 'Day 7',
      title: 'Small Talk Upgrade',
      task: '⏱️ 2 conversations\nReplace "How are you?" with "What\'s been interesting in your week?"',
      duration: '2 conversations',
      realLifeTip: 'Prepare 3 alternative openers for different social contexts'
    },
    {
      day: 'Day 8',
      title: 'Feedback Framework',
      task: '⏱️ 1 opportunity\nUse the SBI model: "When you [Situation], your [Behavior] made me feel [Impact]."',
      duration: '1 feedback occasion',
      realLifeTip: 'Practice first with positive feedback to build the habit'
    },
    {
      day: 'Day 9',
      title: 'Meeting Contribution',
      task: '⏱️ Next meeting\nMake 1 substantive comment using the PREP method (Point-Reason-Example-Point)',
      duration: '1 meeting',
      realLifeTip: 'Write your contribution structure beforehand if nervous'
    },
    {
      day: 'Day 10',
      title: 'Conflict De-escalation',
      task: '⏱️ 1 tense moment\nPractice "I notice...I wonder..." (e.g., "I notice we have different views, I wonder what common ground we might find")',
      duration: '1 interaction',
      realLifeTip: 'Lower your vocal pitch slightly during tense conversations'
    },
    {
      day: 'Day 11',
      title: 'Power Pause',
      task: '⏱️ 3 times today\nBefore speaking, take one deep breath to center yourself.',
      duration: '3 times',
      realLifeTip: 'Place a small sticky note reminder where you often communicate'
    },
    {
      day: 'Day 12',
      title: 'Persuasion Practice',
      task: '⏱️ 1 conversation\nUse the "Yes, and..." technique instead of "But" when building on others\' ideas.',
      duration: '1 conversation',
      realLifeTip: 'Keep a tally of how many times you say "but" vs "and" today'
    },
    {
      day: 'Day 13',
      title: 'Cultural Curiosity',
      task: '⏱️ 10 mins\nResearch communication norms from a culture different than yours.',
      duration: '10 minutes',
      realLifeTip: 'Find one norm to consciously practice this week (e.g., bowing, eye contact levels)'
    },
    {
      day: 'Day 14',
      title: 'Voice Awareness',
      task: '⏱️ 5 mins\nRecord yourself explaining your job to a 5-year-old. Listen for clarity and warmth.',
      duration: '5 minutes',
      realLifeTip: 'Smile while speaking to naturally add warmth to your voice'
    },
    {
      day: 'Day 15',
      title: 'Boundary Practice',
      task: '⏱️ 1 interaction\nPolitely say no to a request using the "Thank you, but..." framework.',
      duration: '1 interaction',
      realLifeTip: 'Example: "Thank you for thinking of me, but I can\'t commit to that right now"'
    },
    {
      day: 'Day 16',
      title: 'Storytelling',
      task: '⏱️ 7 mins\nPrepare a 1-minute personal story with: Context-Challenge-Transformation structure.',
      duration: '7 minutes',
      realLifeTip: 'Identify 3 go-to stories from your life for different professional situations'
    },
    {
      day: 'Day 17',
      title: 'Email Audit',
      task: '⏱️ 10 mins\nReview sent emails - highlight phrases that sound defensive or unclear.',
      duration: '10 minutes',
      realLifeTip: 'Create templates for 3 common email types to reduce cognitive load'
    },
    {
      day: 'Day 18',
      title: 'Mirror Work',
      task: '⏱️ 2 mins\nPractice introducing yourself in mirror with confident body language.',
      duration: '2 minutes',
      realLifeTip: 'Notice if you fidget or look away - practice holding steady eye contact'
    },
    {
      day: 'Day 19',
      title: 'Question Quality',
      task: '⏱️ 3 conversations\nAsk at least one open-ended question per conversation today.',
      duration: '3 conversations',
      realLifeTip: 'Prepare 5 versatile openers like "What surprised you about...?"'
    },
    {
      day: 'Day 20',
      title: 'Tone Matching',
      task: '⏱️ 2 interactions\nSubtly mirror the energy level of the person you\'re speaking with.',
      duration: '2 interactions',
      realLifeTip: 'Notice how others respond when you match their speaking pace'
    },
    {
      day: 'Day 21',
      title: 'Gratitude Expression',
      task: '⏱️ 1 message\nSend a specific thank you (email/text) acknowledging someone\'s effort.',
      duration: '5 minutes',
      realLifeTip: 'Reference the specific impact of their action, not just "Thanks for..."'
    },
    {
      day: 'Day 22',
      title: 'Presentation Prep',
      task: '⏱️ 10 mins\nPractice a 3-minute talk using the "What? So What? Now What?" structure.',
      duration: '10 minutes',
      realLifeTip: 'Record audio only to focus on vocal clarity without visual distractions'
    },
    {
      day: 'Day 23',
      title: 'Feedback Request',
      task: '⏱️ 1 ask\nRequest specific feedback: "What one thing could I do to communicate more effectively?"',
      duration: '1 request',
      realLifeTip: 'Ask someone who regularly sees you in work situations'
    },
    {
      day: 'Day 24',
      title: 'Jargon Cleanse',
      task: '⏱️ 1 day\nNotice and eliminate 3 industry/acronym terms when speaking to outsiders.',
      duration: '1 day',
      realLifeTip: 'Prepare simple analogies for complex concepts you frequently explain'
    },
    {
      day: 'Day 25',
      title: 'Silence Comfort',
      task: '⏱️ 3 conversations\nAllow 3+ seconds of silence before responding in conversations today.',
      duration: '3 conversations',
      realLifeTip: 'Count mentally to avoid rushing to fill silence'
    },
    {
      day: 'Day 26',
      title: 'Perspective Taking',
      task: '⏱️ 1 conflict\nWrite down 3 possible reasons for someone\'s difficult behavior (non-judgmentally).',
      duration: '5 minutes',
      realLifeTip: 'Assume positive intent - "They might be..." rather than "They\'re being..."'
    },
    {
      day: 'Day 27',
      title: 'Energy Audit',
      task: '⏱️ 1 day\nNotice which interactions drain vs. energize you, and why.',
      duration: '1 day',
      realLifeTip: 'Look for patterns in communication styles that affect your energy'
    },
    {
      day: 'Day 28',
      title: 'Apology Framework',
      task: '⏱️ 1 opportunity\nUse the 4-part apology: 1) Specific regret 2) Acknowledgment 3) Make right 4) Change',
      duration: '1 interaction',
      realLifeTip: 'Avoid "if" or "but" in apologies ("I\'m sorry if..." undermines it)'
    },
    {
      day: 'Day 29',
      title: 'Networking Mindset',
      task: '⏱️ 1 conversation\nApproach someone with curiosity: "What projects are exciting you these days?"',
      duration: '10 minutes',
      realLifeTip: 'Focus on learning about them rather than self-promotion'
    },
    {
      day: 'Day 30',
      title: 'Integration Day',
      task: '⏱️ 20 mins\nReflect: Which 3 communication practices gave you the most impact? Commit to continuing them.',
      duration: '20 minutes',
      realLifeTip: 'Schedule a monthly "communication check-in" with yourself'
    }
  ];
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>30-Day Communication Challenge</Text>
        <Text style={styles.headerSubtitle}>Daily exercises to master professional communication</Text>
        
        <View style={styles.progressContainer}>
          <Text style={styles.progressText}>
            Progress: {Object.values(completedDays).filter(Boolean).length}/30 days completed
          </Text>
          <View style={styles.progressBar}>
            <View style={[
              styles.progressFill,
              { width: `${(Object.values(completedDays).filter(Boolean).length / 30) * 100}%` }
            ]} />
          </View>
        </View>
      </View>

      <View style={styles.challengeGrid}>
        {challengeData.map((dayData, index) => (
          <TouchableOpacity 
            key={index}
            style={[
              styles.dayCard,
              completedDays[dayData.day] && styles.completedCard
            ]}
            onPress={() => setSelectedDay(dayData)}
          >
            <Text style={styles.dayNumber}>{dayData.day}</Text>
            <Text style={styles.dayTitle}>{dayData.title}</Text>
            <Text style={styles.durationText}>{dayData.duration}</Text>
            <CheckBox
              checked={completedDays[dayData.day]}
              onPress={() => toggleDayCompletion(dayData.day)}
              containerStyle={styles.checkbox}
              checkedColor="#00ccff"
            />
          </TouchableOpacity>
        ))}
      </View>

      {/* Day Detail Modal */}
      <Modal
        visible={!!selectedDay}
        animationType="slide"
        transparent={false}
        onRequestClose={() => setSelectedDay(null)}
      >
        {selectedDay && (
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalDay}>{selectedDay.day}</Text>
              <Text style={styles.modalTitle}>{selectedDay.title}</Text>
              <Text style={styles.modalDuration}>{selectedDay.duration}</Text>
              <TouchableOpacity 
                style={styles.closeButton}
                onPress={() => setSelectedDay(null)}
              >
                <Text style={styles.closeText}>×</Text>
              </TouchableOpacity>
            </View>

            <ScrollView style={styles.modalContent}>
              <Text style={styles.taskTitle}>Today's Challenge:</Text>
              <Text style={styles.taskText}>{selectedDay.task}</Text>

              <Text style={styles.notesTitle}>Your Notes:</Text>
              <TextInput
                style={styles.notesInput}
                multiline
                placeholder="Record your observations and insights..."
                value={notes[selectedDay.day] || ''}
                onChangeText={(text) => updateNotes(selectedDay.day, text)}
              />

              <View style={styles.completeContainer}>
                <CheckBox
                  title="Mark as completed"
                  checked={completedDays[selectedDay.day]}
                  onPress={() => toggleDayCompletion(selectedDay.day)}
                  containerStyle={styles.modalCheckbox}
                  textStyle={styles.checkboxText}
                  checkedColor="#00ccff"
                />
              </View>
            </ScrollView>
          </View>
        )}
      </Modal>
    </ScrollView>
  );
};

const responsiveFontSize = (fontSize) => {
  const standardScreenHeight = 680;
  const heightPercent = (fontSize * height) / standardScreenHeight;
  return Math.round(heightPercent);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fa',
  },
  contentContainer: {
    paddingBottom: 20,
  },
  header: {
    backgroundColor: '#0d0d0d',
    padding: width * 0.05,
    paddingBottom: 15,
    paddingTop: Platform.OS === 'ios' ? height * 0.06 : height * 0.04,
  },
  headerTitle: {
    fontSize: responsiveFontSize(isTablet ? 28 : 24),
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: responsiveFontSize(isTablet ? 16 : 14),
    color: '#aaa',
    textAlign: 'center',
    marginBottom: 15,
  },
  progressContainer: {
    marginTop: 10,
  },
  progressText: {
    color: '#fff',
    fontSize: responsiveFontSize(14),
    marginBottom: 5,
    textAlign: 'center',
  },
  progressBar: {
    height: 8,
    backgroundColor: '#333',
    borderRadius: 4,
    overflow: 'hidden',
    marginHorizontal: width * 0.1,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#00ccff',
  },
  challengeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: width * 0.04,
  },
  dayCard: {
    width: isTablet ? '31%' : isSmallDevice ? '100%' : '48%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: width * 0.04,
    marginBottom: width * 0.04,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  completedCard: {
    borderLeftWidth: 4,
    borderLeftColor: '#00ccff',
    backgroundColor: '#f0f9ff',
  },
  dayNumber: {
    fontSize: responsiveFontSize(16),
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  dayTitle: {
    fontSize: responsiveFontSize(isSmallDevice ? 12 : 14),
    color: '#555',
    marginBottom: 5,
    minHeight: isTablet ? 60 : 40,
  },
  durationText: {
    fontSize: responsiveFontSize(12),
    color: '#777',
    marginBottom: 10,
  },
  checkbox: {
    padding: 0,
    margin: 0,
    marginLeft: -5,
    borderWidth: 0,
    backgroundColor: 'transparent',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  modalHeader: {
    backgroundColor: '#0d0d0d',
    padding: width * 0.05,
    paddingTop: Platform.OS === 'ios' ? height * 0.06 : height * 0.04,
  },
  modalDay: {
    fontSize: responsiveFontSize(18),
    color: '#00ccff',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  modalTitle: {
    fontSize: responsiveFontSize(isTablet ? 26 : 22),
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  modalDuration: {
    fontSize: responsiveFontSize(16),
    color: '#aaa',
    marginBottom: 10,
  },
  closeButton: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? height * 0.06 : height * 0.04,
    right: 15,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 15,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeText: {
    color: 'white',
    fontSize: 20,
    lineHeight: 28,
  },
  modalContent: {
    padding: width * 0.05,
  },
  taskTitle: {
    fontSize: responsiveFontSize(18),
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  taskText: {
    fontSize: responsiveFontSize(16),
    lineHeight: 24,
    color: '#444',
    marginBottom: 20,
  },
  notesTitle: {
    fontSize: responsiveFontSize(18),
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    marginTop: 20,
  },
  notesInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 15,
    minHeight: 100,
    fontSize: responsiveFontSize(16),
    marginBottom: 20,
    textAlignVertical: 'top',
  },
  completeContainer: {
    marginTop: 10,
  },
  modalCheckbox: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    marginLeft: 0,
    padding: 0,
  },
  checkboxText: {
    fontSize: responsiveFontSize(16),
    fontWeight: 'normal',
  },
});

export default ThirtyDayChallengeScreen;