import { NextRequest, NextResponse } from 'next/server';
import { db, schema } from '@/db/index';
import { eq } from 'drizzle-orm';

// GET /api/todos - Get all todos
export async function GET() {
    try {
        const todos = await db.select().from(schema.todos);
        return NextResponse.json(todos);
    } catch (error) {
        console.error('Error fetching todos:', error);
        return NextResponse.json({ error: 'Failed to fetch todos' }, { status: 500 });
    }
}

// POST /api/todos - Create a new todo
export async function POST(request: NextRequest) {
    try {
        const { title } = await request.json();

        if (!title) {
            return NextResponse.json({ error: 'Title is required' }, { status: 400 });
        }

        const newTodo = await db.insert(schema.todos)
            .values({ title, completed: false })
            .returning();

        return NextResponse.json(newTodo[0], { status: 201 });
    } catch (error) {
        console.error('Error creating todo:', error);
        return NextResponse.json({ error: 'Failed to create todo' }, { status: 500 });
    }
} 