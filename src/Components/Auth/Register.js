import React from 'react';
import register from '../../images/register.jpg';
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import useAuth from './../Hooks/useAuth';
import Login from './Login';
const Register = () => {
  window.scroll(0, 0);
  const { loginShow, setLoginModalShow } = useAuth();
  return (
    <div className="py-5">
      <Login show={loginShow} onHide={() => setLoginModalShow(false)} />
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img className="w-100" src={register} alt="" />
          </div>
          <div className="col-lg-6">
            <p className="text-muted pb-4 text-uppercase">
              Let's check it out, it's free
            </p>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicname">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Your Name"
                  name="name"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <p className="text-muted">
                Already user ?{' '}
                <span
                  style={{ cursor: 'pointer', color: 'blue' }}
                  onClick={() => setLoginModalShow(true)}
                >
                  Login
                </span>
              </p>
              <Button className="mt-3" variant="danger" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
