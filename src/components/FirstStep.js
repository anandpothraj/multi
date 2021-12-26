import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

const FirstStep = (props) => {
  const { user } = props;
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      accountType: user.accountType,
      name: user.name,
      email: user.email,
      password: user.password,
    }
  });

  const onSubmit = (data) => {
    props.updateUser(data);
    props.history.push('/register/second');
  };

  return (
    <Form className="input-form" onSubmit={handleSubmit(onSubmit)}>
      <motion.div
        className="col-md-6 offset-md-3"
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ stiffness: 150 }}
      >
        {/* Input box for account Type */}
         <Form.Group controlId="accountType">
          <Form.Label>You Are ?</Form.Label>
            <select className="form-select" name="accountType" placeholder="Who are you ?" 
              ref={register({
                required: 'Account Type is required.',
                pattern: {
                  message: 'Choose the Account Type.'
                }
              })}
            // className={`${errors.accountType ? 'input-error' : ''}`}
            >
              <option>--select--</option>
              <option>Admin</option>
              <option>Patient</option>
              <option>Doctor</option>
          </select>
          {/* <Form.Control/> */}
          {errors.accountType && (
            <p className="errorMsg">{errors.accountType.message}</p>
          )}
        </Form.Group>

        {/* Input box for full name */}
        <Form.Group controlId="name">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter your full name"
            autoComplete="off"
            ref={register({
              required: 'Full name is required.',
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: 'Full name should contain only characters.'
              }
            })}
            className={`${errors.name ? 'input-error' : ''}`}
          />
          {errors.name && (
            <p className="errorMsg">{errors.name.message}</p>
          )}
        </Form.Group>

        {/* Input box for email  */}
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter your email address"
            autoComplete="off"
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

        {/* Input box for password  */}
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Create New Password"
            autoComplete="off"
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
          Next
        </Button>
      </motion.div>
    </Form>
  );
};

export default FirstStep;
