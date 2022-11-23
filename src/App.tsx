import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import Errorpage from "./components/Errorpage";
import Product from "./pages/Product";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/main.css";
import "./styles/navbar.css";
import "./styles/store.css";
import "./styles/about.css";
import "./styles/itemCard.css";
import "./styles/shoppingCart.css";
import "./styles/home.css";
import "./styles/footer.css";
import "./styles/hamburguer.css";
import "./styles/menu.css";
import "./styles/responsive.css";
import "./styles/errorpage.css";
import "./styles/product.css";
import { Routes, Route } from "react-router-dom";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ScrollToTop from "./utilities/ScrollToTop";

const App = () => {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        cacheTime: 5000,
      },
    },
  });
  return (
    <>
      <QueryClientProvider client={client}>
        <ShoppingCartProvider>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/store/:ProductId" element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Errorpage />} />
          </Routes>

          <Footer />
        </ShoppingCartProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
