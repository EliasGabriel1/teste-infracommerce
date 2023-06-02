import React from 'react';
import { render, screen } from '@testing-library/react';
import BannerVideo from '../BannerVideo';

test('ve se ta carregando o primeiro texto', () => {
    render(<BannerVideo />);
    const linkElement = screen.getByText(/This Is Tiffany HardWear/i);
    expect(linkElement).toBeInTheDocument();
  });
  
  test('ve se ta carregando o segundo texto', () => {
    render(<BannerVideo />);
    const linkElement = screen.getByText(/Shop the Collection/i);
    expect(linkElement).toBeInTheDocument();
  });
  