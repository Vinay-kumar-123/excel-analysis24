import axios from "axios";
import React, { useState } from "react";
import { GrUploadOption } from "react-icons/gr";
import { useLocation } from "react-router-dom";

import { Link } from "react-router-dom";
const Ai = () => {
  const [summary, setSummary] = useState();
  const [query, setQuery] = useState("");
  const location = useLocation();
  const uploadedExcelData = location.state?.data ;
  
  
  const handleSubmit = async(e) =>{
      e.preventDefault();
      

      try {
        const response = await axios.post("http://localhost:8000/api/v1/user/gemni", {
            query,
            data: uploadedExcelData,
        });
        
        
        setSummary(response.data.reply);
      } catch (error) {
        console.error("Error from Gemini API:", error);
      setSummary("Error occurred while generating AI response.");
      }
     
  }
  return (
    <>
      <h1 className="ai-container">🧠 Excel Summary</h1>
      <div className="ai-client">
      <form onSubmit={handleSubmit}>
        <input value={query} onChange={(e) => setQuery(e.target.value)} className="input-ai" type="text" placeholder="Ask a question about your Excel data..." />
        <button className="submit-ai" type="submit"><GrUploadOption /></button>
      </form>
      <p className="summary">{summary}</p>
      <button className="copy-summary" onClick={() => {
        navigator.clipboard.writeText(summary);
        alert("Summary copied to clipboard!");
      }}>Copy Summary</button>
      </div>
    </>
  );
};

export default Ai;
