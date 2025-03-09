'use client';

import { useState } from 'react';

interface TodoFormProps {
    onAddTodo: (title: string) => Promise<void>;
}

export default function TodoForm({ onAddTodo }: TodoFormProps) {
    const [title, setTitle] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!title.trim()) return;

        try {
            setIsSubmitting(true);
            await onAddTodo(title);
            setTitle('');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                    New Todo
                </label>
                <div className="flex gap-2">
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="What needs to be done?"
                        className="flex-1 rounded-md border border-gray-300 shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        disabled={isSubmitting}
                    />
                    <button
                        type="submit"
                        disabled={isSubmitting || !title.trim()}
                        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? 'Adding...' : 'Add'}
                    </button>
                </div>
            </div>
        </form>
    );
} 