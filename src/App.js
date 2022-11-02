import React, { useEffect } from 'react'
import './App.css'
import HomeScreen from './pages/HomeScreen'
import LoginScreen from './pages/LoginScreen'
import { BrowserRouter as Routes, Route } from 'react-router-dom'
import { auth } from './firebase'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout, selectUser } from './features/userSlice'

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email
          })
        )
      } else {
        dispatch(logout)
      }
    })

    return unsubscribe
  }, [])

  return (
    <div className="app">
      <Routes>
        {!user ? (
          <LoginScreen />
        ) : (
          <Route exact path="/">
            <HomeScreen />
          </Route>
        )}
      </Routes>
    </div>
  )
}

export default App
