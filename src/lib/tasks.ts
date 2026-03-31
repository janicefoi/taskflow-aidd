import { db } from './firebase';
import { collection, addDoc, updateDoc, deleteDoc, doc, getDocs, query, where, orderBy, Timestamp } from 'firebase/firestore';
import { Task } from '@/types';

const tasksCollection = collection(db, 'tasks');

export const addTask = async (taskData: Omit<Task, 'id' | 'createdAt'>): Promise<string> => {
  const docRef = await addDoc(tasksCollection, {
    ...taskData,
    createdAt: Timestamp.now(),
  });
  return docRef.id;
};

export const getTasks = async (userId: string): Promise<Task[]> => {
  // Creating an index on userId and createdAt might be required in Firestore depending on querying
  const q = query(
    tasksCollection,
    where('userId', '==', userId),
    orderBy('createdAt', 'desc')
  );
  
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...(doc.data() as Omit<Task, 'id'>)
  }));
};

export const toggleTask = async (taskId: string, currentStatus: boolean): Promise<void> => {
  const taskRef = doc(db, 'tasks', taskId);
  await updateDoc(taskRef, {
    completed: !currentStatus
  });
};

export const deleteTask = async (taskId: string): Promise<void> => {
  const taskRef = doc(db, 'tasks', taskId);
  await deleteDoc(taskRef);
};
