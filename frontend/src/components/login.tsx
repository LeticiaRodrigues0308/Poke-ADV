import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();

const handleSubmit = async (values: { email: string; password: string }) => {
    try {
      const response = await axios.post('http://localhost:5000/auth/login', values);
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard');
    } catch (err) {
      alert('Falha ao entrar');
    }
  };

return (
    <div>
      <h2>Entrar</h2>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label>Email</label>
            <Field type="email" name="email" required />
          </div>
          <div>
            <label>Senha</label>
            <Field type="password" name="password" required />
          </div>
          <button type="submit">Entrar</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;