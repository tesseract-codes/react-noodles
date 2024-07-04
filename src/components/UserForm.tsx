
import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const UserForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    localStorage.setItem('user', JSON.stringify({ name, phone, email }));
    navigate('/second');
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <Typography variant="h4">User Details</Typography>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default UserForm;
