import { connect } from "../database";

export const getTasks = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.execute("SELECT * FROM tasks");
    res.json(rows);
}

export const getTask = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.execute("SELECT * FROM tasks WHERE id = ?", [req.params.id]);
    res.json(rows[0]);
}

export const getTasksCount = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.execute("SELECT COUNT(*) FROM tasks");
    res.json(rows[0]["COUNT(*)"]);
}

export const saveTasks = async (req, res) => {
    const connection = await connect();
    const [result] = await connection.query("INSERT INTO tasks(title, description) VALUES (?,?)", [
        req.body.title,
        req.body.description
    ]);

    res.json({
        id: result.insertId,
        ...req.body
    });
}

export const deleteTasks = async (req, res) => {
    const connection = await connect();
    await connection.query("DELETE FROM tasks WHERE id = ?", [req.params.id]);
    res.sendStatus(204);
}

export const updateTasks = async (req, res) => {
    const connection = await connect();
    const results = await connection.query("UPDATE tasks SET ? WHERE id = ?", [
        req.body,
        req.params.id
    ]);
    res.sendStatus(204);
}