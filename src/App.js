import Register from './Componet/User/Register';
import Login from './Componet/User/Login'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Home from './Componet/User/Home'
import Page404 from './Componet/User/Page404';
import Mobile from './Componet/Product/Mobile';
import Man from './Componet/Fashion/Man';
import Woman from './Componet/Fashion/Woman';
import Child from './Componet/Fashion/Child';
import Detail from './Componet/User/Detail';
import PrivateCom from './Componet/User/PrivateCom';
import Cart from './Componet/User/Cart';
import BuytoProduct from './Componet/Payment/BuytoProduct';
import Payment from './Componet/Payment/Payment';
import MotorolaMobiles from './Componet/Product/MotorolaMobiles';
import Support from './Componet/support/Support';
import Account from './Componet/support/Account';
import EmailCampaigns from './Componet/support/EmailCampaigns';
import WomanDetails from './Componet/User/WomanDetails'
import User_Register from './Admin/User_Register';
import Admin_dashboard from './Admin/Admin_dashboard';
import OrderShow from './Admin/OrderShow';
import PaymentsShow from './Admin/PaymentsShow';
import ForgotPassword from './Componet/User/ForgotPassword';
import ResetPassword from './Componet/User/ResetPassword';



function App() {


  return (
    <BrowserRouter>

      <Routes>
        <Route element={<PrivateCom />}>
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Mobile" element={<Mobile />} />
          <Route path="/Man" element={<Man />} />
          <Route path="/Woman" element={<Woman />} />
          <Route path="/Woman/products/:id" element={<WomanDetails />} />
          <Route path="/Child" element={<Child />} />
          <Route path="/Man/product/:id" element={<Detail />} />
          <Route path="/Support" element={<Support />} />
          <Route path="/account" component={<Account />} />
          <Route path="/email-campaigns" component={<EmailCampaigns />} />
          {/* <Route path="/whatsapp-sms" component={WhatsAppSMS} />
          <Route path="/transactional-emails" component={TransactionalEmails} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/automation" component={Automation} /> */}
        </Route>


        <Route path="/Register" element={<Register name="Register" />} />
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path='/Admin_dashboard' element={<Admin_dashboard />} />
        <Route path='/User_Register' element={<User_Register />} />
        <Route path='/PaymentsShow' element={<PaymentsShow />} />
        <Route path='/OrderShow' element={<OrderShow />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/*" element={<Page404 />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/BuytoProduct" element={<BuytoProduct />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/motorola-mobiles" element={<MotorolaMobiles />} />
      </Routes>
    </BrowserRouter>


  );
}

export default App;
