import axios from 'axios';
import { useRef, useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Spinner } from 'react-bootstrap';
import { Link, useParams, useNavigate} from 'react-router-dom';

export const Register = () => {
  const { newuid } = useParams();
  const navigate = useNavigate();

  const addressRef = useRef('');
  const nameRef = useRef('');
  const emailRef = useRef('');
  const [loading, setLoading]= useState(false)

  const setNew = () => {
    const options = {
      method: 'POST',
      url: 'https://api.sheety.co/fe65bf7a4482806c720a2b54fbc26ebb/database/users',
      data: {
        user: {
          address: addressRef.current.value,
          nome: nameRef.current.value,
          uid: newuid,
        },
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setLoading(false)
        alert('Novo cliente criado com sucesso.')
        navigate('/')
      })
      .catch(function (error) {
        console.error(error);
      })
  };

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true)
    setNew();
  };

  useEffect(() => {
    document.title = 'Registro | CliSystem'
  }, [])

  return (
    <Container>
      <h1 className='mb-4'>Cadastro de cliente:</h1>
      <Row className='d-flex' style={{ justifyContent: 'flex-end' }}>
        <Link style={{ width: '100px' }} to={'/'}>
          <Button>Voltar</Button>
        </Link>
      </Row>
      <Form onSubmit={handleSubmit}>
        <Row className='mb-3'>
          <Form.Group as={Col} controlId='formGridPassword'>
            <Form.Label>Nome</Form.Label>
            <Form.Control ref={nameRef} type='text' placeholder='Nome...' required/>
          </Form.Group>

          <Form.Group as={Col} controlId='formGridEmail'>
            <Form.Label>Email</Form.Label>
            <Form.Control ref={emailRef} type='email' placeholder='Email...' />
          </Form.Group>
        </Row>

        <Form.Group className='mb-3' controlId='formGridAddress1'>
          <Form.Label>Endereço</Form.Label>
          <Form.Control ref={addressRef} placeholder='Cidade, UF' required />
        </Form.Group>
        <Row className='d-flex' style={{ justifyContent: 'center' }}>
          {loading ?  <Button variant="primary" disabled style={{width:'100px'}}>
    <Spinner
      as="span"
      animation="border"
      size="sm"
      role="status"
      aria-hidden="true"
      
    />
    <span className="visually-hidden">Loading...</span>
  </Button> : <Button variant='primary' type='submit' style={{ width: '100px' }}>
            Submit
          </Button>}
          
        </Row>
       
      </Form>
    </Container>
  );
};
