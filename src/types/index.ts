export interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
}

export interface Task {
  id: string;
  userId: string;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  dueDate: Date | null;
  completed: boolean;
  createdAt: Date;
}
