import logo from './logo.svg';
import './App.css';
import ContactoContainer from './containers/contactoContainer';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ContactoContainer></ContactoContainer>
      </header>
    </div>
  );
}

export default App;
