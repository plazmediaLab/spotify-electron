import firebase from 'firebase/app';

const createAt = () => {
  return firebase.firestore.Timestamp.fromDate(new Date());
};

export default createAt;
