import "./Globalstyles.css";
import Navbar from './components/navbar';
import SectionWelcome from './components/sectionwelcome';
import SectionCursos from './components/SectionCursos';
import SectionMoreInf from './components/SectionMoreInf';
import SectionSearch from './components/SectionSearch';
import SectionInvitation from './components/SectionInvitation';
import Footer from './components/footer';


function App() {
  return (
      <div className="page-container">
         <Navbar/>
         <SectionWelcome/>
         <SectionCursos/>
         <SectionMoreInf/>
         <SectionSearch/>
         <SectionInvitation/>
        <Footer/>
      </div>
  );
}

export default App;

