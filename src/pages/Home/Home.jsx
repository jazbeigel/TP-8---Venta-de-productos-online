import { useState, useEffect} from 'react';
import './Home.css'


const Home = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => setData(data))

  }, []);

    return (
      
      <div className="Home">
       {data.map(element => (
      <p key={element.id}>{element.title}</p>
      ))}
        
      </div>
    );
  };
  
  export default Home;