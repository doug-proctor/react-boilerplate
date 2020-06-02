import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';

import config from 'utils/config';
import { request } from 'utils/request';

import { Input } from 'app/components/Input';
import { Button } from 'app/components/Button';
import { FormLabel } from 'app/components/FormLabel';
import { FormGroup } from 'app/components/FormGroup';
import { ValidationError } from 'app/components/ValidationError';

export default function Form(props) {
  return (
    <Formik
      initialValues={{
        name: 'Doug',
        email: 'hello@dougproctor.co.uk',
        password: 'dougwashere',
      }}
      onSubmit={async (values, { setErrors, setStatus }) => {
        const options = {
          method: 'post',
          body: JSON.stringify(values),
        };
        try {
          const user = await request(config.api.register, options);
          props.onRegister(user);
        } catch (error) {
          error.response?.json().then(data => {
            if (error.response.status === 500) {
              setStatus(data.message);
            } else {
              setErrors(data.errors);
            }
          });
        }
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string().required('Your name is required'),
        email: Yup.string()
          .email('Oops, that doesn’t look like a valid email address')
          .required('Your email address is required'),
        password: Yup.string().required('Your password is required'),
      })}
    >
      {formProps => {
        const {
          values,
          errors,
          touched,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          status,
        } = formProps;
        return (
          <form onSubmit={handleSubmit}>
            <ValidationError>{status}</ValidationError>

            <FormGroup>
              <FormLabel htmlFor="name">Your name</FormLabel>
              <Input
                name="name"
                type="text"
                onBlur={handleBlur}
                value={values.name}
                onChange={handleChange}
                placeholder="Your name address..."
              />
              {errors.name && touched.name && (
                <ValidationError>{errors.name}</ValidationError>
              )}
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="email">Email address</FormLabel>
              <Input
                name="email"
                type="email"
                onBlur={handleBlur}
                value={values.email}
                onChange={handleChange}
                placeholder="Your email address..."
              />
              {errors.email && touched.email && (
                <ValidationError>{errors.email}</ValidationError>
              )}
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="name">Password</FormLabel>
              <Input
                name="password"
                type="password"
                onBlur={handleBlur}
                value={values.password}
                onChange={handleChange}
                placeholder="Your password..."
              />
              {errors.password && touched.password && (
                <ValidationError>{errors.password}</ValidationError>
              )}
            </FormGroup>
            <Button primary submit disabled={isSubmitting}>
              Register
            </Button>
          </form>
        );
      }}
    </Formik>
  );
}
