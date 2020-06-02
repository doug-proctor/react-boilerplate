import React from 'react';
import { render } from '@testing-library/react';

import { FormLabel } from '..';

describe('<FormLabel  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<FormLabel htmlFor="blah">blah</FormLabel>);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
