import React, { useState } from 'react';

function LoginForm({ onSwitchToSignup }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username || !password) {
      alert('Both fields are required!');
      return;
    }
    console.log('Login submitted for username:', username);
    // Implement actual login logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </label>
      </div>
      <button type="submit">Login</button>
      <button type="button" onClick={onSwitchToSignup}>Switch to Signup</button>
    </form>
  );
}

export default LoginForm;
