import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const Login = () => {
  const { register, handleSubmit, errors } = useForm();
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [userDetails, setUserDetails] = useState('');

  const onSubmit = async (data) => {
    console.log(data);

    try {
      const response = await axios.post('/login', data);
      setSuccessMessage('User with the provided credentials found.');
      setErrorMessage('');
      setUserDetails(response.data);
      console.log("Login successful");
    } catch (error) {
      console.log(error);
      if (error.response) {
        console.log('error', error.response.data);
        setErrorMessage(error.response.data);
      }
    }
  };

  return (
    <Form className="input-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="col-md-6 offset-md-3">
        {errorMessage ? (
          <p className="errorMsg login-error">{errorMessage}</p>
        ) : (
          <div>
            <p className="successMsg">{successMessage}</p>

            {userDetails && (
              <div className="user-details">
                <p>Following are the user details:</p>
                <div>Account Type: {userDetails.accountType}</div>
                <div>Full name: {userDetails.name}</div>
                <div>Email: {userDetails.email}</div>
                <div>phone: {userDetails.phone}</div>
                <div>Age: {userDetails.age}</div>
                <div>Date of Birth: {userDetails.dob}</div>
                <div>Gender: {userDetails.gender}</div>
                <div>Aadhaar Number: {userDetails.aadhaar}</div>
              </div>
            )}
          </div>
        )}
        <Form.Group controlId="first_name">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter your email address"
            ref={register({
              required: 'Email is required.',
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: 'Email is not valid.'
              }
            })}
            className={`${errors.email ? 'input-error' : ''}`}
          />
          {errors.email && (
            <p className="errorMsg">{errors.email.message}</p>
          )}
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Enter password"
            ref={register({
              required: 'Password is required.',
              minLength: {
                value: 6,
                message: 'Password should have at-least 6 characters.'
              }
            })}
            className={`${errors.password ? 'input-error' : ''}`}
          />
          {errors.password && (
            <p className="errorMsg">{errors.password.message}</p>
          )}
        </Form.Group>

        <Button variant="primary" type="submit">
          Check Login
        </Button>
      </div>
    </Form>
  );
};

export default Login;
