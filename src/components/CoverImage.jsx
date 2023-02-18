import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CoverImage = ({ coverName }) => {
  const [imageURL, setImageURL] = useState('');

  useEffect(() => {
    const fetchData = async (coverName) => {
      try {
        const response = await axios.post(`https://assign-api.piton.com.tr/api/rest/cover_image?fileName=${coverName}`);
        const imageURL = response.data;
        //console.log('imaj yuerel' , imageURL);
        setImageURL(imageURL);
      } catch (error) {
        console.error('Giriş hatası:', error);
      }
    };

    fetchData(coverName);
  }, [coverName]);

  return (
    <div>
      {imageURL && <img src={imageURL.action_product_image.url} alt="Product Cover" />}
    </div>
  );
};

export default CoverImage;
