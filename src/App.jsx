import { BrowserRouter, RouterProvider, Route, Routes } from "react-router-dom";
import { Layout, Home, Shop, ProductDeatils, CartPage } from "./router";

export const App = () => {
  return <>
    
    <BrowserRouter>
      <Routes>
        <Route
        path="/"
         element={<Layout>
          <Home/>
         </Layout>}
         />
        <Route
        path="/shop"
         element={<Layout>
          <Shop/>
         </Layout>}
         />
        <Route
        path="/product-details/:productId"
         element={<Layout>
          <ProductDeatils/>
         </Layout>}
         />
        <Route
        path="/cart"
         element={<Layout>
          <CartPage/>
         </Layout>}
         />
      </Routes>
    </BrowserRouter>
  </>
}
