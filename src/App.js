import logo from './logo.svg';
import './App.css';
import './styles.css';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import MoviesGrid from './components/MoviesGrid.js';
// In react, we use components to build dynamic webpages and are reusable building blocks.
// A component can be an info card that's used throughout the website at multiple places,
// Instead of creating multiple calls to create it, we simply import it from the file.
// Now, if user needs to use css in one of their react scripts, we use className as shown below.
function App() {
  return (
    <div className="App">
      <div className='container'>
        <Header></Header>
        <MoviesGrid></MoviesGrid>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
