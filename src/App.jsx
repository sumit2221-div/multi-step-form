import React, { useState } from 'react';
import Button from './components/button';
import Page1 from './components/pages/page1';
import Page2 from './components/pages/page2';
import Page3 from './components/pages/Page3';
import Page4 from './components/pages/Page4';


function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  // Calculate the width of the line based on current page
  const lineWidth = ((currentPage - 1) / 2) * 100; // Assuming there are 3 pages

  return (
    <div>
      {/* Track line */}
      <div className={`max-w-[600px] md:max-w-full bg-slate-300 h-3 mt-8 rounded-xl ${currentPage === 3 ? 'hidden md:block' : ''}`}>
        <div
          className="h-3 bg-green-300 rounded-xl"
          style={{ width: `${lineWidth}%` }}
        />
      </div>

      {/* Render current page based on state */}
      {currentPage === 1 && <Page1 />}
      {currentPage === 2 && <Page2 />}
      {currentPage === 3 && <Page3 />}
      {currentPage === 4 && <Page4/>}

      {/* Continue button */}
      <div className="flex justify-center mt-4">
        {currentPage > 1 && (
          <Button onClick={prevPage} className="mx-2 ">
            previous
          </Button>
        )}
        {currentPage < 4 ? (
          <Button onClick={nextPage}>Continue</Button>
        ) : (
          <Button disabled>Submit</Button>
        )}
      </div>
    </div>
  );
}

export default App;
