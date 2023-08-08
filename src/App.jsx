import './App.css'

function App() {
  //const windowSize = useRef([window.innerWidth, window.innerHeight])
  return (
    <>
      <div class="main-content">
        <div id="container">
          <h1>Sing In</h1>

          <input type="email" name="E-mail" id="form-input" placeholder='E-mail' />
          <input type="password" name="Password" id="form-input" placeholder='Password' />

          <a href="">Reset password?</a>

          <input type="button" value="Sing In" />
        </div>
      </div>
    </>
  )
}

export default App
