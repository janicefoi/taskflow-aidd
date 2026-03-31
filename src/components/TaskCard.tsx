"use client";

import { Task } from '@/types';
import { toggleTask, deleteTask } from '@/lib/tasks';

interface TaskCardProps {
  task: Task;
  onUpdate: () => void;
}

export default function TaskCard({ task, onUpdate }: TaskCardProps) {
  const handleToggle = async () => {
    try {
      await toggleTask(task.id, task.completed);
      onUpdate();
    } catch (err) {
      console.error("Failed to toggle task", err);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteTask(task.id);
      onUpdate();
    } catch (err) {
      console.error("Failed to delete task", err);
    }
  };

  const priorityColors = {
    high: 'bg-red-100 text-red-800 border-red-200',
    medium: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    low: 'bg-green-100 text-green-800 border-green-200',
  };

  return (
    <div className={`p-5 rounded-xl border bg-white shadow-sm transition-all duration-300 hover:shadow-md group ${task.completed ? 'opacity-60 bg-gray-50' : ''}`}>
      <div className="flex items-start gap-4">
        {/* Checkbox */}
        <div className="mt-1">
          <button 
            onClick={handleToggle}
            className={`flex items-center justify-center w-6 h-6 rounded-full border-2 transition-colors ${
              task.completed ? 'bg-blue-600 border-blue-600' : 'border-gray-300 hover:border-blue-500'
            }`}
          >
            {task.completed && (
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </button>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start mb-1 gap-2">
            <h4 className={`text-lg font-semibold truncate ${task.completed ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
              {task.title}
            </h4>
            <div className="flex items-center gap-2">
              <span className={`shrink-0 px-2.5 py-0.5 rounded-full text-xs font-medium border uppercase tracking-wider ${priorityColors[task.priority]}`}>
                {task.priority}
              </span>
              <button onClick={handleDelete} className="text-gray-400 hover:text-red-600 transition-colors md:opacity-0 md:group-hover:opacity-100 shrink-0" title="Delete">
                 <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                 </svg>
              </button>
            </div>
          </div>
          
          {task.description && (
            <p className={`text-sm mt-1 mb-3 line-clamp-2 pr-8 ${task.completed ? 'text-gray-400 line-through' : 'text-gray-600'}`}>
              {task.description}
            </p>
          )}

          {task.dueDate && (
            <div className="flex items-center text-sm text-gray-500 mt-2 font-medium">
              <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {task.dueDate}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
