
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Error from './components/Error';
import Header from './components/Header/Header';
import Manage from './components/Manage/Manage';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Review from './components/Review/Review';
import Shopping from './components/Shopping/Shopping';
function App() {

  return (
    <div>
      {/* <Shopping></Shopping> */}
      <BrowserRouter>
      <Header/>
      <Routes>
          <Route path= "/" element = {<Shopping/>} />
          <Route path= "/order" element = {<Review/>} />
          <Route path= "/inventory" element = {<Manage/>} />
          <Route path= "/product/:productkey" element = {<ProductDetails/>} />
          <Route path= "*" element = {<Error/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
