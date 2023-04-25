/* eslint-disable max-len */
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import TasksList from './components/TasksList/TasksList';
import ErrorPage from './components/ErrorPage/ErrorPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AuthPrivate from './components/AuthPrivate/AuthPrivate';
import Info from './components/Info/Info';

function App() {
  const [authKey, setAuthKey] = useState(localStorage.getItem('authKey'));

  return (
    <div className="App">
      <Header authKey={authKey} setAuthKey={setAuthKey} />
      <Routes>

        <Route element={<AuthPrivate authKey={authKey} />}>
          <Route path="/" element={<Login setAuthKey={setAuthKey} />} />
        </Route>

        <Route element={<PrivateRoute authKey={authKey} />}>
          <Route path="/tasks" element={<TasksList />} />
          <Route path="/tasks/:id" element={<TasksList />} />
        </Route>
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/info" element={<Info />} />
      </Routes>

    </div>
  );
}

export default App;
