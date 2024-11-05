import React, { useState } from 'react'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Components/Navbar';
import News from './Components/News';
import { Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const pageSize = 5;  
  const [progress, setProgress] = useState(0);

  const setProgressFunction = (progress) => {
    setProgress(progress);
  }
  return (
    <>
      <Navbar />
      <LoadingBar
        // color='#f11946'
        color='#1d19f1'
        progress={progress}
        height={3}
        onLoaderFinished={() => setProgress(100)}
      />
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<News setProgress={setProgressFunction}   key="general" pageSize={pageSize} country="in" category="general" />} />
          <Route path="/business" element={<News setProgress={setProgressFunction}   key="business" pageSize={pageSize} country="in" category="business" />} />
          <Route path="/entertainment" element={<News setProgress={setProgressFunction}   key="entertainment" pageSize={pageSize} country="in" category="entertainment" />} />
          <Route path="/general" element={<News setProgress={setProgressFunction}   key="general" pageSize={pageSize} country="in" category="general" />} />
          <Route path="/health" element={<News setProgress={setProgressFunction}   key="health" pageSize={pageSize} country="in" category="health" />} />
          <Route path="/science" element={<News setProgress={setProgressFunction}   key="science" pageSize={pageSize} country="in" category="science" />} />
          <Route path="/sports" element={<News setProgress={setProgressFunction}   key="sports" pageSize={pageSize} country="in" category="sports" />} />
          <Route path="/technology" element={<News setProgress={setProgressFunction}   key="technology" pageSize={pageSize} country="in" category="technology" />} />
        </Routes>        
      </div>
    </>
  )
}

export default App

