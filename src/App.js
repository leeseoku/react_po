import styles from './css/App.module.css';
import Header from "./components/Header"
import Section from "./components/Section"
import Footer from "./components/Footer"
import Stairs from "./components/Stairs"
import db from "./db/db.json"

function App() {
  return (
    <div className="App">
      <Header props={db}/>
      <Stairs />
      <Section />
      <Footer />
    </div>
  );
}

export default App;
