import { useDispatch, useSelector } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { useUpdateMutation } from '../slices/userApiSlices';
import FormContainer from '../Components/FormContainer';
import { setCredentials } from '../slices/authSlices';
import Loader from '../Components/Loader';

const ProfileScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userInfo } = useSelector((state) => state.auth);

  const [update, { isLoading }] = useUpdateMutation();


  const submitHandler = async (e) => {
    e.preventDefault();
    if (confirmPassword !== password) {
      toast.error("Les mots de passe ne correspondent pas !!")
      navigate('/profile');
    } else {
      try {
        const res = await update({
          _id: userInfo._id,
          name,
          email,
          password
        }).unwrap();
        dispatch(setCredentials({ ...res }));
        toast.success('Votre profil a été correctement mis à jour');
        navigate('/profile');
      } catch (err) {
        toast.error(err?.data?.message || err.error)
      }
    }
  }

  useEffect(() => {
    setName(userInfo.name)
    setEmail(userInfo.email)
  }, [userInfo.name, userInfo.email]);

  return (
    <FormContainer>
      <h1>Update profile</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className='my-2' controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className='my-2' controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className='my-2' controlId='password'>
          <Form.Label>New Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className='my-2' controlId='confirmPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Confirm password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        {isLoading && <Loader />}

        <Button type='submit' variant='primary' className='mt-3'>
          Submit
        </Button>
      </Form>

    </FormContainer>
  );
};

export default ProfileScreen;
