import React from "react";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import CategoryBlock from "../../components/categoryBlock/CategoryBlock";
import About from "../../components/about/About";
import FormEmail from "../../components/formEmail/FormEmail";
import Footer from "../../components/footer/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <CategoryBlock />
      <About />
      <FormEmail />
      <Footer />
    </>
  );
}
