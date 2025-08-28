import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Dimensions
} from 'react-native';

// You would need to install these icon libraries separately:
// npm install react-native-vector-icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('window');

const AboutComponent = () => {
  
  const openWebsite = () => {
    Linking.openURL('https://your-learning-app-website.com');
  };

  const FeatureCard = ({ icon, title, description }) => (
    <View style={styles.featureCard}>
      <View style={styles.featureIcon}>
        {icon}
      </View>
      <Text style={styles.featureTitle}>{title}</Text>
      <Text style={styles.featureDescription}>{description}</Text>
    </View>
  );

  const StatItem = ({ number, label }) => (
    <View style={styles.statItem}>
      <Text style={styles.statNumber}>{number}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );

  const TeamMember = ({ name, role }) => (
    <View style={styles.teamMember}>
      <View style={styles.memberAvatar}>
        <Ionicons name="person" size={32} color="#4facfe" />
      </View>
      <Text style={styles.memberName}>{name}</Text>
      <Text style={styles.memberRole}>{role}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>About LearningXorxos</Text>
        <Text style={styles.headerSubtitle}>Transforming education through innovative technology</Text>
      </View>

      {/* Intro Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Welcome to Our Learning Platform</Text>
        <Text style={styles.sectionText}>
          LearningXorxos is an innovative learning platform designed to make education accessible, engaging, and effective for everyone. 
          We combine cutting-edge technology with proven educational methods to create a personalized learning experience that 
          adapts to your unique needs and goals.
        </Text>
      </View>

      {/* Features Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Key Features</Text>
        <View style={styles.featuresContainer}>
          <FeatureCard
            icon={<Ionicons name="school" size={32} color="#4facfe" />}
            title="Expert Courses"
            description="Access courses created by industry experts and experienced educators."
          />
          <FeatureCard
            icon={<Ionicons name="bulb" size={32} color="#4facfe" />}
            title="Adaptive Learning"
            description="Our AI technology adapts to your learning style and pace."
          />
          <FeatureCard
            icon={<FontAwesome name="trophy" size={32} color="#4facfe" />}
            title="Gamified Experience"
            description="Earn badges, points, and rewards as you progress through courses."
          />
        </View>
      </View>

      {/* Stats Section */}
      <View style={[styles.section, styles.statsSection]}>
        <Text style={[styles.sectionTitle, styles.statsTitle]}>Our Impact in Numbers</Text>
        <View style={styles.statsContainer}>
          <StatItem number="5K+" label="Active Learners" />
          <StatItem number="20+" label="Expert Courses" />
          <StatItem number="80%" label="Satisfaction Rate" />
        </View>
      </View>

      {/* Team Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Meet Our Team</Text>
        <View style={styles.teamContainer}>
          <TeamMember name="Abhishek Verma" role="Founder & CEO" />
        </View>
      </View>

      {/* Call to Action */}
      <View style={styles.ctaSection}>
        <Text style={styles.ctaTitle}>Start Your Learning Journey Today</Text>
        <Text style={styles.ctaText}>Join millions of learners who are achieving their goals with Learningxorxos</Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 Learningxorxos. All rights reserved.</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    backgroundColor: '#4facfe',
    padding: 20,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: 'white',
    opacity: 0.9,
  },
  section: {
    padding: 20,
    backgroundColor: 'white',
    marginVertical: 10,
    marginHorizontal: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4facfe',
    marginBottom: 15,
    textAlign: 'center',
  },
  sectionText: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
    textAlign: 'center',
  },
  featuresContainer: {
    marginTop: 10,
  },
  featureCard: {
    backgroundColor: '#f8f9fa',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
  featureIcon: {
    marginBottom: 15,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
  },
  featureDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
  },
  statsSection: {
    backgroundColor: '#4facfe',
  },
  statsTitle: {
    color: 'white',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 14,
    color: 'white',
    opacity: 0.9,
  },
  teamContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  teamMember: {
    alignItems: 'center',
    width: width > 400 ? '30%' : '45%',
    marginBottom: 15,
  },
  memberAvatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#e9ecef',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  memberName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
  memberRole: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  ctaSection: {
    padding: 25,
    backgroundColor: 'white',
    margin: 15,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  ctaTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4facfe',
    marginBottom: 10,
    textAlign: 'center',
  },
  ctaText: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
  ctaButton: {
    backgroundColor: '#4facfe',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  ctaButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    padding: 20,
    backgroundColor: '#e9ecef',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#666',
  },
});

export default AboutComponent;