import { Search } from "./components/search/search.tsx";
import { Column } from "./components/column/col.tsx";
import { taskStatus, tasks, users } from "./data.ts";

function App() {
  return (
    <div className="container">
      <div className="navbar">
        <Search />
        <button className="addNewItem">New item</button>
      </div>
      <div className="content">
        {
          taskStatus.map((status) => {
            const colTask = tasks.filter((t) => t.statusId === status.statusId)
            return (
              <Column key={status.statusId} tasks={colTask} users={users} status={status} />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
