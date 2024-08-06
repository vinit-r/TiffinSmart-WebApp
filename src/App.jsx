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
import { IndexLayout, MealLayout } from "./Layout";
import Checkout from "./controller/checkout";
import CouponModel from "./controller/coupon";

const Help = () => {
  return (
    <div className="h-screen w-full flex  justify-center items-center bg-gray-700">
      <h1 className=" font-bold text-6xl">Help Page</h1>
    </div>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<IndexLayout />}>
      <Route index element={<Home />} />
      <Route path="meal-plan" element={<MealLayout />}>
        <Route index element={<MealPlan />} />
        <Route path="add-to-cart" element={<AddToCart />} />
        <Route path="subscribe-meal" element={<SubscribeMeal />} />
      </Route>
      <Route path="/checkout" element={<Checkout />} />
      <Route path="help" element={<Help />} />
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
