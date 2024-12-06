import { Router } from "express";
import { saveTodo, getAllTodos } from "@/controllers/todo.controller";
const router = Router();
router.get("/", getAllTodos);
router.post("/", saveTodo);
export default router;
