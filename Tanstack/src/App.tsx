import Todos from "./components/Todos"
import UseService from "./components/UseService"
import { groupQueryTodos } from "./services/queryOptions/todos"


function App() {

  return <main className="text-sm">
    <h2>Todos</h2>
    <UseService queryOption={groupQueryTodos}>
      {
        ({ data }) => {
          return <Todos todos={data.data} />
        }
      }
    </UseService>
  </main>
}

export default App
