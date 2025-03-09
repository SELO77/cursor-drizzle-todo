import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const todos = sqliteTable('todos', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    title: text('title').notNull(),
    completed: integer('completed', { mode: 'boolean' }).notNull().default(false),
    createdAt: integer('created_at', { mode: 'timestamp' }).notNull().$defaultFn(() => new Date()),
});

export const todoComments = sqliteTable('todo_comments', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    todoId: integer('todo_id').notNull().references(() => todos.id),
    content: text('content').notNull(),
    createdAt: integer('created_at', { mode: 'timestamp' }).notNull().$defaultFn(() => new Date()),
});

export const user = sqliteTable('user', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    name: text('name').notNull(),
    email: text('email').notNull().unique(),
    password: text('password').notNull(),
});
