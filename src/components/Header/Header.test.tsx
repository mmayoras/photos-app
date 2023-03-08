import { render, screen } from '@testing-library/react';

import Header from './Header';
import { subHeaderText } from '../../constants/appConstants';

test('renders header subheading', () => {
  render(<Header inputValue={''} setInputValue={jest.fn()} />);

  const subheaderElement = screen.getByText(subHeaderText);

  expect(subheaderElement).toBeInTheDocument();
});
