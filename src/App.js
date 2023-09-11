import styles from './css/App.module.css';
import Header from "./components/Header"
import Section from "./components/Section"
import Footer from "./components/Footer"
import db from "./db/db.json"

function App() {
  return (
    <div className="App">
      <Header props={db}/>
      <Section swiperdb={db}/>
      <Footer />
    </div>
  );
}

export default App;
