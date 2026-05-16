import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Article from './Article';
import Layout from './components/Layout';
import AboutInfo from './AboutInfo';
import NotFoundPage from './NotFoundPage';
import './App.css';

function App() {
  let [registred, setRegistred] = useState(false);

  return (
    <div>
      <div style={{textAlign: "center"}}>
        <h3>Is logged in {registred ? "TRUE" : "FALSE"}</h3>
        <button onClick={() => setRegistred(!registred)}>{registred ? "Log Out" : "Login"}</button>
      </div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={ registred ? <About /> : <h2>Получить доступ к этой странице могут только зарегистрированные пользователи!</h2>} />
          <Route path="about/:id" element={<AboutInfo />} />
          <Route path="articles" element={<Article />} />
          <Route path="articles-us" element={<Article to="/articles" replace />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
