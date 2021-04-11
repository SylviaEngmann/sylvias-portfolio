import './App.css';
import Contact from './components/Contact';
import Socials from './components/Socials';
import Logo from './components/Logo';
import ProfileImage from './components/ProfileImage';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <a
          className="home"
          style={linkStyle}
          href="#home"
          target="_blank"
          rel="noopener noreferrer"
        >
          SME.
        </a>
      </header> */}
      <header className="App-header">
        <Logo></Logo>
      </header>
      <body>
        <Socials></Socials>
        <ProfileImage></ProfileImage>
        <Contact></Contact>
      </body>
    </div>
  );
}

export default App;
