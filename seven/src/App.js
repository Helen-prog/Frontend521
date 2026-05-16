import { useState, useEffect } from 'react';
import Users from './components/users/Users';
import Success from './components/success/Success';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [searchValue, setSearcValue] = useState("");
  const [invites, setInvites] = useState([]);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    fetch('https://www.myjsons.com/v/0f284975')
      .then(res => res.json())
      .then(json => {
        setUsers(json.data);
      })
      .catch(err => {
        console.warn(err);
        alert("Ошибка при получении пользователя");
      })
  }, []);

  const onChangeValue = (event) => {
    setSearcValue(event.target.value);
  }

  const onClickInvite = (id) => {
    if (invites.includes(id)) {
      setInvites(prev => prev.filter(ch => ch !== id))
    } else {
      setInvites(prev => [...prev, id]);
    }
  }

  const onClickSendInvites = () => {
    setSuccess(true);
  }

  return (
    <div className="main">
      {
        success ? <Success count={invites.length} /> : <Users items={users}
        searchValue={searchValue}
        onChangeValue={onChangeValue}
        onClickInvite={onClickInvite}
        invites={invites}
        onClickSendInvites={onClickSendInvites}
        />
      }      
    </div>
  );
}

export default App;
