import React, { useState } from 'react'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Components/Navbar';
import News from './Components/News';
import { Routes, Route } from "react-router-dom";
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  let pageSize = 9;   
  let apiKey = process.env.REACT_APP_NEWS_API_KEY; 
  const [progress, setProgress] = useState(0);

  const setProgressFunction = (progress) => {
    setProgress(progress);
  }

    return (
      <>
        <BrowserRouter>
        <LoadingBar
          color='#f11946'
          progress={progress}
          height={3}
          onLoaderFinished={() => setProgress(100)}
        />
              <Navbar />
            <div className="container mt-3">
              <Routes>
                <Route path="/business" element={<News setProgress={setProgressFunction} key="business" apiKey={apiKey} category="business" pageSize={pageSize} />} />
                <Route path="/entertainment" element={<News setProgress={setProgressFunction} key="entertainment" apiKey={apiKey} category="entertainment" pageSize={pageSize} />} />
                <Route path="/" element={<News setProgress={setProgressFunction} key="general" apiKey={apiKey} category="general" pageSize={pageSize} />} />
                <Route path="/general" element={<News setProgress={setProgressFunction} key="general" apiKey={apiKey} category="general" pageSize={pageSize} />} />
                <Route path="/health" element={<News setProgress={setProgressFunction} key="health" apiKey={apiKey} category="health" pageSize={pageSize} />} />
                <Route path="/science" element={<News setProgress={setProgressFunction} key="science" apiKey={apiKey} category="science" pageSize={pageSize} />} />
                <Route path="/sports" element={<News setProgress={setProgressFunction} key="sports" apiKey={apiKey} category="sports" pageSize={pageSize} />} />
                <Route path="/technology" element={<News setProgress={setProgressFunction} key="technology" apiKey={apiKey} category="technology" pageSize={pageSize} />} />                
              </Routes>
            </div>
            {/* <News /> */}
        </BrowserRouter>
      </>
    )  
}

export default App

