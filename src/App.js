import Register from './Componet/User/Register';
import Login from './Componet/User/Login'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Home from './Componet/User/Home'
import Page404 from './Componet/User/Page404';
import Mobile from './Componet/User/Product/Mobile';
import Man from './Componet/User/Product/Fashion/Man';
import Woman from './Componet/User/Product/Fashion/Woman';
import Child from './Componet/User/Product/Fashion/Child';
import Detail from './Componet/User/Detail';
import PrivateCom from './Componet/User/PrivateCom';
import Cart from './Componet/User/Cart';
import BuytoProduct from './Componet/Payment/BuytoProduct';
import Payment from './Componet/Payment/Payment';
import MotorolaMobiles from './Componet/User/Product/MotorolaMobiles';



function App() {


  return (
    <BrowserRouter>

      <Routes>
        <Route element={<PrivateCom />}>
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Mobile" element={<Mobile />} />
          <Route path="/Man" element={<Man />} />
          <Route path="/Woman" element={<Woman />} />
          <Route path="/Child" element={<Child />} />
          <Route path="/Man/product/:id" element={<Detail />} />
        </Route>


        <Route path="/Register" element={<Register name="Register" />} />
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />

        <Route path="/Login" element={<Login />} />
        <Route path="/*" element={<Page404 />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/BuytoProduct" element={<BuytoProduct />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/motorola-mobiles" element={<MotorolaMobiles />} />
      </Routes>
    </BrowserRouter>


  );
}

export default App;
