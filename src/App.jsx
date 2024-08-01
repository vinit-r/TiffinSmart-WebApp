import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./controller/home";
import Header from "./controller/header";
import Footer from "./controller/footer";
import MealPlan from "./controller/mealPlan";
import AddToCart from "./controller/addToCart";
import SubscribeMeal from "./controller/subscribeMeal";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meal-plan" element={<MealPlan />} />
          <Route path="/add-to-cart" element={<AddToCart />} />
          <Route path="/subscribe-meal" element={<SubscribeMeal />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
