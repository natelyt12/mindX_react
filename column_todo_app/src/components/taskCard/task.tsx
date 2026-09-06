import "./task.css"
import type { Task } from "../../data"

interface TaskProp {
    task: Task
    assigned_user: string
}

export function TaskCard({ task, assigned_user }: TaskProp) {
    return (
        <div className="task_card">
            <div className="title_box">
                <p className="title">{task.title}</p>
                <button className="edit_btn" aria-label="Edit task">
                    <img src="/icons/edit.svg" alt="Edit" width="18" height="18" />
                </button>
            </div>
            {task.description && (
                <p className="description">{task.description}</p>
            )}
            <div className="user_badge">
                <span>{assigned_user}</span>
            </div>
            <div className="task_footer">
                <div className="footer_left">
                    <span className="attach_item">
                        <img src="/icons/attach.svg" alt="Attachment" width="18" height="18" />
                        {task.attachments ? <span className="attach_count">{task.attachments}</span> : null}
                    </span>
                    <span className="flag_item">
                        {task.flagId === 1 && <img src="/icons/green-flag.svg" alt="Low" width="18" height="18" />}
                        {task.flagId === 2 && <img src="/icons/yellow-flag.svg" alt="Medium" width="18" height="18" />}
                        {task.flagId === 3 && <img src="/icons/red-flag.svg" alt="High" width="18" height="18" />}
                    </span>
                    <span className="deadline_item">
                        <img src="/icons/clock.svg" alt="Deadline" width="16" height="16" />
                        <span>{task.deadline.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                    </span>
                </div>
            </div>
        </div>
    )
}