import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';

const CommunicationSkillsScreen = ({navigation}) => {
  const openVideoLink = () => {
    Linking.openURL('https://www.youtube.com/watch?v=exampleTedTalk');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>🗣️ Master Communication Skills</Text>
      <Text style={styles.subheader}>The Complete Guide to Speaking, Listening & Connecting</Text>

      {/* Introduction */}
      <View style={styles.introBox}>
        <Text style={styles.introText}>
          Communication is the #1 skill for career growth and strong relationships. This guide covers:
        </Text>
        <View style={styles.bulletList}>
          <Text style={styles.bullet}>• Verbal & Non-Verbal Techniques</Text>
          <Text style={styles.bullet}>• Science-Backed Exercises</Text>
          <Text style={styles.bullet}>• Real-World Applications</Text>
          <Text style={styles.bullet}>• Advanced Conversation Strategies</Text>
        </View>
      </View>

      {/* Section 1: Speak Confidently (Expanded) */}
      <View style={styles.section}>
        <Text style={styles.title}>1. The Art of Confident Speaking</Text>
        <Text style={styles.description}>
          True confidence in speaking comes from a combination of mental preparation, vocal control, and authentic presence.
        </Text>
        
        <Text style={styles.subtitle}>🔊 Vocal Power Techniques:</Text>
        <Text style={styles.description}>
          - <Text style={styles.highlight}>Diaphragmatic Breathing:</Text> Practice breathing from your diaphragm to project your voice without strain. Place a hand on your stomach - it should expand when you inhale.
          {'\n\n'}
          - <Text style={styles.highlight}>Pitch Variation:</Text> Record yourself reading a paragraph. Analyze where your voice sounds monotone. Re-record with intentional pitch changes on key words.
          {'\n\n'}
          - <Text style={styles.highlight}>Articulation Drills:</Text> Practice tongue twisters daily (e.g., "Red leather, yellow leather") to improve diction.
        </Text>

        <Text style={styles.subtitle}>🧠 Mental Preparation:</Text>
        <Text style={styles.description}>
          - <Text style={styles.highlight}>The 3-Point Method:</Text> For any speaking situation, prepare 3 main points you want to convey. This structures your thoughts.
          {'\n\n'}
          - <Text style={styles.highlight}>Power Posing:</Text> Before important conversations, stand in a "superhero pose" for 2 minutes to boost confidence hormones.
          {'\n\n'}
          - <Text style={styles.highlight}>Anxiety Reframing:</Text> Instead of "I'm nervous," tell yourself "I'm excited and prepared." This cognitive shift reduces stress.
        </Text>

        <Text style={styles.subtitle}>💡 Advanced Exercise:</Text>
        <Text style={styles.description}>
          <Text style={styles.highlight}>"The Mirror Challenge":</Text> For 7 days, deliver a 3-minute impromptu speech on random topics while maintaining eye contact with your reflection. Note improvements in fluency and composure.
        </Text>
        
        <Image source={require('./assets/speak_confidently.jpg')} style={styles.image} />
      </View>

      {/* Section 2: Body Language Mastery (Expanded) */}
      <View style={styles.section}>
        <Text style={styles.title}>2. Body Language Science</Text>
        <Text style={styles.description}>
          Research from Harvard Business School shows your body language shapes how others perceive you and even how you perceive yourself.
        </Text>

        <Text style={styles.subtitle}>🕴️ Power Positions:</Text>
        <Text style={styles.description}>
          - <Text style={styles.highlight}>The Fig Leaf vs. The Ready Position:</Text> Avoid closed postures (hands clasped in front). Instead, keep hands at your sides or gesturing naturally.
          {'\n\n'}
          - <Text style={styles.highlight}>Spatial Awareness:</Text> Maintain appropriate distance (intimate: 0-18", personal: 18"-4', social: 4-12'). Adjust based on cultural context.
        </Text>

        <Text style={styles.subtitle}>👀 Microexpression Training:</Text>
        <Text style={styles.description}>
          - <Text style={styles.highlight}>The 7 Universal Expressions:</Text> Practice recognizing and replicating happiness, sadness, surprise, fear, anger, disgust, and contempt in a mirror.
          {'\n\n'}
          - <Text style={styles.highlight}>The 5-Second Rule:</Text> When meeting someone, maintain eye contact for 5 seconds before naturally breaking gaze to appear trustworthy.
        </Text>

        <Text style={styles.subtitle}>🔄 Synchronization Techniques:</Text>
        <Text style={styles.description}>
          - <Text style={styles.highlight}>Posture Matching:</Text> Subtly mirror the other person's body language to build rapport (wait 10-15 seconds before matching).
          {'\n\n'}
          - <Text style={styles.highlight}>Gesture Choreography:</Text> Plan 3-4 natural hand movements for important points in conversations or presentations.
        </Text>

        <TouchableOpacity style={styles.exerciseBox}>
          <Text style={styles.exerciseTitle}>📝 Body Language Audit</Text>
          <Text style={styles.exerciseText}>
            1. Film a 5-minute conversation
            {'\n'}
            2. Analyze every 30 seconds: posture, gestures, facial expressions
            {'\n'}
            3. Identify 3 areas for improvement
            {'\n'}
            4. Re-record with corrections
          </Text>
        </TouchableOpacity>
      </View>

      {/* Section 3: Deep Listening (Expanded) */}
      <View style={styles.section}>
        <Text style={styles.title}>3. The Listening Matrix</Text>
        <Text style={styles.description}>
          Studies show most people remember only 25-50% of what they hear. Transform your listening with these evidence-based methods.
        </Text>

        <Text style={styles.subtitle}>🧠 Cognitive Listening Techniques:</Text>
        <Text style={styles.description}>
          - <Text style={styles.highlight}>The 3-Level Filter:</Text> 
            {'\n'}1. Literal (what's said)
            {'\n'}2. Emotional (how they feel)
            {'\n'}3. Strategic (why they're sharing this now)
          {'\n\n'}
          - <Text style={styles.highlight}>The 70/30 Rule:</Text> Spend 70% of conversation time listening and only 30% speaking in dialogues.
        </Text>

        <Text style={styles.subtitle}>🤝 Advanced Response Methods:</Text>
        <Text style={styles.description}>
          - <Text style={styles.highlight}>Reflective Paraphrasing:</Text> "What I'm hearing is..." + "Did I get that right?"
          {'\n\n'}
          - <Text style={styles.highlight}>Emotional Labeling:</Text> "It sounds like you're feeling frustrated about..."
          {'\n\n'}
          - <Text style={styles.highlight}>Strategic Silence:</Text> After someone finishes speaking, count to 3 before responding to allow deeper thoughts to emerge.
        </Text>

        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>"Most people do not listen with the intent to understand; they listen with the intent to reply."</Text>
          <Text style={styles.quoteAuthor}>- Stephen R. Covey</Text>
        </View>
      </View>

      {/* Section 4: Public Speaking Framework (Expanded) */}
      <View style={styles.section}>
        <Text style={styles.title}>4. The TED Talk Method</Text>
        <Text style={styles.description}>
          Deconstructing the world's most effective public speaking formula used by TED speakers.
        </Text>

        <Text style={styles.subtitle}>🎯 The 4-Part Structure:</Text>
        <Text style={styles.description}>
          1. <Text style={styles.highlight}>Hook:</Text> Start with a surprising fact, question, or story (first 30 seconds are crucial)
          {'\n\n'}
          2. <Text style={styles.highlight}>Context:</Text> "Why this matters..." (establish relevance)
          {'\n\n'}
          3. <Text style={styles.highlight}>Insight:</Text> Your unique perspective with data/stories
          {'\n\n'}
          4. <Text style={styles.highlight}>Action:</Text> Clear next steps or thought-provoking conclusion
        </Text>

        <Text style={styles.subtitle}>📊 Science of Memorable Talks:</Text>
        <Text style={styles.description}>
          - <Text style={styles.highlight}>The 10-20-30 Rule:</Text> 10 slides max, 20 minutes ideal, 30pt font minimum
          {'\n\n'}
          - <Text style={styles.highlight}>Peak-End Rule:</Text> Audiences remember emotional peaks and the ending most
          {'\n\n'}
          - <Text style={styles.highlight}>The 3-Act Story:</Text> Setup (normal world), Conflict (problem), Resolution (transformation)
        </Text>

        <TouchableOpacity style={styles.videoPlaceholder} onPress={openVideoLink}>
          <Text style={styles.videoText}>🎥 Watch: "How to Speak Like TED" Analysis</Text>
        </TouchableOpacity>
      </View>

      {/* Section 5: Conflict Resolution (Expanded) */}
      <View style={styles.section}>
        <Text style={styles.title}>5. Diplomatic Communication</Text>
        <Text style={styles.description}>
          Based on FBI negotiation techniques and couples therapy research, these methods resolve conflicts at home and work.
        </Text>

        <Text style={styles.subtitle}>🕊️ De-escalation Framework:</Text>
        <Text style={styles.description}>
          <Text style={styles.highlight}>The CALM Method:</Text>
          {'\n'}C - Control your physiology (deep breathing)
          {'\n'}A - Acknowledge their perspective
          {'\n'}L - Label emotions neutrally
          {'\n'}M - Move toward solution
        </Text>

        <Text style={styles.subtitle}>💞 Relationship Repair Tools:</Text>
        <Text style={styles.description}>
          - <Text style={styles.highlight}>The 5:1 Ratio:</Text> For every criticism, give five positive acknowledgments
          {'\n\n'}
          - <Text style={styles.highlight}>Nonviolent Communication:</Text> Observations → Feelings → Needs → Requests
          {'\n\n'}
          - <Text style={styles.highlight}>The Time-Out Signal:</Text> Create a hand signal with loved ones to pause heated discussions
        </Text>

        <View style={styles.caseStudyBox}>
          <Text style={styles.caseStudyTitle}>Case Study: Workplace Mediation</Text>
          <Text style={styles.caseStudyText}>
            Two department heads were in constant conflict. Mediator:
            {'\n'}
            1. Had each write their 3 core concerns
            {'\n'}
            2. Found 2 shared concerns
            {'\n'}
            3. Built solution addressing both parties' top priorities
            {'\n\n'}
            Result: 78% reduction in conflicts over 3 months.
          </Text>
        </View>
      </View>

      {/* Section 6: Digital Communication */}
      <View style={styles.section}>
        <Text style={styles.title}>6. The Virtual Communication Playbook</Text>
        <Text style={styles.description}>
          With 60% of professional communication now digital, master these tech-specific skills.
        </Text>

        <Text style={styles.subtitle}>📧 Email Psychology:</Text>
        <Text style={styles.description}>
          - <Text style={styles.highlight}>The Subject Line Formula:</Text> Verb + Benefit + Timeframe ("Increase Sales 20% - 3 Proven Methods")
          {'\n\n'}
          - <Text style={styles.highlight}>The 3-Sentence Rule:</Text> Most emails should be digestible in 3 sentences or less
          {'\n\n'}
          - <Text style={styles.highlight}>Tone Indicators:</Text> Use emojis strategically (😊 for friendly, 👍 for approval) to prevent misinterpretation
        </Text>

        <Text style={styles.subtitle}>💻 Zoom Presence:</Text>
        <Text style={styles.description}>
          - <Text style={styles.highlight}>The 3-Foot Rule:</Text> Keep camera distance where your head and shoulders fill 75% of frame
          {'\n\n'}
          - <Text style={styles.highlight}>Virtual Eye Contact:</Text> Look at the camera (not screen) when speaking
          {'\n\n'}
          - <Text style={styles.highlight}>Lighting Setup:</Text> Position light source in front of you, slightly above eye level
        </Text>
      </View>

      {/* Final Challenge */}
      <View style={styles.challengeBox}>
        <Text style={styles.challengeTitle}>30-Day Communication Challenge</Text>
        <View style={styles.challengeGrid}>
          <View style={styles.challengeItem}>
            <Text style={styles.challengeDay}>Day 1-5</Text>
            <Text style={styles.challengeTask}>Record daily 1-min voice notes analyzing your speech patterns</Text>
          </View>
          <View style={styles.challengeItem}>
            <Text style={styles.challengeDay}>Day 6-10</Text>
            <Text style={styles.challengeTask}>Practice power poses before important conversations</Text>
          </View>
          <View style={styles.challengeItem}>
            <Text style={styles.challengeDay}>Day 11-15</Text>
            <Text style={styles.challengeTask}>Implement active listening in 3 conversations/day</Text>
          </View>
          <View style={styles.challengeItem}>
            <Text style={styles.challengeDay}>Day 16-20</Text>
            <Text style={styles.challengeTask}>Rewrite all emails using the 3-sentence rule</Text>
          </View>
          <View style={styles.challengeItem}>
            <Text style={styles.challengeDay}>Day 21-25</Text>
            <Text style={styles.challengeTask}>Deliver a 5-min presentation to friends/family</Text>
          </View>
          <View style={styles.challengeItem}>
            <Text style={styles.challengeDay}>Day 26-30</Text>
            <Text style={styles.challengeTask}>Mediate a minor conflict using CALM method</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.downloadButton} onPress={()=>navigation.navigate('30dayschallenge')}>
          <Text style={styles.downloadText}>📥 See Challenges</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0d0d0d',
    padding: 16,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#00ccff',
    textAlign: 'center',
    marginVertical: 10,
  },
  subheader: {
    fontSize: 16,
    color: '#aaa',
    textAlign: 'center',
    marginBottom: 20,
  },
  introBox: {
    backgroundColor: '#1a2a3a',
    padding: 20,
    borderRadius: 15,
    marginBottom: 25,
  },
  introText: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
  },
  bulletList: {
    marginLeft: 10,
  },
  bullet: {
    color: '#cccccc',
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 5,
  },
  section: {
    marginBottom: 30,
    backgroundColor: '#1a1a1a',
    padding: 20,
    borderRadius: 15,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: '600',
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 18,
    color: '#00ccff',
    fontWeight: '500',
    marginTop: 15,
    marginBottom: 10,
  },
  description: {
    color: '#cccccc',
    fontSize: 16,
    lineHeight: 24,
  },
  highlight: {
    color: '#00ccff',
    fontWeight: '500',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
    marginTop: 15,
  },
  videoPlaceholder: {
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 18,
    alignItems: 'center',
    marginTop: 20,
  },
  videoText: {
    color: '#00ccff',
    fontSize: 16,
    fontWeight: '500',
  },
  exerciseBox: {
    backgroundColor: '#002233',
    borderRadius: 10,
    padding: 15,
    marginTop: 20,
  },
  exerciseTitle: {
    color: '#00ccff',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
  },
  exerciseText: {
    color: '#fff',
    lineHeight: 22,
  },
  quoteBox: {
    borderLeftWidth: 4,
    borderLeftColor: '#00ccff',
    paddingLeft: 15,
    marginTop: 20,
  },
  quoteText: {
    color: '#fff',
    fontStyle: 'italic',
    fontSize: 15,
    lineHeight: 22,
  },
  quoteAuthor: {
    color: '#aaa',
    marginTop: 5,
    textAlign: 'right',
  },
  caseStudyBox: {
    backgroundColor: '#003322',
    borderRadius: 10,
    padding: 15,
    marginTop: 20,
  },
  caseStudyTitle: {
    color: '#00ffaa',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
  },
  caseStudyText: {
    color: '#fff',
    lineHeight: 20,
  },
  challengeBox: {
    backgroundColor: '#1a1a3a',
    borderRadius: 15,
    padding: 20,
    marginBottom: 30,
  },
  challengeTitle: {
    color: '#00ccff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  challengeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  challengeItem: {
    width: '48%',
    backgroundColor: '#0a0a2a',
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
  },
  challengeDay: {
    color: '#00ccff',
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 5,
  },
  challengeTask: {
    color: '#ddd',
    fontSize: 13,
    lineHeight: 18,
  },
  downloadButton: {
    backgroundColor: '#0055aa',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  downloadText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default CommunicationSkillsScreen;