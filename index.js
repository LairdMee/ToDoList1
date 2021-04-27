function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'MIT Assignments',
      delete:'x',
      isCompleted: false,
    },
    {
      text: 'HIIT Training',
      delete:'x',
      isCompleted: false,
    },
    {
      text: 'Fun Coding Projects',
      delete:'x',
      isCompleted: false,
    }, 
    {
      text: 'Play With My Pet Parrot', 
      delete:'x',
      isCompleted: false,
    }, 
    {
      text: 'Yoga Practice',
      delete:'x',
      isCompleted: false,

    }      
  ])
   const[value, setValue]= React.useState('');
   const handleSubmit= e=>{
     e.preventDefault();
     if(!value) return;
     const newTodos = [...todos, {text:value, delete:'x', isCompleted: false}];
     setTodos(newTodos);
     setValue('');  
   }
   const removeTodo=e=>{
     const index = Number(e.target.id);
     let temp=[...todos];
     temp.splice(index, 1);
     setTodos(temp); 
   }
  return(
    <>
      {todos.map((todo, i) => (
        <div className="todo" key={i}> <input className="check" 
        type="checkbox"/> {todo.text}
        <button className="deleteButton" id={i} onClick={removeTodo}>
          {todo.delete}
        </button>
        </div>
      ))}
      <form onSubmit ={handleSubmit}>
        <input type="text" className="input" value={value} 
        placeholder="Add Daily To Dos..." 
        onChange= {e=>setValue(e.target.value)}/>
        
      </form>
    </>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
