"use client";

import { useEffect, useState, useCallback } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { getTasks } from "@/lib/tasks";
import { Task } from "@/types";
import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";

export default function Dashboard() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [tasksLoading, setTasksLoading] = useState(true);

  const fetchTasks = useCallback(async () => {
    if (!user) return;
    try {
      setTasksLoading(true);
      const data = await getTasks(user.uid);
      setTasks(data);
    } catch (error) {
      console.error("Failed to fetch tasks", error);
      // Wait for firebase index exception details in console and create index if necessary
    } finally {
      setTasksLoading(false);
    }
  }, [user]);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/");
    } else if (user) {
      fetchTasks();
    }
  }, [user, loading, router, fetchTasks]);

  if (loading || !user) {
    return (
      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="py-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Your Dashboard</h1>
        <p className="text-gray-600 mt-2">Manage and track all your active responsibilities.</p>
      </div>

      <TaskForm onTaskAdded={fetchTasks} />
      
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800">Recent Tasks</h2>
      </div>

      <TaskList tasks={tasks} loading={tasksLoading} onUpdate={fetchTasks} />
    </div>
  );
}
