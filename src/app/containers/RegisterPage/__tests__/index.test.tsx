import React from 'react';
import { render } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';

import { RegisterPage } from '..';

const renderComponent = () =>
  render(
    <HelmetProvider>
      <RegisterPage />
    </HelmetProvider>,
  );

describe('<RegisterPage />', () => {
  it('should match the snapshot', () => {
    const component = renderComponent();
    expect(component.container.firstChild).toMatchSnapshot();
  });
});
