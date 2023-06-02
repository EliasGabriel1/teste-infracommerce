import React from 'react';
import { render, screen } from '@testing-library/react';
import ContainerBannerMid from '../ContainerBannerMid';

test('ve se ta carregando o primeiro texto', () => {
    render(<ContainerBannerMid />);
    const linkElement = screen.getByText(/Now Open: The Landmark/i);
    expect(linkElement).toBeInTheDocument();
  });
  
  test('ve se ta carregando o segundo texto', () => {
    render(<ContainerBannerMid />);
    const linkElement = screen.getByText(/ Learn More/i);
    expect(linkElement).toBeInTheDocument();
  });
  