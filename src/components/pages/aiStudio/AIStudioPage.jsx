import React from 'react';
import './AIStudioPage.css';

const AIStudioPage = () => {
  return (
    <div className="ai-studio-container">
      <h2>AI Studio</h2>
      <div className="ai-tools-section">
        <div className="tool-card">
          <h3>AI Filters</h3>
          <p>Apply AI-powered photo filters</p>
          <button>Try Now</button>
        </div>
        <div className="tool-card">
          <h3>Avatar Generator</h3>
          <p>Create your own AI avatar</p>
          <button>Generate</button>
        </div>
        <div className="tool-card">
          <h3>Smart Caption</h3>
          <p>Generate captions using AI</p>
          <button>Generate Caption</button>
        </div>
      </div>
    </div>
  );
};

export default AIStudioPage;
