import "./Globalstyles.css";
import Navbar from './components/navbar';
import SectionWelcome from './components/sectionwelcome';
import Footer from './components/footer';


function App() {
  return (
      <div className="page-container">
         <Navbar/>
         <SectionWelcome/>
        <Footer/>
      </div>
  );
}

export default App;

