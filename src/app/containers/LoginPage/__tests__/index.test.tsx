import React from 'react';
import { render } from '@testing-library/react';

import { LoginPage } from '../index';

describe('<LoginPage  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<LoginPage />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
