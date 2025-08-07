import React from 'react';
import BigOVisualization from './components/BigOVisualization';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <BigOVisualization />
      </main>
      <Footer />
    </div>
  );
}

export default App;
