// import React, { useState } from "react";
// import axios from "axios";
// import * as XLSX from "xlsx";

// const Upload = () => {
//   const [file, setFile] = useState(null);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const upload = async () => {
//     if (!file) return alert("Please select a file first.");

//     const formData = new FormData();
//     formData.append("file", file);

//     try {
//       const res = await axios.post(
//         "http://localhost:8000/api/v1/user/upload",
//         formData,
//         {
//           headers: { "Content-Type": "multipart/form-data" },
//         }
//       );
//       alert("File uploaded to: " + res.data.path);
//     } catch (err) {
//       console.error("Upload failed:", err);
//       alert("Upload failed.");
//     }
//   };

//   return (
//     <div className="upload-container">
//       <div className="upload-header">
//         <h1 className="upload-title">Upload Excel File</h1>
//         <p className="upload-subtitle">
//           Upload your Excel file (.xls or .xlsx) to analyze and visualize your data
//         </p>
//       </div>

//       <div className="upload-box" onClick={() => document.getElementById("fileInput").click()}>
//         <div className="upload-area">
//           <input
//             id="fileInput"
//             type="file"
//             className="upload-input"
//             accept=".xlsx,.xls"
//             onChange={handleFileChange}
//           />
//           <div className="upload-content">
//             <div className="upload-icon-wrapper">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="upload-icon"
//               >
//                 <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
//                 <polyline points="17 8 12 3 7 8" />
//                 <line x1="12" y1="3" x2="12" y2="15" />
//               </svg>
//             </div>

//             <h3 className="upload-heading">Click to Select File</h3>
//             <p className="upload-hint">
//               {file ? `Selected: ${file.name}` : "Drag and drop your file here, or click to browse"}
//             </p>

//             <div className="upload-support">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="support-icon"
//               >
//                 <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
//                 <path d="M14 2v4a2 2 0 0 0 2 2h4" />
//                 <path d="M9 13v-1h6v1" />
//                 <path d="M12 12v6" />
//                 <path d="M11 18h2" />
//               </svg>
//               <span className="support-text">Supports .xlsx and .xls files</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div style={{ textAlign: "center" }}>
//         <button className="upload-button" onClick={upload}>
//           Upload
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Upload;



// import React, { useState } from "react";
// import * as XLSX from "xlsx";
// import axios from "axios";

// const Upload = () => {
//   const [file, setFile] = useState(null);
//   const [sheetData, setSheetData] = useState([]);
//   const [headers, setHeaders] = useState([]);

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     setFile(selectedFile);

//     const reader = new FileReader();
//     reader.onload = (evt) => {
//       const data = new Uint8Array(evt.target.result);
//       const workbook = XLSX.read(data, { type: "array" });

//       const sheetName = workbook.SheetNames[0];
//       const sheet = workbook.Sheets[sheetName];
//       const json = XLSX.utils.sheet_to_json(sheet, { header: 1 });

//       setHeaders(json[0]);
//       setSheetData(json.slice(1));
//     };

//     reader.readAsArrayBuffer(selectedFile);
//   };

//   const upload = async () => {
//     if (!file) return alert("Please select a file first.");

//     const formData = new FormData();
//     formData.append("file", file);

//     try {
//       const res = await axios.post("http://localhost:8000/api/v1/user/upload", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       alert("File uploaded to: " + res.data.path);
//     } catch (err) {
//       console.error("Upload failed:", err);
//       alert("Upload failed.");
//     }
//   };

//   return (
//     <div className="upload-container">
//       <div className="upload-header">
//         <h1 className="upload-title">Upload Excel File</h1>
//         <p className="upload-subtitle">
//           Upload your Excel file (.xls or .xlsx) to analyze and visualize your data
//         </p>
//       </div>

