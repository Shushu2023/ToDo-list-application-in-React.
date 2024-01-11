function App(){
  
  //todos is an array of objects of todo task
  //each todo object has two attributes, a text attribute and isCompleted attribute
  const [todos, setTodos] = React.useState([
    {
      text: 'learn react',
      isCompleted: false,
    },
    {
      text: 'meet friend for lunch',
      isCompleted: false,
    },
    {
      text: 'build todo app',
      isCompleted: false,
    }        
  ]);
  

  

  // addTodo function is passed the text attribute  of the todo task object
  // to construct a new todo object
  //it is passed to the toDoForm function in the form.js file
  
  const addTodo = text => {
    //get the todos list and add to it new todo object setting the text attribute of the new todo object to the provided text and the isComplete to false
    const newTodos = [...todos, {text:text, isCompleted:false}];
    //change the state from the old todos to the new todos
    setTodos(newTodos);
  }
  //removeTodo function
  //uses the index coming from Todo function in the todo component
  
  const removeTodo = index => {
    
    // update the state
    let temp = [...todos];//get a handle of the current todos list and save it in a temp list
    temp.splice(index,1);//update the temprary list by removing that todo with the specifed index from the list
    setTodos(temp); // update the todos list current state to the new state by passing it the temp variable containing the temprary
  }
  return(
    <div className="app">{/**this div is used to style the entire app */}
      
      <div className="todo-list"> {/**this div is used to used to style the todo list */}
      {
        todos.map((todo, i) => <Todo index={i} key={i} todo={todo} remove={removeTodo}/>)//the value of the id attribute of the the div  is the index of the todotask
      }

      <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
