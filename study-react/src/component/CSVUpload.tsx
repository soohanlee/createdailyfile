import React, { ChangeEvent, useState } from "react";

interface CSVUploadProps {
  onUpload: (data: string) => void;
}

const CSVUpload: React.FC<CSVUploadProps> = ({ onUpload }) => {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target?.result as string;
        onUpload(text);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div>
      <label htmlFor="csv-upload">
        Upload a CSV file
        <input
          id="csv-upload"
          type="file"
          accept=".csv"
          onChange={handleFileChange}
        />
      </label>
      {fileName && <p>Uploaded file: {fileName}</p>}
    </div>
  );
};

export default CSVUpload;
