import React from "react";
import SignupForm from "./Components/SignupForm";
import { Routes, Route } from "react-router-dom";
import News from "./Components/News";
import ProtectedRoute from "./Components/ProtectedRoute";
import { AuthContextProvider } from "./context/AuthContext";
function App() {
  return (
    <div>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<SignupForm />} /> <Route />
          <Route
            path="/News"
            element={
              <ProtectedRoute>
                <News />
              </ProtectedRoute>
            }
          />
          <Route />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
