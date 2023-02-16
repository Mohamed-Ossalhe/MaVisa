import Header from "./components/header/header"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./components/home";
import Rdv from "./components/calendar/rdv";
import VisaForm from "./components/visaForm/visaForm"
import CheckStatus from "./components/checkStatus/checkStatus"
import EditProfile from "./components/checkStatus/editProfile";

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
              <Route path="/apply-for-visa"  element={<Rdv />}  />
              <Route path="/visa-informations"  element={<VisaForm />}  />
              <Route path="/check-visa-situation"  element={<CheckStatus />}  />
              <Route path="/edit-document"  element={<EditProfile />}  />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
