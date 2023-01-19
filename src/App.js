import logo from './logo.svg';
import './App.css';
import { Button, Card, Col, Row, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import News from './component/News/News';

  // const c = [];
  // const number = c.length ===0 ? 5: 10;



function App() {
  const [news, setNews] = useState([]);
  useEffect( () => {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2022-11-30&sortBy=publishedAt&apiKey=51aea196890c46359cebf89fc9ccea67')
    .then(res => res.json())
    .then(data => setNews(data.articles))
  }, [])


  return (
    <div className="App">
      {/* <Button variant='outline-success'>Hello World</Button>
      <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner> */}

    {news.length ===0 ? 
    <Spinner animation="grow" /> 
    :
    <Row xs={1} md={3} className="g-4">
      {
        news.map(nw => <News
         news={nw}
        ></News>)
      }
    </Row>
    }




    </div>
  );
}

export default App;
