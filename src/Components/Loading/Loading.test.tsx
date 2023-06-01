import React from 'react';
import { render, screen } from '@testing-library/react';
import Loading from '../Loading';

test('renders learn react link', () => {
  render(<Loading />);
  const linkElement = screen.getByText(/teste render/i);
  expect(linkElement).toBeInTheDocument();
});
