// import React from 'react';
// import { useState, useEffect } from 'react';
// import Card, { CardVariant } from './components/Card';
// import UserList from './components/UserList';
// import List from './components/List';
// import UserItem from './components/UserItem';
// import TodoItem from './components/TodoItems';
// import { IUser, ITodo } from './types/types';
import EventsExample from './components/EventsExample';
import './App.css';

function App() {
  // const [users, setUsers] = useState<IUser[]>([]);
  // const [todos, setTodos] = useState<ITodo[]>([]);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then(response => response.json())
  //     .then(json => setUsers(json))
  // }, []);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
  //     .then(response => response.json())
  //     .then(json => setTodos(json))
  // }, []);

  return (
    <div className="App">
      <EventsExample />
    </div>
  );
}

export default App;
//  <Card onClick={() => console.log("click")} variant={CardVariant.outlined} width="200px" height="200px">
//         <button>Кнопка</button>
//       </Card>
//       {/* <UserList users={users} /> */}
//       <List items={users} renderItem={(user: IUser) => <UserItem user={user} key={user.id} />} />
//       <List items={todos} renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />} />