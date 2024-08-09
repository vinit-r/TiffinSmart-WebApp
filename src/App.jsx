import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Home from "./controller/home";
import MealPlan from "./controller/mealPlan";
import AddToCart from "./controller/addToCart";
import SubscribeMeal from "./controller/subscribeMeal";
import {
  IndexLayout,
  MealLayout,
  SubscribeMealLayout,
  CheckOutLayout,
  PlaceOrderLayout,
  PaymentLayout,
} from "./Layout";
import ScrollOnTop from "./util/ScrollOnTop";
import Checkout from "./controller/checkout";
import CouponModel from "./controller/coupon";
import Help from "./controller/help";
import AboutUs from "./controller/aboutUs";
import ServiceUs from "./controller/serviceUs";
import Contact from "./controller/contact";
import Company from "./controller/company";
import CookiePolicy from "./controller/cookiePolicy";
import TermOfUse from "./controller/termOfUse";
import PlaceOrder from "./controller/placeOrder";
import PrivacyPolicy from "./controller/privacyPolicy";
import SiteMap from "./controller/siteMap";

import {
  CashOnDelivery,
  CreditCard,
  DebitCard,
  NetBanking,
  UPIandWallets,
} from "./controller/payment";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<IndexLayout />}>
      <Route index element={<Home />} />
      <Route path="meal-plan" element={<MealLayout />}>
        <Route index element={<MealPlan />} />
        <Route path="add-to-cart" element={<AddToCart />} />
        <Route path="subscribe-meal" element={<SubscribeMealLayout />}>
          <Route index element={<SubscribeMeal />} />
          <Route path="checkout" element={<CheckOutLayout />}>
            <Route index element={<Checkout />} />
            <Route path="place-order" element={<PlaceOrderLayout />}>
              <Route index element={<PlaceOrder />} />
              <Route path="payment" element={<PaymentLayout />}>
                <Route index element={<CashOnDelivery />} />
                <Route path="debit-card" element={<DebitCard />} />
                <Route path="net-banking" element={<NetBanking />} />
                <Route path="upi-wallets" element={<UPIandWallets />} />
                <Route path="credit-card" element={<CreditCard />} />
              </Route>
            </Route>
          </Route>
        </Route>
      </Route>
      <Route path="help" element={<Help />} />
      <Route path="about-us" element={<AboutUs />} />
      <Route path="service-us" element={<ServiceUs />} />
      <Route path="contact" element={<Contact />} />
      <Route path="company" element={<Company />} />
      <Route path="cookie-policy" element={<CookiePolicy />} />
      <Route path="term-of-use" element={<TermOfUse />} />
      <Route path="privacy-policy" element={<PrivacyPolicy />} />
      <Route path="sitemap" element={<SiteMap />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
