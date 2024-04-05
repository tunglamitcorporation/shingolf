import React, { useState } from 'react';

const ImageUploadForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here, e.g., send file to server
    if (selectedFile) {
      console.log('Selected File:', selectedFile);
      // You can send the file to the server using APIs like fetch or Axios
      // Example: sendFileToServer(selectedFile);
    } else {
      console.log('No file selected');
    }
  };

  return (
    <div>
      <h1>Image Upload Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="imageUpload">Choose Image:</label>
          <input
            type="file"
            id="imageUpload"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
        <div>
          <button type="submit">Upload</button>
        </div>
      </form>
      {selectedFile && (
        <div>
          <h2>Selected Image Preview:</h2>
          <img
            src={URL.createObjectURL(selectedFile)}
            alt="Selected"
            style={{ maxWidth: '100%', maxHeight: '200px' }}
          />
        </div>
      )}
    </div>
  );
};

export default ImageUploadForm;
