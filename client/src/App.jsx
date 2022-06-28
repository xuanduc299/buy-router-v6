import "./app.scss";
import Home from "./pages/Home";
// import Post from "./pages/Post";
import Login from "./pages/Login";
import Header from "./components/Header";
import Products from "./components/Products";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { DataProvider } from "./components/DataProvider";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  return (
    <DataProvider>
      <Router>
        <div>
          <Header user={user} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<Details />} />
            <Route path="/cart" element={<Cart />} />
            {/* <Route path="/payment" element={<Payment />} /> */}
            <Route
              path="/login"
              element={user ? <Navigate to="/" /> : <Login />}
            />
            {/* <Route
              path="/post/:id"
              element={user ? <Post /> : <Navigate to="/login" />}
            /> */}
          </Routes>
        </div>
      </Router>
      <Footer />
    </DataProvider>
  );
};

export default App;
