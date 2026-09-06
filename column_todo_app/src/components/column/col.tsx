import "./col.css"
import type { Task, TaskStatus, User } from "../../data"
import { TaskCard } from "../taskCard/task";

interface ColumnProps {
    status: TaskStatus;
    tasks: Task[];
    users: User[];
}

export function Column({ status, tasks, users }: ColumnProps) {
    return (
        <div className="column">
            <div className="actionbar">
                <div className="col_title">
                    <p className="col_title">{status.name}<span className="amount">{tasks.length}</span></p>
                </div>
                <div className="action_button">
                    <button className="add">+</button>
                    <button className="more">...</button>
                </div>
            </div>
            <div className="task_content">
                {
                    tasks.map((item) => {
                        const userFound = users.find(u => u.userId === item.assignedTo);
                        return (
                            <TaskCard key={item.taskId} task={item} assigned_user={userFound ? userFound.name : "N/A"} />
                        );
                    })
                }
            </div>
        </div>
    )
}