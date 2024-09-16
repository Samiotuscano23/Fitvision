import React from 'react';
import Route from './Routes/RouteWrap';
import './app.css';
import { AuthProvider } from './context/AuthContext';
function App() {

  return (
    <div className="App">
      <AuthProvider>
        <Route />
      </AuthProvider>
    </div>
  );
}

export default App;
