import React, { useState } from 'react';
import Button from '../UI/Button.jsx';
import './Auth.css';
export default function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    onLogin(username, password);
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
        required
      />
    
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
        required
      />
      <Button textOnly className="authbutton"> Forget Password?</Button>
      <button type="submit">Login</button>
    </form>
  );
};
