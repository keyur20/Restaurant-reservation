import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar";
import BlogPage from "../Pages/BlogPage";
import ContactUsPage from "../Pages/ContactUsPage";
import FoodDetailPage from "../Pages/FoodDetailPage";
import HomePage from "../Pages/HomePage";
import MenuPage from "../Pages/MenuPage";
import NotFoundPage from "../Pages/NotFoundPage";
import ReservationPage from "../Pages/ReservationPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className="container main-container">
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/reservation" element={<ReservationPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contactus" element={<ContactUsPage />} />
          <Route path="/detail-food/:id" element={<FoodDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
