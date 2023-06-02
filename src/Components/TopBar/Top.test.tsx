import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TopBar from '../TopBar';

test('Verifica se a topbar é exibida inicialmente', () => {
  render(<TopBar />);
  const topbarElement = screen.getByTestId('topbar');
  expect(topbarElement).toBeInTheDocument();
});

test('Verifica se a topbar é ocultada ao clicar no botão de fechar', () => {
  render(<TopBar />);
  const closeButton = screen.getByText('X');
  fireEvent.click(closeButton);
  const topbarElement = screen.queryByTestId('topbar');
  expect(topbarElement).not.toBeInTheDocument();
});
