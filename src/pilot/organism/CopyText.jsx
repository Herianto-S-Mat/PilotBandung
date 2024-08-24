import React, { useState } from "react";

const CopyText = () => {
  const [text, setText] = useState("Teks yang akan disalin");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Mengembalikan status copied ke false setelah 2 detik
    });
  };

  return (
    <div>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        style={{ marginRight: '10px' }}
      />
      <button onClick={handleCopy}>
        {copied ? "Tersalin!" : "Salin Teks"}
      </button>
    </div>
  );
};

export default CopyText;