function TodoForm({addTodo}){

    //a managed variable called value represents the user input
  //set the managed variable using setValue
  //initialize Raact useState to an empty string
  const [value,setValue] = React.useState('');

  // handleSubmit function is called when the onSumbit form event happens
  //The event e is passed to the function 
  // and the default behavior of reloading the page is prevented 
  //next the value of the field is checked and if the value of the field is empty we will return
  //otherwise we will construct the new todos by accessing the current list and adding to that 
  const handleSubmit = e => {
                 e.preventDefault(); //prevent default from refreshing the page
                if(!value) return; // check the value of the field, if its empty we do nothing, we return
                //otherwise update the todos list using the following steps
                //create a new todo list newTodos by accessing the current todolist todos 
                //and adding to it a new todo task object
                //The value passed will be the text attribute of the new added todo task object
                //The isCompleted attribute is initialized to false because the new task is not completed yet
                addTodo(value);
                //finally clear out the form by setting the value to an empty string
                 setValue('');
  }

    return (
        /*the form
                //contains an input element with attributes type, className, value, placeholder, onChange */ 
                <form onSubmit={handleSubmit}> {/**onSubmit event of the form  is mapped to a function that takes in the value and adds it
                                                  to the todo list using the handleSbumit function defined above*/}
                         <input 
                                 type="text"  
                                 className="input" /* used for styling*/
                                  value={value}     /*the value of the state*/ 
                                 placeholder="Add Todo..."
                                 onChange={e => setValue(e.target.value)}/* onChange event is used to set the value of the user input
                                                                             and set the value by accessing the e.target.value */
                         />
                </form>
            );
}