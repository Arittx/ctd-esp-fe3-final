import { Routes, Route } from 'react-router-dom'
import { ContextProvider } from "./Components/utils/global.context";

import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

import Home from './Routes/Home'
import Contact from './Routes/Contact'
import Detail from './Routes/Detail'
import Favs from './Routes/Favs'

function App() {
  return (
      <div className="App">
          <Navbar/>
          <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/:id" element={<Detail />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/favorites" element={<Favs />} />
            </Routes>
          <Footer/>
      </div>
  );
}

export default App;
