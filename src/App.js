import './App.css';
import React from 'react';
import { useState } from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className='App'> 
      <Navbar logoText = "LearningReact"/>
      <h1>Welcome to My First App</h1>
      <p>This is a simple React application.</p>
      <p>Feel free to explore and modify the code!</p>
      <p>Happy coding!</p>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Footer/>
    </div>
  );
}

export default App;
