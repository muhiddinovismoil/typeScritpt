import { Request, Response } from "express";
type Todo = {
    title: string;
    content: string;
    start_time: string;
    end_time: string;
};
const todos: Todo[] = [];
export const saveTodo = (req: Request, res: Response) => {
    const { title, content, start_time, end_time } = req.body;
    if (!title || !content || !start_time || !end_time) {
        return res.status(400).json({ message: "All fields are required" });
    }
    const newTodo: Todo = { title, content, start_time, end_time };
    todos.push(newTodo);
    res.status(201).json({
        message: "Todo saved successfully!",
        todo: newTodo,
        allTodos: todos,
    });
};
export const getAllTodos = (req: Request, res: Response) => {
    res.status(200).json(todos);
};
