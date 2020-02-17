import React, { useState } from "react"

export default function Login(props) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const handleUsername = e => setUsername(e.target.value)
  const handlePassword = e => setPassword(e.target.value)
  const getUser = async params => {
    const e = await fetch(`http://localhost:3000/user?username=${params}`)
    return await e.json()
  }
  const handleSubmit = () =>
    getUser(username)
      .then(user =>
        user[0] && user[0].password === password
          ? sessionStorage.setItem("user", user[0].id)
          : window.alert("no user found")
      )
      .then(() => props.handleAuth())
  return (
    <>
      <input autoFocus type="text" onChange={handleUsername} />
      <input type="password" onChange={handlePassword} />
      <button onClick={handleSubmit}>Login</button>
    </>
  )
}
