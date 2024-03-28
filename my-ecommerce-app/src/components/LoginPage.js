import React, { useState } from 'react';
import Header from 'src\components\Header.js';
import Footer from 'src\components\Footer.js';
import LoginForm from 'src\components\LoginForm.js';
import SignupForm from 'src\components\SignupForm.js';

function LoginPage() {
  const [isLoginView, setIsLoginView] = useState(true);

  return (
    <div>
      <Header />
      {isLoginView ? (
        <LoginForm onSwitchToSignup={() => setIsLoginView(false)} />
      ) : (
        <SignupForm onSwitchToLogin={() => setIsLoginView(true)} />
      )}
      <Footer />
    </div>
  );
}

export default LoginPage;
