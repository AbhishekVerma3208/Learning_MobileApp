import React from 'react';
import { 
  View, 
  Text, 
  Image, 
  StyleSheet, 
  SafeAreaView, 
  ScrollView,
  TouchableOpacity,
  Linking
} from 'react-native';

const ProfessionalInterviewDialogues = () => {
  const dialogues = [
    // Introduction
    {
      sender: 'Interviewer (Mr. Sharma)',
      message: 'Good morning, thank you for coming in today. Let\'s begin with you telling me about yourself.',
      image: require('./assets/interviewer.jpg'),
      analysis: "This is a common icebreaker question. Interviewers use it to assess your communication skills and get an overview of your background.",
      tip: "Keep your answer concise (60-90 seconds), focusing on education, relevant experience, and what brings you to this role."
    },
    {
      sender: 'Candidate (Ravi Kumar)',
      message: 'Good morning Mr. Sharma. I\'m Ravi Kumar, a final-year Computer Science student at IIT Delhi with an 8.2 CGPA. I\'ve developed three mobile applications using React Native, including a campus navigation app currently used by 500+ students. During my internship at TechSolutions, I optimized API response times by 40%. I\'m particularly excited about this opportunity because of your company\'s innovative work in educational technology, which aligns perfectly with my projects and interests.',
      isCandidate: true,
      image: require('./assets/candidate.jpg'),
      analysis: "Strong answer because: 1) Quantifies achievements, 2) Shows technical skills, 3) Demonstrates alignment with company values",
      tip: "Always include metrics when possible (500+ users, 40% improvement) to make your experience tangible."
    },

    // Why should we hire you?
    {
      sender: 'Interviewer',
      message: 'What makes you stand out from other candidates applying for this position?',
      image: require('./assets/interviewer.jpg'),
      analysis: "This question tests your self-awareness and understanding of the role's requirements.",
      tip: "Highlight 2-3 unique strengths that directly address the job description's key needs."
    },
    {
      sender: 'Candidate',
      message: 'I bring three key differentiators: First, hands-on full-stack development experience through both my academic projects and internship. Second, proven problem-solving abilities - my team placed in the top 10 at last year\'s Smart India Hackathon. Third, I learn rapidly - I independently mastered React Native in three months to build my first production app. I can immediately contribute while continuing to expand my skills to meet your team\'s evolving needs.',
      isCandidate: true,
      image: require('./assets/candidate.jpg'),
      analysis: "Effective structure (3 points) with concrete examples. Shows technical ability, problem-solving, and growth mindset.",
      tip: "Use the 'rule of three' for memorable answers - people remember information best in groups of three."
    },

    // Technical question
    {
      sender: 'Interviewer',
      message: 'Describe a technical challenge you faced in a project and how you resolved it.',
      image: require('./assets/interviewer.jpg'),
      analysis: "Behavioral questions like this assess your problem-solving process and technical depth.",
      tip: "Use the STAR method: Situation, Task, Action, Result"
    },
    {
      sender: 'Candidate',
      message: 'In my Smart Campus app, we initially faced 2-second loading delays when displaying large classroom schedules. After analyzing the code, I identified that we were making sequential API calls. I redesigned the data flow to use parallel fetching with Promise.all(), implemented client-side caching, and added a loading skeleton UI. This reduced load times to 0.3 seconds and decreased server load by 60%. The experience taught me the importance of considering scalability from the initial design phase.',
      isCandidate: true,
      image: require('./assets/candidate.jpg'),
      analysis: "Excellent answer: Specific technical details, measurable improvements, and demonstrated learning.",
      tip: "Always conclude with what you learned - interviewers value candidates who grow from experiences."
    },

    // Teamwork scenario
    {
      sender: 'Interviewer',
      message: 'Tell me about a time you had a disagreement with a team member. How did you handle it?',
      image: require('./assets/interviewer.jpg'),
      analysis: "Assesses your conflict resolution and interpersonal skills.",
      tip: "Show emotional intelligence - focus on the resolution, not the conflict."
    },
    {
      sender: 'Candidate',
      message: 'During our hackathon project, a teammate and I disagreed on whether to use Firebase or build a custom backend. I suggested we list the pros and cons of each approach, then consult our mentor. After discussing latency requirements and our team\'s expertise, we compromised by using Firebase with Cloud Functions for customization. This taught me that technical decisions often benefit from multiple perspectives and data-driven discussions.',
      isCandidate: true,
      image: require('./assets/candidate.jpg'),
      analysis: "Shows maturity, collaboration, and problem-solving without blaming others.",
      tip: "Use 'I' statements to describe your actions in conflicts, not 'we' statements."
    },

    // Future goals
    {
      sender: 'Interviewer',
      message: 'Where do you see yourself in five years?',
      image: require('./assets/interviewer.jpg'),
      analysis: "Tests your ambition and career alignment with the company.",
      tip: "Show growth aspirations while demonstrating commitment to the organization."
    },
    {
      sender: 'Candidate',
      message: 'In five years, I see myself as a senior developer leading technical projects while continuing to deepen my expertise in AI integration. I\'m particularly interested in how machine learning can enhance user experiences in educational apps, which aligns with your company\'s roadmap. I hope to grow within this organization, mentoring junior developers while contributing to architectural decisions.',
      isCandidate: true,
      image: require('./assets/candidate.jpg'),
      analysis: "Balances ambition with company loyalty and shows awareness of industry trends.",
      tip: "Connect your goals to the company's direction when possible."
    },

    // Weakness question
    {
      sender: 'Interviewer',
      message: 'What would you consider your greatest area for improvement?',
      image: require('./assets/interviewer.jpg'),
      analysis: "Tricky question designed to test your self-awareness and honesty.",
      tip: "Choose a real but non-critical weakness and show improvement efforts."
    },
    {
      sender: 'Candidate',
      message: 'Earlier in my studies, I tended to jump into coding before fully planning. This sometimes led to rework. I\'ve improved by adopting a "design-first" approach - now I create wireframes and architecture diagrams before writing code, which has reduced my refactoring time by about 30%. I continue working on this by studying system design principles and seeking code reviews.',
      isCandidate: true,
      image: require('./assets/candidate.jpg'),
      analysis: "Turns a weakness into a growth story with measurable improvement.",
      tip: "Never say 'I don\'t have weaknesses' - this suggests lack of self-awareness."
    }
  ];

  // Generate additional technical questions
  const techQuestions = [
    "Explain how you would optimize a slow React Native component.",
    "Describe your approach to state management in complex applications.",
    "How do you ensure code quality in your projects?",
    "Walk me through your debugging process when encountering an unexpected error.",
    "What factors do you consider when choosing between different architectural approaches?"
  ];

  const techAnswers = [
    "For performance optimization, I: 1) Use React.memo for pure components, 2) Implement virtualization for long lists, 3) Optimize image assets, and 4) Avoid unnecessary re-renders. In my campus app, these techniques reduced scroll jank by 70%.",
    "I use a layered approach: Redux Toolkit for global state, React Context for app-wide settings, and local state for UI-specific data. This separation helped my e-commerce app handle 100+ products smoothly while keeping code maintainable.",
    "My code quality framework includes: 1) ESLint/Prettier for consistency, 2) Jest unit tests (85% coverage minimum), 3) Code reviews, and 4) Documentation. This reduced production bugs by 40% in my last project.",
    "My debugging methodology: 1) Reproduce the issue, 2) Check error logs, 3) Isolate components, 4) Use debugging tools, and 5) Add tests to prevent regression. Recently, this helped me fix a memory leak in our image caching system.",
    "I evaluate: 1) Project scale, 2) Team expertise, 3) Performance needs, 4) Maintenance costs, and 5) Future extensibility. For example, I chose Firebase over a custom backend for rapid prototyping in our hackathon project."
  ];

  for (let i = 0; i < techQuestions.length; i++) {
    dialogues.push(
      {
        sender: 'Interviewer',
        message: techQuestions[i],
        image: require('./assets/interviewer.jpg')
      },
      {
        sender: 'Candidate',
        message: techAnswers[i],
        isCandidate: true,
        image: require('./assets/candidate.jpg')
      }
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Professional Interview Simulator</Text>
        <Text style={styles.headerSubtitle}>Master your next technical interview with realistic practice</Text>
      </View>

      <ScrollView contentContainerStyle={styles.innerContainer}>
        {dialogues.map((item, index) => (
          <View key={index} style={[
            styles.messageContainer,
            item.isCandidate ? styles.candidateContainer : styles.interviewerContainer
          ]}>
            <Image source={item.image} style={styles.avatar} />
            <View style={styles.messageContent}>
              <Text style={styles.sender}>{item.sender}</Text>
              <View style={[
                styles.messageBubble,
                item.isCandidate && styles.candidateBubble
              ]}>
                <Text style={styles.messageText}>{item.message}</Text>
              </View>
              
              {item.analysis && (
                <View style={styles.analysisBox}>
                  <Text style={styles.analysisTitle}>Analysis:</Text>
                  <Text style={styles.analysisText}>{item.analysis}</Text>
                  {item.tip && (
                    <>
                      <Text style={styles.tipTitle}>Pro Tip:</Text>
                      <Text style={styles.tipText}>{item.tip}</Text>
                    </>
                  )}
                </View>
              )}
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.practiceButton}
          onPress={() => Linking.openURL('https://wa.me/919759429847?text=Hello%21%20Let%E2%80%99s%20connect')}
        >
          <Text style={styles.practiceButtonText}>Schedule Mock Interview</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    backgroundColor: '#2c3e50',
    padding: 20,
    paddingBottom: 15,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#ecf0f1',
    textAlign: 'center',
  },
  innerContainer: {
    padding: 15,
    paddingBottom: 80,
  },
  messageContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'flex-start',
  },
  interviewerContainer: {
    paddingRight: 50,
  },
  candidateContainer: {
    paddingLeft: 50,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
    borderWidth: 2,
    borderColor: '#fff',
  },
  messageContent: {
    flex: 1,
  },
  sender: {
    fontSize: 14,
    fontWeight: '600',
    color: '#34495e',
    marginBottom: 5,
  },
  messageBubble: {
    backgroundColor: '#ecf0f1',
    padding: 15,
    borderRadius: 15,
    borderTopLeftRadius: 5,
  },
  candidateBubble: {
    backgroundColor: '#d5f5e3',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 5,
  },
  messageText: {
    fontSize: 15,
    lineHeight: 22,
    color: '#2c3e50',
  },
  analysisBox: {
    backgroundColor: '#f0f8ff',
    padding: 12,
    borderRadius: 10,
    marginTop: 10,
    borderLeftWidth: 3,
    borderLeftColor: '#3498db',
  },
  analysisTitle: {
    fontWeight: 'bold',
    color: '#2980b9',
    marginBottom: 5,
  },
  analysisText: {
    fontSize: 13,
    lineHeight: 19,
    color: '#34495e',
    marginBottom: 10,
  },
  tipTitle: {
    fontWeight: 'bold',
    color: '#27ae60',
    marginBottom: 5,
  },
  tipText: {
    fontSize: 13,
    lineHeight: 19,
    color: '#34495e',
    fontStyle: 'italic',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  practiceButton: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  practiceButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ProfessionalInterviewDialogues;