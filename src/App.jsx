import React, { useState, useEffect } from 'react';
import Button from './components/button';
import Page1 from './components/pages/page1';
import Page2 from './components/pages/page2';
import Page3 from './components/pages/Page3';
import Page4 from './components/pages/Page4';
import Page5 from './components/pages/page5';
import Page6 from './components/pages/page6';
import Page7 from './components/pages/Page7';
import { IoChevronBackSharp } from "react-icons/io5";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [showButtons, setShowButtons] = useState(true);
  const [showTrackLine, setShowTrackLine] = useState(true);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    if (currentPage === 6) {
      const timeout = setTimeout(() => {
        setCurrentPage(7);
      }, 5000); // 5 seconds
      return () => clearTimeout(timeout);
    }
  }, [currentPage]);

  const handleSubmit = () => {
    setShowButtons(false);
    setShowTrackLine(false);
    setCurrentPage(6); // Start countdown to page 7
  };

  const lineWidth = ((currentPage - 1) / 7) * 100;

  return (
    <div className="max-w-[900px] mx-auto">
      <div className="flex items-center justify-between mt-2 ">
        {currentPage > 1 && currentPage < 6 && (
          <Button
            onClick={prevPage}
            className="text-xl bg-transparent text-blue hover:bg-transparent"
          >
            <IoChevronBackSharp className="text-black" />
          </Button>
        )}

        {/* Track line */}
        {showTrackLine && (
          <div className="flex-1 h-3 mt-2 bg-slate-300 rounded-xl">
            <div className="h-3 bg-green-800 rounded-xl" style={{ width: `${lineWidth}%` }} />
          </div>
        )}
      </div>

      {/* Render current page based on state */}
      {currentPage === 1 && <Page1 />}
      {currentPage === 2 && <Page2 />}
      {currentPage === 3 && <Page3 />}
      {currentPage === 4 && <Page4 />}
      {currentPage === 5 && <Page5 />}
      {currentPage === 6 && <Page6 />}
      {currentPage === 7 && <Page7 />}

      {/* Continue button */}
      {showButtons && (
        <div className="flex justify-center mt-4">
          {currentPage < 5 ? (
            <Button onClick={nextPage}>Continue</Button>
          ) : (
            <Button onClick={handleSubmit}>Submit</Button>
          )}
        </div>
      )}
    </div>
  );
}

export default App;