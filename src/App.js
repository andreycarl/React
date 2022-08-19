import "./Globalstyles.css";
import Header from "./components/header";
import Footer from './components/footer';

function App() {
  return (
      <div className="page-container">
         <div className="content-wrap">
         <Header/>
         </div>
         
        <Footer/>
      </div>
  );
}

export default App;

