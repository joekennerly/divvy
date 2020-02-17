import React from "react"

export default function AppViews(props) {
  const logout = () => {
    sessionStorage.removeItem("user")
    props.handleAuth()
    props.setViewLogin(false)
  }
  return (
    <>
      <div>app views</div>
      <button onClick={logout}>Logout</button>
    </>
  )
}
