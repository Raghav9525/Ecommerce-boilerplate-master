import { BrowserRouter } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from "./components/CustomNavbar";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <BrowserRouter>
        <CustomNavbar />
        <Dashboard />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
