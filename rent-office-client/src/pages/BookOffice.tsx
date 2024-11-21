import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import Header from "../components/BookOffice/Header";
import BookCard from "../components/BookOffice/BookCard";

const BookOffice = () => {
  return (
    <>
      <Navbar />
      <Header />
      <BookCard />
      <Footer />
    </>
  );
};

export default BookOffice;
