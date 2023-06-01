import React from 'react';
import { render, screen } from '@testing-library/react';
import Shelf from '../Shelf';

const data:any= {}

test('renders learn react link', () => {
    render(<Shelf data={data} loading={false} error={true} quantidadeItemMobile={2} quantidadeItem={4} text="teste"/>);
    const linkElement = screen.getByText(/teste/i);
    expect(linkElement).toBeInTheDocument();
});
