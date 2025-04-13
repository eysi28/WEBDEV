import React from 'react';
import { AdminLogin } from './components/AdminLogin';

function App() {
  const handleLogin = (success: boolean) => {
    if (success) {
      // Handle successful login
      console.log('Login successful');
      // You can redirect to admin dashboard or set authentication state here
    } else {
      console.log('Login failed');
    }
  };

  return (
    <div>
      <AdminLogin onLogin={handleLogin} />
    </div>
  );
}
