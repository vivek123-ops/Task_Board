const db = require("../config/db");

const getTasks = async (req, res) => {
  try {
    const [result] = await db.query("SELECT * FROM tasks");

    res.status(200).json(result);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Database error",
      error: error.message,
    });
  }
};

const addtask = async (req, res) => {
  try {
    const { title, status } = req.body;
    if (!title || !status) {
      return res.status(400).json({
        message: "please enter the task title",
      });
    }

    const sql = `
            INSERT INTO tasks (title, status)
            VALUES (?, ?)
        `;

    const [result] = await db.query(sql, [title, status]);

    res.status(201).json({
      message: "Task created successfully",
      taskId: result.insertId,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Task create failed",
      error: error.message,
    });
  }
};

const deletetask = async (req, res) => {
  try {
    const { id } = req.params;

    const sql = "DELETE FROM tasks WHERE id = ?";

    const [result] = await db.query(sql, [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    res.status(200).json({
      message: "Task deleted successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Task delete failed",
      error: error.message,
    });
  }
};

const updatetask = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const sql = `
            UPDATE tasks
            SET status = ?
            WHERE id = ?
        `;

    const [result] = await db.query(sql, [status, id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    res.status(200).json({
      message: "Task status updated successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Status update failed",
      error: error.message,
    });
  }
};

module.exports = {
  getTasks,
  addtask,
  deletetask,
  updatetask,
};
