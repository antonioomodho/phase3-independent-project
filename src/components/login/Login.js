import React from 'react';

function Login(){

return (
    <body>
    <div class="text-center body" id="login">
    <form class="form-signin" id="form-signin">
        {/* <img class="mb-4" src="" alt="" width="72" height="72"/>  */}
        <h1 class="h3 mb-3 font-weight-normal">Please Login</h1>
        <div class="d-flex justify-content-center">
        <div class="w-25 body p-2 mb-3 me-7">
        <label for="inputEmail" class="sr-only">Email address</label>
        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" autofocus="centre"/>
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" id="inputPassword" class="form-control" placeholder="Password"/>
        </div>
        </div>
        <div class="checkbox mb-3">
            <label>
                <input type="checkbox" value="remember-me"/> Remember me
            </label>
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit">Login</button>
        <p class="mt-5 mb-3 text-muted">©2023</p>
    </form>

<div id="register">register</div>

<div id="auth"></div>
</div>
</body>
);
}
export default Login;