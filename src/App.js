import React, { useState, useEffect } from "react"
import AppViews from "./components/AppViews"
import Login from "./components/Login"
import "./App.css"

// Handle user login credentials

function App() {
  const [isAuthenticated, setAuthenticated] = useState(false)
  const [viewLogin, setViewLogin] = useState(false)
  const handleAuth = () => {
    sessionStorage.getItem("user") === null
      ? setAuthenticated(false)
      : setAuthenticated(true)
  }
  const toggleLogin = () => setViewLogin(!viewLogin)
  useEffect(handleAuth, [])
  return (
    <div className="App">
      <section className="App-header">
        {isAuthenticated ? (
          <AppViews handleAuth={handleAuth} setViewLogin={setViewLogin} />
        ) : (
          <>
            {viewLogin ? (
              <>
                <button onClick={toggleLogin}>back</button>
                <Login handleAuth={handleAuth} />
              </>
            ) : (
              <>
                Welcome <button onClick={toggleLogin}>Login</button>
              </>
            )}
          </>
        )}
      </section>
    </div>
  )
}

export default App
