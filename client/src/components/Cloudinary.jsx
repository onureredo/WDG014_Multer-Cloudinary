import { useState, useEffect } from 'react';
import axios from 'axios';

function Cloudinary() {
  const [images, setImages] = useState([]);
  const [file, setFile] = useState(null);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get('http://localhost:8000/images');
      setImages(response.data);
    } catch (error) {
      console.error('error fetching images', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert('please select an image to upload');
    }

    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await axios.post(
        'http://localhost:8000/images',
        formData
      );
      console.log(response.data);
      alert('image uploaded');
      fetchImages();
    } catch (error) {
      console.error('Error upload', error);
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div>
      <h2>Upload Image</h2>
      <form onSubmit={handleSubmit}>
        <input type='file' onChange={handleFileChange} />
        <button type='submit'>Upload</button>
      </form>
      <div>
        {images.length ? (
          images.map((image, index) => (
            <img
              key={index}
              src={image.url}
              alt='something'
              style={{ width: 400, height: 400 }}
            />
          ))
        ) : (
          <p>No images found</p>
        )}
      </div>
    </div>
  );
}

export default Cloudinary;
