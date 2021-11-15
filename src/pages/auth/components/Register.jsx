import React from 'react';

export default function Register() {
  return (
    <div>
      <h1>Register</h1>
      <label>Username</label>
      <input type='text' placeholder='username' />
      <label>Password</label>
      <input type='password' placeholder='password' />
      <label>Submit Password</label>
      <input type='password' placeholder='password' />
      <button>Submit</button>
    </div>
  );
}
