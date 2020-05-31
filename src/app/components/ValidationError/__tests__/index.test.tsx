import React from 'react';
import { render } from '@testing-library/react';

import { ValidationError } from '..';

describe('<ValidationError  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<ValidationError />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
