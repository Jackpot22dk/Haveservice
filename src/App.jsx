import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import HomeAdmin from './pages/home/HomeAdmin';
import Love from './pages/Love/Love';
import Energidata from './pages/energidata/Energidata';
import Nyheder from './pages/news/Nyheder';
import ViborgHaveservice1 from './pages/viborgservice/ViborgHaveservice1';
import Vejret from './pages/weather/Vejret';
import Navbar from './layout/Navbar';
import "./scss/App.scss"

function App() {
  return (
    <div className="App">

    <BrowserRouter>

      <Navbar />
      {/* <Header /> */}

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/HomeAdmin" element={<HomeAdmin />} />
        <Route path="/Love" element={<Love />} />
        <Route path="/ViborgHaveservice1" element={<ViborgHaveservice1 />} />
        <Route path="/Vejret" element={<Vejret />} />
        <Route path="/Nyheder" element={<Nyheder />} />
        <Route path="/Energidata" element={<Energidata />} />
        <Route path="/Nyheder" element={<Nyheder />} />

      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
    
  </div>
  );
}

export default App;
