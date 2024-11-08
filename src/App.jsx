import { BrowserRouter as Router, Link, Routes, Route, useParams, useNavigate } from "react-router-dom";

// const Home = () => {
//   return <h1>Home</h1>;
// };

// const About = () => {
//   return <h1>About</h1>;
// };

// const Contact = () => {
//   return <h1>Contact</h1>;
// };

const ProductList = () => {
  return (
    <>
      <h1>All Products</h1>
      <ul style={{listStyle: "none"}}>
        {/* <li><Link to="/product/1">Product 1</Link></li>
        <li><Link to="/product/2">Product 2</Link></li>
        <li><Link to="/product/new">Create New Product</Link></li> */}
           <li><Link to="/1">Product 1</Link></li>
        <li><Link to="/2">Product 2</Link></li>
        <li><Link to="/new">Create New Product</Link></li>
      </ul>
    </>
  );
};

const ProductDetails = () => {
  const {id} = useParams();
  return <h1>Product Details for the Product ID: {id}</h1>;
};

const NewProduct = () => {

  const navigate = useNavigate();

  const handleSubmit = () => {
     navigate("/products");
     navigate("/ ");
  }
  return (
    <>
    <h2>Create a New Product</h2>
    <button onClick={handleSubmit}>Submit New Product</button>
    </>
  )
};

export default function App() {
  return (
    <Router>
      {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul> */}
      <Link to="/products">Products</Link>

      <Routes>
        {/* <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}

        {/* <Route path="/products" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails/>} />
        <Route path="/product/new" element={<NewProduct />} /> */}

        <Route index element={<ProductList/>} />
        <Route path=":id" element={<ProductDetails/>} />
        <Route path="new" element={<NewProduct/>} />
      </Routes>
    </Router>
  );
}
