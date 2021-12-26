import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

const SecondStep = (props) => {
  const { user } = props;
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      phone: user.phone,
      secretCode: user.secretCode,
      age: user.age,
    }
  });

  const onSubmit = (data) => {
    props.updateUser(data);
    props.history.push('/register/third');
  };

  return (
    <Form className="input-form" onSubmit={handleSubmit(onSubmit)}>
      <motion.div
        className="col-md-6 offset-md-3"
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ stiffness: 150 }}
      >
        
      {/* Input box for phone number  */}
        <Form.Group controlId="phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="number"
            name="phone"
            placeholder="Enter your phone number"
            autoComplete="off"
            ref={register({
              required: 'Phone number is required.',
              minLength: {
                value: 10,
                message: 'Phone number should have only 10 digit number.'
              }
            })}
            className={`${errors.phone ? 'input-error' : ''}`}
          />
          {errors.phone && (
            <p className="errorMsg">{errors.phone.message}</p>
          )}
        </Form.Group>

      {/* Input box for secretCode  */}
        <Form.Group controlId="secretCode">
          <Form.Label>Secret Code</Form.Label>
          <Form.Control
            type="number"
            name="secretCode"
            placeholder="Create Four Digit Secret Code"
            autoComplete="off"
            ref={register({
              required: 'Secret Code is required.',
              minLength: {
                value: 4,
                message: 'Password should have only 4 digit number.'
              }
            })}
            className={`${errors.secretCode ? 'input-error' : ''}`}
          />
          {errors.secretCode && (
            <p className="errorMsg">{errors.secretCode.message}</p>
          )}
        </Form.Group>

      {/* Input box for age  */}
        <Form.Group controlId="age">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            name="age"
            placeholder="Enter your age"
            autoComplete="off"
            ref={register({
              required: 'Age is required.',
              minLength: {
                value: 2,
                message: 'Age should have only 2 digit .'
              }
            })}
            className={`${errors.age ? 'input-error' : ''}`}
          />
          {errors.age && (
            <p className="errorMsg">{errors.age.message}</p>
          )}
        </Form.Group>

        <Button variant="primary" type="submit">
          Next
        </Button>
      </motion.div>
    </Form>
  );
};

export default SecondStep;
