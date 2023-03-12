import GoogleSignIn from '../assets/btn_google_signin_dark_pressed_web.png';
import ReactLogo from '../assets/react.svg';

const Welcome = () => {
  const googleSignIn = () => {};

  return (
    <main className='welcome'>
      <h2>Welcome to Chat App</h2>
      <img src={ReactLogo} alt='react logo' width={50} height={50} />
      <p>Sign in with google to chat with your friend</p>
      <button>
        <img
          onClick={googleSignIn}
          
        />
      </button>
    </main>
  )
}