import Header from "./components/header/header"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./components/home";
import VisaApply from "./components/visaForm/visaApply";

const El = ({h}) => {
  return (
    <h1>Hello {h}</h1>
  );
}

function App() {
  return (
    <Router>
      <div className="section h-screen">
        <div className="section-wrapper h-full">
          <Header />
          <div className='content h-4/5'>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/rdv" element={<El h='rdv' />}  />
              <Route path="/about"  element={<El h='about' />}  />
              <Route path="/support"  element={<El h='support' />}  />
              <Route path="/apply-for-visa"  element={<VisaApply />}  />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
