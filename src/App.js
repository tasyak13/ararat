import './App.css';
import './components/Reset.css'
import Menu from './components/Menu';
import SectionAbout from './components/SectionAbout';
import SectionSecond from './components/SectionSecond';
import Footer from './components/Footer';


function App() {
  return (
    <body className="App">
        
            <Menu />
            <SectionAbout />
            <SectionSecond />
            <Footer />
    </body>
  );
}

export default App;
