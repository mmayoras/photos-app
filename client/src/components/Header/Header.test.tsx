import { render, screen } from '@testing-library/react';

import Header from './Header';
import { SUBHEADER_TEXT } from '../../constants/appConstants';

test('renders header subheading', () => {
  render(<Header inputValue={''} setInputValue={jest.fn()} />);

  const subheaderElement = screen.getByText(SUBHEADER_TEXT);

  expect(subheaderElement).toBeInTheDocument();
});
