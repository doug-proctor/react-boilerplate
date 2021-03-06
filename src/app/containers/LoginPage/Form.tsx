import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';

import config from 'utils/config';
import { request } from 'utils/request';

import { Input } from 'app/components/Input';
import { Button } from 'app/components/Button';
import { Spacer } from 'app/components/Spacer';
import { ValidationError } from 'app/components/ValidationError';

export default function Form(props) {
  return (
    <Formik
      initialValues={{
        email: 'hello@dougproctor.co.uk',
        password: 'dougwashere',
      }}
      onSubmit={async (values, { setErrors, setStatus }) => {
        const options = {
          method: 'post',
          body: JSON.stringify(values),
        };
        try {
          const user = await request(config.api.login, options);
          props.onLogin(user);
        } catch (error) {
          error.response?.json().then(data => {
            if (error.response.status === 404) {
              setStatus(data.message);
            } else {
              setErrors(data.errors);
            }
          });
        }
      }}
      validationSchema={Yup.object().shape({
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
            <Spacer mb={20}>
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
            </Spacer>
            <Spacer mb={20}>
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
            </Spacer>
            <Button primary submit disabled={isSubmitting}>
              Log in
            </Button>
          </form>
        );
      }}
    </Formik>
  );
}
