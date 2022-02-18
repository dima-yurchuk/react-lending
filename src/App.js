import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import Footer from "./components/Footer/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Telegram from "./pages/Telegram/Telegram";
import Support from "./pages/Support/Support";
import Button from "./components/Button/Button";
import Layout from "./layouts/Layout";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Layout>
              <Routes>
                  <Route path={'/'} element={<Main/>}/>
                  <Route path={'/telegram'} element={<Telegram/>}/>
                  <Route path={'/support'} element={<Support/>}/>
              </Routes>
          </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
