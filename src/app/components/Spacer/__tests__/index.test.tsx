import React from 'react';
import { render } from '@testing-library/react';

import { Spacer } from '..';

describe('<Spacer  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Spacer />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
