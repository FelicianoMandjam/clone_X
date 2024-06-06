import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import '../../style/login.css';

const Login = () => {
  const handleGoogleSuccess = (response) => {
    console.log('Google login success:', response);
    // Traitez la réponse de Google, par exemple, en envoyant le token au backend pour validation
  };

  const handleGoogleFailure = (error) => {
    console.error('Google login error:', error);
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <div>
        <h1>Page de connexion</h1>
        <button>Connexion</button>
        <div style={{ marginTop: '20px' }}>
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onFailure={handleGoogleFailure}
            buttonText="Se connecter avec Google"
          />
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;
