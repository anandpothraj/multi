import React , { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';
import axios from 'axios';
// import { useForm } from 'react-hook-form';
// import { BASE_API_URL } from '../utils/constants';

const ThirdStep = (props) => {
  const [dob, setDob ] = useState("");
  const [gender, setGender ] = useState("male");
  const [aadhaar, setAadhaar ] = useState("");



  // const { user } = props;
  // const { register, handleSubmit, errors } = useForm({
  //   defaultValues: {
  //     dob: user.dob,
  //     gender: user.gender,
  //     aadhaar: user.aadhaar, 
  //   }
  // });


  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const user  = { props } ;
      const  presentData  = { 
        dob:dob,
        gender:gender,
        aadhaar:aadhaar
       };

      // const result = {...user,...presentData};
      console.log(user);
      console.log(presentData);

      const config = {
        headers: {
            "Content-type" : "application/json",
        },
      };

      const { registerReq } = await axios.post(
          "/register/third",
          { ...user, presentData},
          config
      );

      console.log(registerReq);

      Swal.fire('Awesome!', "You're successfully registered!", 'success').then(
        (result) => {
          if (result.isConfirmed || result.isDismissed) {
            props.resetUser();
            props.history.push('/');
          }
        }
      );
    } catch (error) {
      if (error.response) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data
        });
        console.log('error', error.response.data);
      }
    }
  };

  return (
    <Form className="input-form"  onSubmit={handleSubmit}>
      <motion.div
        className="col-md-6 offset-md-3"
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ stiffness: 150 }}
      >
        {/* Input box for dob */}
        <Form.Group controlId="dob">
          <Form.Label>Date Of Birth</Form.Label>
          <Form.Control
            type="date"
            name="dob"
            placeholder="Enter your Date of birth"
            value={dob}
            onChange={(event) => setDob(event.target.value)}
            // autoComplete="off"
            // ref={register({
            //   required: 'Date of birth is required.',
            //   minLength: {
            //     message: 'plz select the date of birth .'
            //   }
            // })}
            // className={`${errors.dob ? 'input-error' : ''}`}
          />
          {/* {errors.dob && (
            <p className="errorMsg">{errors.dob.message}</p>
          )} */}
        </Form.Group>

        {/* Input box for gender */}
        <Form.Group controlId="gender">
          <Form.Label>Gender</Form.Label>
            <select className="form-select" name="gender" placeholder="Select your gender" value={gender}
            onChange={(event) => setGender(event.target.value)}
              // ref={register({
              //   required: 'Gender type is required.',
              //   pattern: {
              //     message: 'Choose the gender Type.'
              //   }
              // })}
            // className={`${errors.accountType ? 'input-error' : ''}`}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
          </select>
          {/* <Form.Control/> */}
          {/* {errors.gender && (
            <p className="errorMsg">{errors.gender.message}</p>
          )} */}
        </Form.Group>

        {/* Input box for aadhaar number  */}
        <Form.Group controlId="aadhaar">
          <Form.Label>Aadhaar Number</Form.Label>
          <Form.Control
            type="number"
            name="aadhaar"
            placeholder="Enter your aadhaar number"
            value={aadhaar}
            onChange={(event) => setAadhaar(event.target.value)}
            // autoComplete="off"
            // ref={register({
            //   required: 'aadhaar number is required.',
            //   minLength: {
            //     value: 12,
            //     message: 'Aadhaar number should have only 12 digit number.'
            //   }
            // })}
            // className={`${errors.aadhaar ? 'input-error' : ''}`}
          />
          {/* {errors.aadhaar && (
            <p className="errorMsg">{errors.aadhaar.message}</p>
          )} */}
        </Form.Group>
       
        <Button variant="primary" type="submit" >
          Register
        </Button>
      </motion.div>
    </Form>
  );
};

export default ThirdStep;

