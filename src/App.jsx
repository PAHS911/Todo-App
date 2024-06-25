import { TodoList } from "./component/TodoList";
import { Todo } from "./component/Todo";
import Filter from "./component/Filter";
function App() {
  return (
    <>
      <TodoList />
      <Todo />
      <Filter />
    </>
  );
}

export default App;
