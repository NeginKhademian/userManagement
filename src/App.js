import React from "react";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import './App.css'
const App = () => {
  const { authToken, logout } = useAuth();

  return (
    <BrowserRouter>
      {authToken && (
        <div className="header"> 
            
        <button onClick={logout} className="logout">
          Logout
        </button>
        </div>
      )}

      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
