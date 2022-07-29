import React, { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = (props) => {
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const changeHandler = (e) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    axios
      .post('https://api.bestaid.com.bd/api/login', data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Form className="p-5" onSubmit={handlerSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <input type="hidden" name="_token" value="{{ csrf_token() }}"></input>
          <meta name="csrf-token" content="{{ csrf_token() }}" />
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={changeHandler}
            type="email"
            name="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={changeHandler}
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        <p className="text-muted">
          New user ?{' '}
          <Link to="/register" onClick={props.onHide} style={{ color: 'blue' }}>
            create new account
          </Link>
        </p>
        <Button className="mt-3" variant="danger" type="submit">
          Submit
        </Button>
      </Form>
    </Modal>
  );
};

export default Login;
