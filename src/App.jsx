import Navbar from './components/Navbar';
import Products from './components/Products';
import InsertProduct from './components/InsertProduct'
import UpdateProduct from './components/UpdateProduct';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Comm from './components/Comm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar title="CRUD-A" about="About"></Navbar>
        <Routes>
          <Route exact path="/" element={<Comm pageHeading={"Home"} />} />
          <Route path="/products" element={<Products />} />
          <Route path="/insertproduct" element={<InsertProduct />} />
          <Route path="/updateproduct/:id" element={<UpdateProduct />} />
          <Route path="/about" element={<Comm pageHeading={"About"} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
