import React, { Component } from 'react';

// Renders the login page
const Login = () => {
  return (
    <div className="login">
      <div className="message">
        <h2 className="crtSpecial welcome">
          Welcome User, <br></br>
          <br></br>to<br></br>
        </h2>{' '}
        <span className="crtSpecial title"> CODERACER</span>
        <div className="signIn">
          <a
            className="githubButton"
            href="https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&scope=email%20profile&response_type=code&client_id=42848154155-tqj1eajsrihntd2s8ov1bbbrco1m1fpq.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback%2Fgoogle"
          >
            <img
              className="githubIcon"
              alt='File:Google "G" Logo.svg'
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
              decoding="async"
              srcset="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/768px-Google_%22G%22_Logo.svg.png 1.5x, https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1024px-Google_%22G%22_Logo.svg.png 2x"
              data-file-width="512"
              data-file-height="522"
              width="35"
              height="35"
            ></img>
            <span> Log in with Google</span>
          </a>
        </div>
        <div className="signIn">
          <a
            className="githubButton"
            href="https://github.com/login/oauth/authorize?scope=read:user&client_id=3b5392180e51bf2368e3&redirect_uri=http://localhost:3000/callback"
          >
            <svg
              className="githubIcon"
              height="46px"
              width="46px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Layer_1"
              x="0px"
              y="0px"
              xmlSpace="preserve"
            >
              <path d="M15.5 22.7h-.1l-.1-.1V22v-2.5c0-.7-.1-1.3-.4-1.8 2.3-.4 4.8-1.6 4.8-6.1 0-1.2-.4-2.3-1.1-3.2.2-.6.3-1.7-.2-3.1l-.3-.3s-.2-.1-.4-.1c-.6 0-1.5.2-3 1.2-.8-.1-1.7-.3-2.7-.3-1 0-1.9.1-2.8.3C7.8 5.2 6.8 5 6.2 5c-.2 0-.3.1-.4.1-.1 0-.3.2-.3.3-.5 1.4-.4 2.5-.2 3.1-.7.9-1.1 2-1.1 3.2 0 4.4 2.6 5.6 4.8 6.1-.1.2-.2.5-.3.8-.2.1-.5.2-.9.2s-.8-.1-1.1-.4l-.1-.1c-.1-.1-.1-.2-.2-.2l-.1-.1-.1-.1c0-.1-.8-1.3-2.2-1.4-.5 0-.9.2-1 .5-.2.5.4.9.7 1.1 0 0 .6.3 1 1.4.2.7 1.1 2 3.2 2h.7v1.4l-.1.1s-.1 0 0 0C4 21.2 1 17 1 12.3c0-6.1 4.9-11 11-11s11 4.9 11 11c0 4.7-3 8.9-7.5 10.4z" />
            </svg>
            <span>Log in with Github</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
