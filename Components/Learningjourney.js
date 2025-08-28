import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
  FlatList
} from 'react-native';
import { useEffect, useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

const questions = [
  { key: 'name', question: 'What is your name?', example: 'Example: John Doe' },
  {
    key: 'goal',
    question: 'What is your study goal?',
    example: 'Example: Crack JEE, Improve Math',
  },
  { key: 'wakeTime', question: 'What time do you wake up?', example: 'Example: 6:00 AM' },
  { key: 'sleepTime', question: 'What time do you sleep?', example: 'Example: 10:00 PM' },
  { key: 'studyHours', question: 'How many hours can you study daily?', example: 'Example: 5 hours' },
  { key: 'sessionTime', question: 'How long can you study in one session?', example: 'Example: 1 hour, 2 hours' },
];

const cleanTimeInput = (timeString) => {
  if (!timeString) return '7:00 AM';

  let cleanedTimeString = timeString.trim().toLowerCase().replace(/\s+/g, '');
  
  if (cleanedTimeString.includes('am') || cleanedTimeString.includes('pm')) {
    cleanedTimeString = cleanedTimeString.replace(/(am|pm)/, (match) => match.toUpperCase());
  } else {
    cleanedTimeString += ' AM';
  }

  if (!cleanedTimeString.includes(':')) {
    const parts = cleanedTimeString.split(/(AM|PM)/i);
    const hourPart = parts[0];
    cleanedTimeString = `${hourPart}:00 ${parts[1] || 'AM'}`;
  }

  return cleanedTimeString;
};

const generateDailyPlan = (formData) => {
  const { wakeTime, sleepTime, studyHours, sessionTime } = formData;
  const totalStudyHours = parseInt(studyHours) || 5;
  const maxSessionTime = parseInt(sessionTime) || 2;

  const wakeMinutes = convertToMinutes(cleanTimeInput(wakeTime || '7:00 AM'));
  const sleepMinutes = convertToMinutes(cleanTimeInput(sleepTime || '11:00 PM'));

  if (sleepMinutes <= wakeMinutes) {
    Alert.alert('Error', 'Sleep time must be after wake time!');
    return [];
  }

  const plans = [];
  const fillerActivities = [
    'Watch TV',
    'Play Video Games',
    'Exercise',
    'General Knowledge (GK) Practice',
    'English Speaking Practice',
    'Read a Book',
    'Listen to a Podcast',
    'Go for a Walk',
    'Spend time with family or friends',
    'Mindfulness / Meditation',
  ];

  for (let day = 1; day <= 7; day++) {
    let currentTime = wakeMinutes;
    const routine = [];

    routine.push({
      timeSlot: `${formatTime(currentTime)} - ${formatTime(currentTime + 30)}`,
      task: 'Freshen up and get ready',
    });
    currentTime += 30;

    routine.push({
      timeSlot: `${formatTime(currentTime)} - ${formatTime(currentTime + 30)}`,
      task: 'Have a healthy breakfast',
    });
    currentTime += 30;

    let remainingStudyMinutes = totalStudyHours * 60;
    while (remainingStudyMinutes > 0 && currentTime + 30 <= sleepMinutes) {
      const sessionDuration = Math.min(
        getRandomSessionTime(maxSessionTime),
        remainingStudyMinutes
      );

      routine.push({
        timeSlot: `${formatTime(currentTime)} - ${formatTime(currentTime + sessionDuration)}`,
        task: `Study Session - ${getRandomSubject()}`,
      });
      currentTime += sessionDuration;
      remainingStudyMinutes -= sessionDuration;

      if (remainingStudyMinutes > 0 && currentTime + 15 <= sleepMinutes) {
        routine.push({
          timeSlot: `${formatTime(currentTime)} - ${formatTime(currentTime + 15)}`,
          task: 'Short Break',
        });
        currentTime += 15;
      }
    }

    if (currentTime + 60 <= sleepMinutes) {
      routine.push({
        timeSlot: `${formatTime(currentTime)} - ${formatTime(currentTime + 60)}`,
        task: 'Evening Revision / Light Reading',
      });
      currentTime += 60;
    }

    while (currentTime < sleepMinutes) {
      const randomActivity = fillerActivities[Math.floor(Math.random() * fillerActivities.length)];
      const remainingMinutes = sleepMinutes - currentTime;
      const activityDuration = Math.min(remainingMinutes, Math.floor(Math.random() * 31) + 30);

      routine.push({
        timeSlot: `${formatTime(currentTime)} - ${formatTime(currentTime + activityDuration)}`,
        task: randomActivity,
      });
      currentTime += activityDuration;
    }

    plans.push({ day: `Day ${day}`, routine });
  }

  return plans;
};

const convertToMinutes = (timeString) => {
  if (!timeString) return 420;
  const [time, period] = timeString.trim().split(' ');
  const [hours, minutes] = time.split(':').map(Number);

  let totalMinutes = (hours % 12) * 60 + (minutes || 0);
  if (period === 'PM' && hours !== 12) totalMinutes += 720;
  if (period === 'AM' && hours === 12) totalMinutes -= 720;
  return totalMinutes;
};

const formatTime = (minutes) => {
  const hours = Math.floor(minutes / 60) % 24;
  const mins = minutes % 60;
  const period = hours >= 12 ? 'PM' : 'AM';
  const displayHour = hours % 12 === 0 ? 12 : hours % 12;
  return `${displayHour}:${mins === 0 ? '00' : mins} ${period}`;
};

const getRandomSessionTime = (maxSessionTime) => {
  return Math.floor(Math.random() * (maxSessionTime * 60 - 30 + 1)) + 30;
};

const getRandomSubject = () => {
  const subjects = [
    'Previous Revisions',
    'Mathematics Practice',
    'Science Concepts',
    'English Reading',
    'Mock Tests',
    'Exam Preparation',
  ];
  return subjects[Math.floor(Math.random() * subjects.length)];
};

const getRandomColor = () => {
  const colors = ['#333', '#2C3E50', '#34495E', '#1F1C2C', '#4B79A1', '#8E44AD', '#2980B9'];
  return colors[Math.floor(Math.random() * colors.length)];
};

const DailyRoutinePlanner = () => {
  const [formData, setFormData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [dailyPlans, setDailyPlans] = useState([]);
  const [savedPlans, setSavedPlans] = useState([]);
  const [viewMode, setViewMode] = useState('new');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadSavedPlans = async () => {
      setIsLoading(true);
      try {
        const saved = await AsyncStorage.getItem('@savedPlans');
        if (saved) {
          setSavedPlans(JSON.parse(saved));
        console.log('Loaded plans:', JSON.parse(saved));
        }
      } catch (e) {
        console.error('Failed to load plans:', e);
      } finally {
        setIsLoading(false);
      }
    };
    loadSavedPlans();
  }, []);

  const handleChange = (value) => {
    setFormData({ ...formData, [questions[currentIndex].key]: value });
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      const plans = generateDailyPlan(formData);
      if (plans.length > 0) {
        setDailyPlans(plans);
        setSubmitted(true);
        setViewMode('new');
      }
    }
  };

  const handleSavePlan = async () => {
    try {
      const newPlan = {
        id: Date.now().toString(),
        name: formData.name || 'My Study Plan',
        goal: formData.goal || 'General Study',
        date: new Date().toLocaleDateString(),
        plans: dailyPlans,
        formData: formData
      };

      const updatedPlans = [...savedPlans, newPlan];
      await AsyncStorage.setItem('@savedPlans', JSON.stringify(updatedPlans));
      setSavedPlans(updatedPlans);
      Alert.alert('Success', 'Plan saved successfully!');
    } catch (e) {
      Alert.alert('Error', 'Failed to save plan');
      console.error(e);
    }
  };

  const handleLoadPlan = (plan) => {
    setDailyPlans(plan.plans);
    setViewMode('view');
  };

  const handleDeletePlan = async (id) => {
    try {
      const updatedPlans = savedPlans.filter(plan => plan.id !== id);
      await AsyncStorage.setItem('@savedPlans', JSON.stringify(updatedPlans));
      setSavedPlans(updatedPlans);
      Alert.alert('Deleted', 'Plan removed successfully');
    } catch (e) {
      Alert.alert('Error', 'Failed to delete plan');
      console.error(e);
    }
  };

  const handleRestart = () => {
    setFormData({});
    setCurrentIndex(0);
    setSubmitted(false);
    setDailyPlans([]);
    setViewMode('new');
  };

  return (
    <LinearGradient colors={['#1F1C2C', '#928DAB']} style={styles.container}>
      {!submitted ? (
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.formContainer}
        >
          <Text style={styles.header}>Create Your Study Plan 📚</Text>
          <Text style={styles.question}>{questions[currentIndex].question}</Text>
          <Text style={styles.example}>{questions[currentIndex].example}</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter your answer"
            placeholderTextColor="#aaa"
            value={formData[questions[currentIndex].key] || ''}
            onChangeText={handleChange}
          />

          <TouchableOpacity style={styles.primaryButton} onPress={handleNext}>
            <Text style={styles.buttonText}>
              {currentIndex === questions.length - 1 ? 'Generate Plan' : 'Next'}
            </Text>
          </TouchableOpacity>

          {savedPlans.length > 0 && (
            <TouchableOpacity
              style={styles.secondaryButton}
              onPress={() => {
                console.log('Switching to saved plans view');
                setViewMode('saved');
                setSubmitted(true);
              }}
            >
              <Text style={styles.buttonText}>View Saved Plans ({savedPlans.length})</Text>
            </TouchableOpacity>
          )}
        </KeyboardAvoidingView>
      ) : viewMode === 'saved' ? (
        <ScrollView contentContainerStyle={styles.savedPlansContainer}>
          <Text style={styles.sectionHeader}>Your Saved Plans</Text>
          
          {isLoading ? (
            <Text style={styles.loadingText}>Loading...</Text>
          ) : savedPlans.length === 0 ? (
            <View style={styles.emptyState}>
              <Text style={styles.emptyText}>No saved plans yet</Text>
              <TouchableOpacity 
                style={styles.primaryButton} 
                onPress={() => setViewMode('new')}
              >
                <Text style={styles.buttonText}>Create New Plan</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <FlatList
              data={savedPlans}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View style={styles.planCard}>
                  <Text style={styles.planTitle}>{item.name}</Text>
                  <Text style={styles.planGoal}>{item.goal}</Text>
                  <Text style={styles.planDate}>Saved: {item.date}</Text>
                  
                  <View style={styles.cardActions}>
                    <TouchableOpacity 
                      style={[styles.actionButton, {backgroundColor: '#3498db'}]}
                      onPress={() => handleLoadPlan(item)}
                    >
                      <Text style={styles.buttonText}>View</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                      style={[styles.actionButton, {backgroundColor: '#e74c3c'}]}
                      onPress={() => handleDeletePlan(item.id)}
                    >
                      <Text style={styles.buttonText}>Delete</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
              contentContainerStyle={{ paddingBottom: 30 }}
            />
          )}

          <TouchableOpacity 
            style={styles.primaryButton}
            onPress={() => setViewMode('new')}
          >
            <Text style={styles.buttonText}>Back to New Plan</Text>
          </TouchableOpacity>
        </ScrollView>
      ) : (
        <ScrollView contentContainerStyle={styles.plansContainer}>
          <Text style={styles.sectionHeader}>
            {viewMode === 'view' ? 'Your Saved Plan' : 'Your 7-Day Study Plan'}
          </Text>

          {dailyPlans.map((plan, index) => (
            <View key={index} style={[styles.dayPlan, {backgroundColor: getRandomColor()}]}>
              <Text style={styles.dayHeader}>{plan.day}</Text>
              {plan.routine.map((item, idx) => (
                <View key={idx} style={styles.timeSlot}>
                  <Text style={styles.timeText}>{item.timeSlot}</Text>
                  <Text style={styles.taskText}>{item.task}</Text>
                </View>
              ))}
            </View>
          ))}

          <View style={styles.buttonGroup}>
            {viewMode === 'new' && (
              <TouchableOpacity 
                style={[styles.primaryButton, {backgroundColor: '#9b59b6'}]}
                onPress={handleSavePlan}
              >
                <Text style={styles.buttonText}>Save This Plan</Text>
              </TouchableOpacity>
            )}
            
            <TouchableOpacity 
              style={styles.primaryButton}
              onPress={handleRestart}
            >
              <Text style={styles.buttonText}>
                {viewMode === 'view' ? 'Back to Saved Plans' : 'Create New Plan'}
              </Text>
            </TouchableOpacity>
            
            {savedPlans.length > 0 && (
              <TouchableOpacity 
                style={styles.secondaryButton}
                onPress={() => {
                  setViewMode('saved');
                  setSubmitted(true);
                }}
              >
                <Text style={styles.buttonText}>View All Saved Plans</Text>
              </TouchableOpacity>
            )}
          </View>
        </ScrollView>
      )}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    marginTop: 50,
  },
  header: {
    fontSize: 24,
    color: '#FFD700',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  question: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 5,
  },
  example: {
    fontSize: 14,
    color: '#aaa',
    marginBottom: 15,
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  primaryButton: {
    backgroundColor: '#2ecc71',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  secondaryButton: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  savedPlansContainer: {
    padding: 15,
    paddingBottom: 30,
  },
  sectionHeader: {
    fontSize: 22,
    color: '#FFD700',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  planCard: {
    backgroundColor: 'rgba(46, 49, 49, 0.7)',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  planTitle: {
    fontSize: 18,
    color: '#FFD700',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  planGoal: {
    fontSize: 14,
    color: '#ddd',
    marginBottom: 5,
  },
  planDate: {
    fontSize: 12,
    color: '#aaa',
    marginBottom: 10,
  },
  cardActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  actionButton: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  plansContainer: {
    paddingBottom: 30,
  },
  dayPlan: {
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  dayHeader: {
    fontSize: 18,
    color: '#FFD700',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  timeSlot: {
    marginBottom: 8,
  },
  timeText: {
    fontSize: 14,
    color: '#ddd',
    fontWeight: '500',
  },
  taskText: {
    fontSize: 14,
    color: '#fff',
  },
  buttonGroup: {
    marginTop: 20,
  },
  emptyState: {
    alignItems: 'center',
    marginTop: 50,
  },
  emptyText: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 20,
  },
  loadingText: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
});

export default DailyRoutinePlanner;