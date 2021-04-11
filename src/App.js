import './App.css';
import Contact from './components/Contact';
import Socials from './components/Socials';

const linkStyle = {
  textDecoration: 'none'
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="home"
          style={linkStyle}
          href="#home"
          target="_blank"
          rel="noopener noreferrer"
        >
          SME.
        </a>
      </header>
      <body>
        <Socials></Socials>
        <Contact></Contact>
      </body>
    </div>
  );
}

export default App;
