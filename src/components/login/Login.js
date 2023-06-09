import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();

    // Send login data to server for authentication
    fetch('/login', { 
        //make sure you have /login 
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
    navigate('/Navbar');
  };
return (
//     <body>
//     <div className="text-center body" id="login">
//     <form className="form-signin" id="form-signin" onSubmit={handleSubmit}>
//         {/* <img class="mb-4" src="" alt="" width="72" height="72"/>  */}
//         <h1 className="h3 mb-3 font-weight-normal">Please Login</h1>
//         <div className="d-flex justify-content-center">
//         <div className="w-25 body p-2 mb-3 me-7">
//         <label for="inputEmail" className="sr-only">Username</label>
//         <input type="usename" id="inputEmail" class="form-control" value={username} placeholder="username" autofocus="centre" onChange={handleUsernameChange}/>
//         <label for="inputPassword" class="sr-only">Password</label>
//         <input type="password" id="inputPassword" value={password} class="form-control" placeholder="Password" onChange={handlePasswordChange}/>
//         </div>
//         </div>
//         <div class="checkbox mb-3">
//             <label>
//                 <input type="checkbox" value="remember-me"/> Remember me
//             </label>
//         </div>
//         <button class="btn btn-lg btn-primary btn-block" type="submit">Login</button>
//         <p class="mt-5 mb-3 text-muted">©2023</p>
//     </form>

// <div id="register">register</div>

// <div id="auth"></div>
// </div>
// </body>
<form classname="form-control" onSubmit={handleSubmit}>
      <h1>Welcome To PET-STORE</h1>
      <h2>Login</h2>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" value={username} onChange={handleUsernameChange} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange} />
      </div>
      <button type="submit">Login</button>
    </form>

);
}
export default Login;