import './App.css';
import Contact from './components/Contact';
import Socials from './components/Socials';
import Logo from './components/Logo';
import ProfileImage from './components/ProfileImage';
import Intro from './components/Intro';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo></Logo>
      </header>
      <body>
        <Socials></Socials>
        <Intro></Intro>
        <ProfileImage></ProfileImage>
        <Contact></Contact>
      </body>
    </div>
  );
}

export default App;
