import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Card, Container, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getData() {
    axios
      .get('https://api.sheety.co/fe65bf7a4482806c720a2b54fbc26ebb/database/users')
      .then(res => {
        setData(res.data.users);
        setLoading(false);
      })
      .catch(e => console.log(e));
  }

  useEffect(() => {
      document.title = 'Home | CliSystem'
    getData();
  }, []);

  const renderList = () => {
    return data.map(user => {
      return (
        <Row className='mb-2' key={user.uid}>
          <Link className='link' to={`details/${user.uid}`}>
            <Card bg='dark'>
              <Card.Title>
                {user.uid}-{user.nome}
              </Card.Title>
            </Card>
          </Link>
        </Row>
      );
    });
  };

  return (
    <Container>
      <h1 style={{ textAlign: 'center' }}>Controle de clientes</h1>
      <Link to={`register/${data.length + 1}`}>
        {' '}
        <Button className='my-4'>Novo Cliente</Button>{' '}
      </Link>
      <br />
      {loading ? <Spinner className='mx-4 my-4' animation='grow' variant='light' /> : renderList()}
    </Container>
  );
};
