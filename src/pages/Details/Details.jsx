import axios from 'axios';
import { useState, useEffect } from 'react';
import { Container, Table, Button, Spinner } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';

export const Details = () => {
  const { uid } = useParams();
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getData() {
    axios
      .get('https://api.sheety.co/fe65bf7a4482806c720a2b54fbc26ebb/database/sells')
      .then(res => {
        setUserData(res.data.sells.filter(item => item.uid == uid));
        setLoading(false);
      })
      .catch(e => console.log(e));
  }

  useEffect(() => {
    document.title = `Detalhes | CliSystem`
    getData();
  }, []);

  const renderDetails = () => {
    return userData.map(item => (
      <tr>
        <td>{item.product}</td>
        <td>{item.purchaseData}</td>
        <td>{item.value}</td>
        <td>{item.parcelas}</td>
        <td>{item.status}</td>
      </tr>
    ));
  };

  return (
    <Container>
      <Link className='link-btn' to={'/'}>
        <Button className='my-3'>Voltar</Button>
      </Link>
      <Table striped bordered hover variant='dark'>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Data de compra</th>
            <th>Valor</th>
            <th>Parcelas</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <Spinner className='mx-4 my-4' animation='grow' variant='light' />
          ) : (
            renderDetails()
          )}
        </tbody>
      </Table>
    </Container>
  );
};
