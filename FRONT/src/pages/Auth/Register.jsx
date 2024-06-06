import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import '../../style/register.css';

const Register = () => {
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
        <h1>Page de inscription</h1>
        <button>Inscrire</button>
        <div style={{ marginTop: '20px' }}>
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onFailure={handleGoogleFailure}
            buttonText="S'inscrire avec Google"
          />
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default Register;
