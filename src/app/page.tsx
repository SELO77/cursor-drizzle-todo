'use client';

import { useState, useEffect } from 'react';
import TodoList from '@/components/TodoList';
import TodoForm from '@/components/TodoForm';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
  createdAt: string;
}

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/todos');
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    } finally {
      setLoading(false);
    }
  };

  const addTodo = async (title: string) => {
    try {
      const response = await fetch('/api/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title }),
      });

      if (response.ok) {
        const newTodo = await response.json();
        setTodos([...todos, newTodo]);
      }
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8 text-center">Todo App with Drizzle ORM</h1>

        <div className="bg-white p-6 rounded-lg shadow-md w-full">
          <TodoForm onAddTodo={addTodo} />

          {loading ? (
            <p className="text-center mt-4">Loading todos...</p>
          ) : (
            <TodoList todos={todos} />
          )}
        </div>
      </div>
    </main>
  );
}
