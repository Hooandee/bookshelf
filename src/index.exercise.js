import React from 'react'
import ReactDOM from 'react-dom'
import {Dialog} from '@reach/dialog'
import '@reach/dialog/styles.css'
import {Logo} from './components/logo'

const App = () => {
  const [openModal, setOpenModal] = React.useState('none')

  function onLoginClickHandler(event) {
    setOpenModal('login')
  }
  function onSignInClickHandler(event) {
    setOpenModal('register')
  }
  function dismissDialog() {
    setOpenModal('none')
  }
  function handleLoginSubmit(formData) {
    console.log('login', formData)
  }
  function handleRegisterSubmit(formData) {
    console.log('register', formData)
  }

  function LoginForm({onSubmit, buttonText}) {
    function handleSubmit(event) {
      event.preventDefault()
      onSubmit({
        username: event.target.elements.username.value,
        password: event.target.elements.password.value,
      })
    }
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input type={'text'} id="username"></input>
        <label htmlFor="password">Password</label>
        <input type={'password'} id="password"></input>
        <button type="submit">{buttonText}</button>
      </form>
    )
  }

  return (
    <>
      <Logo height="80" width="80" />
      <h1>Bookshelf</h1>
      <form>
        <button type="button" onClick={onLoginClickHandler}>
          Login
        </button>
        <button type="button" onClick={onSignInClickHandler}>
          Register
        </button>
      </form>
      <Dialog
        aria-label="Login Form"
        isOpen={openModal === 'login'}
        onDismiss={dismissDialog}
      >
        <button type="button" onClick={dismissDialog}>
          Close
        </button>
        <LoginForm onSubmit={handleLoginSubmit} buttonText="Login" />
      </Dialog>
      <Dialog
        aria-label="Register Form"
        isOpen={openModal === 'register'}
        onDismiss={dismissDialog}
      >
        <button type="button" onClick={dismissDialog}>
          Close
        </button>
        <LoginForm onSubmit={handleRegisterSubmit} buttonText="Register" />
      </Dialog>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
