import "./App.css";
import Home from "./Components/Home";
import Error from "./Components/Error";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import ProductPage from "./Components/ProductPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/product/:id" element={<ProductPage />} />
          <Route path="*" element={<Error />} />

         
        {/* <Testimonial />
        <Contact /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
