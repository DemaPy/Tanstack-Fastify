const Todos = ({ todos }: { todos: Todo[] }) => {
    return (
        <div>
            {todos.map(item => <p key={item.id}>{item.title}</p>)}
        </div>
    )
}

export default Todos