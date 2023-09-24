import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Process from './Pages/Process/Process';
import Service1 from './Pages/Service1/Service1'
import Service2 from './Pages/Service2/Service2'
import Service3 from './Pages/Service3/Service3'
import Signup from './Pages/Signup/Signup'
import Footer from './Components/Footer/Footer'

function App() {
    return (

        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/process" element={<Process />} />
                <Route path="/service1" element={<Service1 />} />
                <Route path="/service2" element={<Service2 />} />
                <Route path="/service3" element={<Service3 />} />
                <Route path='/signup' element={ <Signup /> } />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;