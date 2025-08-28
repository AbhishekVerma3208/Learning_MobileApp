import React from 'react';
import { View, Text, StyleSheet, ScrollView, SectionList } from 'react-native';

const BusinessProfessionalEnglish = () => {
  const sections = [
    {
      title: "1. Office Conversation",
      data: [
        {
          subtitle: "Greetings & Small Talk",
          points: [
            "Good morning! How was your weekend?",
            "Hi John, do you have a minute to discuss the project?",
          ],
        },
        {
          subtitle: "Asking for Help/Clarification",
          points: [
            "Could you please explain this report to me?",
            "I’m not sure about this task. Can you guide me?",
          ],
        },
        {
          subtitle: "Meetings & Discussions",
          points: [
            "Let’s go over the agenda for today’s meeting.",
            "What are your thoughts on this proposal?",
          ],
        },
        {
          subtitle: "Giving Updates",
          points: [
            "Just wanted to update you—the client approved the design.",
            "The deadline has been extended to next Friday.",
          ],
        },
        {
          subtitle: "Making Requests",
          points: [
            "Could you send me the file by EOD (End of Day)?",
            "Would it be possible to reschedule the meeting?",
          ],
        },
      ],
    },
    {
      title: "2. Email Writing",
      data: [
        {
          subtitle: "Key Components of a Business Email",
          points: [
            "Subject Line – Clear and specific (e.g., 'Meeting Reschedule: Project X Discussion')",
            "Salutation – Formal ('Dear Mr. Smith,') or Semi-formal ('Hi Team,')",
            "Opening Line – Purpose of the email ('I’m writing to follow up on…')",
            "Body – Main message with details ('Please find attached the report for review.')",
            "Closing – Polite ending ('Looking forward to your feedback.')",
            "Signature – Name, title, contact details",
          ],
        },
        {
          subtitle: "Common Email Phrases",
          points: [
            "Requesting Information: 'Could you please provide an update on…?'",
            "Scheduling Meetings: 'Would Tuesday at 3 PM work for you?'",
            "Attaching Files: 'Please see the attached document for reference.'",
            "Following Up: 'Just checking if you had a chance to review…'",
          ],
        },
      ],
    },
    {
      title: "3. Business Vocabulary",
      data: [
        {
          subtitle: "Essential Business Terms",
          points: [
            "Deadline – The final date for completing a task",
            "KPI (Key Performance Indicator) – Metrics used to measure success",
            "Stakeholder – A person with an interest in the business",
            "ROI (Return on Investment) – Profit gained from an investment",
            "B2B (Business-to-Business) – Transactions between companies",
            "Brainstorming – Group discussion to generate ideas",
            "Synergy – Combined effort producing better results",
          ],
        },
        {
          subtitle: "Common Business Idioms",
          points: [
            "'Think outside the box' – Be creative",
            "'Ballpark figure' – Rough estimate",
            "'Touch base' – Briefly check in",
          ],
        },
      ],
    },
    {
      title: "4. Presentation Skills",
      data: [
        {
          subtitle: "Steps for an Effective Presentation",
          points: [
            "Plan & Structure: Introduction → Main Points → Conclusion",
            "Engage the Audience: Ask questions, use visuals, tell a story",
            "Use Clear Language: Avoid jargon, speak slowly",
            "Body Language & Tone: Maintain eye contact, use hand gestures",
          ],
        },
        {
          subtitle: "Useful Presentation Phrases",
          points: [
            "'Let me begin by…'",
            "'As you can see from this chart…'",
            "'To summarize…'",
            "'Does anyone have any questions?'",
          ],
        },
      ],
    },
    {
      title: "5. Customer Service English",
      data: [
        {
          subtitle: "Key Phrases for Customer Service",
          points: [
            "Greeting Customers: 'How may I assist you today?'",
            "Handling Complaints: 'I apologize for the inconvenience. Let me resolve this for you.'",
            "Providing Solutions: 'Here’s what we can do to fix this…'",
            "Ending the Conversation: 'Is there anything else I can help you with?'",
          ],
        },
        {
          subtitle: "Dealing with Difficult Customers",
          points: [
            "Stay calm and patient",
            "Use positive language ('I understand your concern…')",
            "Offer alternatives ('Would you like a refund or a replacement?')",
          ],
        },
      ],
    },
    {
      title: "Final Tips for Professional English",
      data: [
        {
          subtitle: "",
          points: [
            "✔ Be clear and concise",
            "✔ Use polite and professional tone",
            "✔ Practice active listening",
            "✔ Proofread emails and documents",
          ],
        },
      ],
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      {item.subtitle ? <Text style={styles.subtitle}>{item.subtitle}</Text> : null}
      {item.points.map((point, index) => (
        <Text key={index} style={styles.point}>
          • {point}
        </Text>
      ))}
    </View>
  );

  const renderSectionHeader = ({ section: { title } }) => (
    <Text style={styles.sectionHeader}>{title}</Text>
  );

  return (
    <ScrollView style={styles.container}>
      <SectionList
        sections={sections}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#333',
  },
  itemContainer: {
    marginBottom: 15,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    elevation: 2,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#444',
  },
  point: {
    fontSize: 14,
    marginBottom: 5,
    color: '#555',
  },
});

export default BusinessProfessionalEnglish;