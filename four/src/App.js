import { useState } from 'react';
// import Counter from './Counter';
import Text from './Text';
// import Person from './Person';
// import Modal from './Modal';
// import Item from './Item';
// import Task from './Task';
// import Form from './Form';
import './App.css';

function App() {

  // let [isCounter, setCounter] = useState(true);
  // let [tasks, setTasks] = useState([
  //   {
  //     text: "Выучить JavaScript",
  //     done: false
  //   },
  //   {
  //     text: "Познакомиться с React",
  //     done: false
  //   },
  //   {
  //     text: "Устроиться на работу",
  //     done: false
  //   }
  // ]);

  // let addTask = text => {
  //   let newTask = [...tasks, {text}];
  //   setTasks(newTask);
  // }

  // let doneTask = index => {
  //   let newTask = [...tasks];
  //   newTask[index].done = !newTask[index].done; 
  //   setTasks(newTask);
  // }

  // let deleteTask = index => {
  //   let newTask = [...tasks];
  //   newTask.splice(index, 1);
  //   setTasks(newTask);
  // }

  return (
    <div className="App">
      <Text />
      {/* <button onClick={() => setCounter(!isCounter)}>Toggle Counter</button>
      {isCounter && <Counter />} */}
      {/* <div className="task-list">
        {
          tasks.map((task, index) => (
            <Task
              key={index}
              task={task}
              doneTask={doneTask}
              index={index}
              deleteTask={deleteTask}
              />
          ))
        }
        <Form addTask={addTask} />
      </div> */}
       
    
      {/* <Person /> 
     <Modal />
     <Item />*/}
    </div>
  );
}

export default App;
