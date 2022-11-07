// Instruction 01: Create an interface for TodoItem
interface Todo {
    id: number;
    title: string; 
    status: TodoStatus; 
    completedOn?: Date;
}


// Instruction 02: Create an enum for status member for the TodoItem
enum TodoStatus {
    Done = "done",
    InProgress = "in-progress",
    Todo = "todo"
}


const todoItems: Todo[] = [
    { id: 1, title: "Learn HTML", status: TodoStatus.Done, completedOn: new Date("2021-09-11") },    
    { id: 2, title: "Learn HTML", status: TodoStatus.InProgress },
    { id: 3, title: "Learn TypeScript", status: TodoStatus.Done, completedOn:  new Date("2021-09-11") },
    { id: 4, title: "Write the best app in the world", status: TodoStatus.Todo,  },
]


// Instruction 03: Apply types to the parameters and return values for the functions
function addTodoItem(todo: string): Todo {
    const id = getNextId<Todo>(todoItems)

    const newTodo = {
        id: id,
        title: todo,
        status: TodoStatus.Todo,
    }

    todoItems.push(newTodo)

    return newTodo
}


// Instruction 04: Apply a generic parameter type to the below function
function getNextId<T extends {id: number}>(items: T[]): number {
    return items.reduce((max, x) => x.id > max ? max : x.id, 0) + 1
}


const newTodo = addTodoItem("Buy lots of stuff with all the money we make from the app")


console.log(JSON.stringify(newTodo))