//       <div className="upload-box" onClick={() => document.getElementById("fileInput").click()}>
//         <div className="upload-area">
//           <input
//             id="fileInput"
//             type="file"
//             className="upload-input"
//             accept=".xlsx,.xls"
//             onChange={handleFileChange}
//           />
//           <div className="upload-content">
//             <div className="upload-icon-wrapper">
//               <svg className="upload-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                 <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
//                 <polyline points="17 8 12 3 7 8" />
//                 <line x1="12" y1="3" x2="12" y2="15" />
//               </svg>
//             </div>
//             <h3 className="upload-heading">Click to Select File</h3>
//             <p className="upload-hint">
//               {file ? `Selected: ${file.name}` : "Drag and drop your file here, or click to browse"}
//             </p>
//             <div className="upload-support">
//               <svg className="support-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                 <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
//                 <path d="M14 2v4a2 2 0 0 0 2 2h4" />
//                 <path d="M9 13v-1h6v1" />
//                 <path d="M12 12v6" />
//                 <path d="M11 18h2" />
//               </svg>
//               <span className="support-text">Supports .xlsx and .xls files</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div style={{ textAlign: "center" }}>
//         <button className="upload-button" onClick={upload}>
//           Upload
//         </button>
//       </div>

//       {sheetData.length > 0 && (
//         <div className="upload-preview" style={{ marginTop: "2rem", width: "100%" }}>
//           <h2 className="upload-title" style={{ fontSize: "1.5rem" }}>Excel Preview</h2>
//           <div style={{ overflowX: "auto", marginTop: "1rem" }}>
//             <table style={{ width: "100%", borderCollapse: "collapse" }}>
//               <thead style={{ background: "#f9fafb" }}>
//                 <tr>
//                   {headers.map((head, index) => (
//                     <th
//                       key={index}
//                       style={{
//                         padding: "10px",
//                         border: "1px solid #e5e7eb",
//                         fontSize: "0.9rem",
//                         fontWeight: "600",
//                         textAlign: "left",
//                       }}
//                     >
//                       {head || `Column ${index + 1}`}
//                     </th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {sheetData.map((row, rowIndex) => (
//                   <tr key={rowIndex} style={{ background: rowIndex % 2 === 0 ? "#fff" : "#f3f4f6" }}>
//                     {headers.map((_, colIndex) => (
//                       <td
//                         key={colIndex}
//                         style={{
//                           padding: "10px",
//                           border: "1px solid #e5e7eb",
//                           fontSize: "0.85rem",
//                           color: "#374151",
//                         }}
//                       >
//                         {row[colIndex] || "-"}
//                       </td>
//                     ))}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
//             <button className="upload-button">Continue to Analysis</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Upload;



import React, { useState } from "react";
import * as XLSX from "xlsx";
import ExcelPreview from "./ExcelPreview";

const Upload = () => {
  
  const [file, setFile] = useState(null);
  const [excelData, setExcelData] = useState([]);
  const [filename, setFilename] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setFilename(selectedFile.name);
  };

  const handleUpload = () => {
    if (!file) return alert("Please select a file first.");

    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { 
        header: 1,
        defval: "_",
        blankrows: true,
        raw: true 
       });
        // console.log("Rows:", jsonData.length);
        jsonData.forEach((r, i) => console.log(`Row ${i}:`, r));
      setExcelData(jsonData);

    };
    reader.readAsArrayBuffer(file);
  };

  return (
    <div className="upload-container">
      <div className="upload-header">
        <h1 className="upload-title">Upload Excel File</h1>
        <p className="upload-subtitle">
          Upload your Excel file (.xls or .xlsx) to analyze and visualize your data
        </p>
      </div>

      <div className="upload-box" onClick={() => document.getElementById("fileInput").click()}>
        <div className="upload-area">
          <input
            id="fileInput"
            type="file"
            className="upload-input"
            accept=".xlsx,.xls"
            onChange={handleFileChange}
          />
          <div className="upload-content">
            <h3 className="upload-heading">Click to Select File</h3>
            <p className="upload-hint">
              {file ? `Selected: ${file.name}` : "Drag and drop your file here, or click to browse"}
            </p>
          </div>
        </div>
      </div>

      <div style={{ textAlign: "center" }}>
        <button className="upload-button" onClick={handleUpload}>
          Upload & Preview
        </button>
      </div>

      {/* Excel Table Preview */}
      {excelData.length > 0 && (
        <ExcelPreview data={excelData} fileName={filename} />
      )}
      
    </div>
  );
};

export default Upload;
