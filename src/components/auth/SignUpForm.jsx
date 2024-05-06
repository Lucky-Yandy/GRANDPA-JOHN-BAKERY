import React, { useState } from 'react';
import './Auth.css';
export default function  SignUpForm ({ onSignUp }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform signup logic here
    onSignUp(username, password);
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
       <input
            id="confirm-password"
            type="password"
            name="confirm-password"
            placeholder="confirm password"
            required
          />
      <button type="submit">Sign Up</button>
    </form>
  );
};

