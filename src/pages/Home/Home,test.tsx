import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '.';

test('ve se ta carregando o componente de CarrosselBanner do shopby', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Shop by Category/i);
  expect(linkElement).toBeInTheDocument();
});

test('ve se ta carregando o componente de BannerFinal loveyouway', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Love Your Way/i);
  expect(linkElement).toBeInTheDocument();
});
