import React from 'react';

export default function Login() {
  const authorizeUser = () => {
    localStorage.setItem('auth', 'this is token');
  };
  return (
    <div>
      <h1>Login</h1>
      <label>Username</label>
      <input type='text' placeholder='username' />
      <label>Password</label>
      <input type='password' placeholder='password' />
      <button onClick={authorizeUser}>Submit</button>
    </div>
  );
}
