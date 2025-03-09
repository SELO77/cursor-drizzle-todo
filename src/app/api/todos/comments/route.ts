import { NextRequest, NextResponse } from 'next/server';
import { db, schema } from '@/db/index';
import { eq } from 'drizzle-orm';

// POST /api/todos/comments - Add a comment to a todo
export async function POST(request: NextRequest) {
    try {
        const { todoId, content } = await request.json();

        if (!todoId) {
            return NextResponse.json({ error: 'Todo ID is required' }, { status: 400 });
        }

        if (!content) {
            return NextResponse.json({ error: 'Comment content is required' }, { status: 400 });
        }

        // Check if the todo exists
        const todo = await db.select()
            .from(schema.todos)
            .where(eq(schema.todos.id, todoId))
            .limit(1);

        if (todo.length === 0) {
            return NextResponse.json({ error: 'Todo not found' }, { status: 404 });
        }

        // Create the comment
        const newComment = await db.insert(schema.todoComments)
            .values({
                todoId,
                content
            })
            .returning();

        return NextResponse.json(newComment[0], { status: 201 });
    } catch (error) {
        console.error('Error creating comment:', error);
        return NextResponse.json({ error: 'Failed to create comment' }, { status: 500 });
    }
} 