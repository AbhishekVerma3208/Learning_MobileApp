import firestore from '@react-native-firebase/firestore';

export const fetchCourses = (setCourses) => {
  return firestore()
    .collection('courses')
    .onSnapshot(querySnapshot => {
      const coursesData = {
        trending: [],
        newCourses: [],
        popular: [],
        continueLearning: [],
      };

      querySnapshot.forEach(doc => {
        const data = doc.data();
        coursesData[data.category].push({
          id: doc.id,
          title: data.title,
          thumbnail: data.thumbnail,
          progress: data.progress,
        });
      });

      setCourses(coursesData);
    });
};
