'use client';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
    createdAt: string;
}

interface TodoListProps {
    todos: Todo[];
}

export default function TodoList({ todos }: TodoListProps) {
    if (todos.length === 0) {
        return <p className="text-center mt-4">No todos yet. Add one above!</p>;
    }

    return (
        <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4">Your Todos</h2>
            <ul className="space-y-2">
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        className="p-3 bg-gray-50 rounded border border-gray-200 flex items-center"
                    >
                        <span className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : ''}`}>
                            {todo.title}
                        </span>
                        <span className="text-xs text-gray-500">
                            {new Date(todo.createdAt).toLocaleDateString()}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
} 