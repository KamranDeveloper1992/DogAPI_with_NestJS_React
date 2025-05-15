import axios from 'axios';
import { use, useEffect, useState } from 'react';
function App() {
  const [dogImage, setDogImage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/dog');
        setDogImage(response.data.message);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <center>
        <h2>Result Random Dog</h2>
        {
          (dogImage === '' ? null : (
            <img style={{ width: '500px' }} src={dogImage} alt="Dog" />
          ))
        }
      </center>
    </>
  );
}

export default App;
