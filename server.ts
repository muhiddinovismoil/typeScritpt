import express, { Application } from "express";
import router from "@/routes/todo.routes";
const app: Application = express();
app.use("/api/v1/todo", router);
app.listen(3000, () => {
    console.log(`SERVER IS RUNNING ON PORT: ${3000}`);
});
