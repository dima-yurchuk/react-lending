import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Telegram from "./components/Telegram/Telegram";
import Support from "./Support/Support";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar/>
          <Routes>
              <Route path={'/'} element={<Content/>}/>
              <Route path={'/telegram'} element={<Telegram/>}/>
              <Route path={'/support'} element={<Support/>}/>
          </Routes>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
