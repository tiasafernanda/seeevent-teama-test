import React from 'react';
import create from './assets/create-event.png';
import styles from './assets/create.module.scss';
import { Form } from 'react-bootstrap';

export default function CreateEvent() {
  return (
    <div className={styles.createEvent}>
      <img src={create} />
      <div className={styles.uploadButton}>
        {/* <input type='file' id='avatar' name='avatar' accept='image/png, image/jpeg' /> */}
        <Form.Group controlId='formFile' className='mb-3' width='230'>
          <Form.Control type='file' accept='image/png, image/jpeg' />
        </Form.Group>
      </div>
      <Form>
        <Form.Group className='mb-3' controlId='formGroupEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type='email' placeholder='Enter email' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formGroupPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Password' />
        </Form.Group>
      </Form> 
    </div>
  );
}
