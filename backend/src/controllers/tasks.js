import { connect } from "../database";

export const getTasks = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.execute("SELECT * FROM tasks");
    console.log(rows);
    res.json("hello world");
}

export const getTask = (req, res) => {
    res.json("hello world");
}

export const getTasksCount = (req, res) => {
    res.json("hello world");
}

export const saveTasks = (req, res) => {
    res.json("hello world");
}

export const deleteTasks = (req, res) => {
    res.json("hello world");
}

export const updateTasks = (req, res) => {
    res.json("hello world");
}