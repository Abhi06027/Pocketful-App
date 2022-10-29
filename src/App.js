import React from "react";
import SignupForm from "./Components/SignupForm";
import { Routes, Route } from "react-router-dom";
import News from "./Components/Home/News";
import Home from "./Components/Home/Home";
import { AuthContextProvider } from "./context/AuthContext";
function App() {
  return (
    <div>
      <AuthContextProvider>
        <Routes>
          <Route path="/News" element={<News />} /> <Route />
          <Route path="/" element={<SignupForm />} /> <Route />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
