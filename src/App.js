import "./app.css";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import EditUser from "./pages/editUser/EditUser";
import CreateUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import EditProduct from "./pages/editProduct/EditProduct";
import CreateProduct from "./pages/newProduct/NewProduct";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 
function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/editUser/:userId" element={<EditUser />} />
          <Route path="/newUser" element={<CreateUser />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/editProduct/:productId" element={<EditProduct />} />
          <Route path="/newProduct" element={<CreateProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
