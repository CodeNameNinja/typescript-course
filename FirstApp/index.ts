import axios from 'axios'

const url = "https://jsonplaceholder.typicode.com/todos/1";
interface Todo{
  id:number,
  title:string,
  completed:boolean,
}
axios.get<Todo>(url).then(({data}) => {
 const {id,title,completed} = data;

  logTodo({id,title,completed})
})

const logTodo = (todo:Todo) => {
  console.log(todo);
}