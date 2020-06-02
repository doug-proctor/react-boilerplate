import React from 'react';
import { render } from '@testing-library/react';

import { Input } from '..';

describe('<Input  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Input />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
