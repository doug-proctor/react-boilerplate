import React from 'react';
import { render } from '@testing-library/react';

import { FormGroup } from '..';

describe('<FormGroup  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<FormGroup>blah</FormGroup>);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
