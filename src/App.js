import "./Globalstyles.css";
import Navbar from './components/navbar';
import SectionWelcome from './components/sectionwelcome';
import Sectioncursos from './components/sectioncursos';
import Footer from './components/footer';


function App() {
  return (
      <div className="page-container">
         <Navbar/>
         <SectionWelcome/>
         <Sectioncursos/>
        <Footer/>
      </div>
  );
}

export default App;

