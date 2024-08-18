import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Collection from './components/Collection';
import FurnitureItems from './components/FurnitureItems';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Collection />
      <FurnitureItems />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;