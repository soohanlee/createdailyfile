import React from "react";
import CSVUpload from "../../component/CSVUpload";

const FilePage: React.FC = () => {
  const handleUpload = (data: string) => {
    console.log(data);
  };

  return (
    <div>
      <CSVUpload onUpload={handleUpload} />
    </div>
  );
};

export default FilePage;
