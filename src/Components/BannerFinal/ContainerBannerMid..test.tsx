import React from 'react';
import { render, screen } from '@testing-library/react';
import BannerFinal from '../BannerFinal';

const loveyourWay = {
  "imagedesktop": "https://media.tiffany.com/is/image/tiffanydm/2023_GW-HP-FWMH-Desktop?$tile$&wid=2992&fmt=webp",
  "imagemobile": "https://media.tiffany.com/is/image/tiffanydm/2023_GW-HP-FWMH-Mobile?$tile$&wid=720&fmt=webp",
};

test('verifica se o primeiro texto está sendo renderizado', () => {
  render(
    <BannerFinal
      icon={true}
      flexDirection="flex-end"
      url={loveyourWay}
      className="example"
      title="example"
      description="example descript"
      textLink="example"
      Link="/example"
    />
  );
  const textElement = screen.getByText(/example descript/i);
  expect(textElement).toBeInTheDocument();
});

test('verifica se o link contém o atributo href', () => {
  render(
    <BannerFinal
      icon={true}
      flexDirection="flex-end"
      url={loveyourWay}
      className="example"
      title="example"
      description="example descript"
      textLink="example"
      Link="/example"
    />
  );
  const linkElement = screen.getByText(/example/i);
  expect(linkElement).toHaveAttribute('href', '/example');
});


test('verifica se o título está sendo renderizado corretamente', () => {
  render(
    <BannerFinal
      icon={true}
      flexDirection="flex-end"
      url={loveyourWay}
      className="example"
      title="Example Title"
      description="Example Description"
      textLink="Example Link"
      Link="/example"
    />
  );
  const titleElement = screen.getByText(/Example Title/i);
  expect(titleElement).toBeInTheDocument();
});

test('verifica se a imagem está sendo renderizada corretamente', () => {
  render(
    <BannerFinal
      icon={true}
      flexDirection="flex-end"
      url={loveyourWay}
      className="example"
      title="Example Title"
      description="Example Description"
      textLink="Example Link"
      Link="/example"
    />
  );
  const imageElement = screen.getByRole('img');
  expect(imageElement).toBeInTheDocument();
  expect(imageElement).toHaveAttribute('src', loveyourWay.imagemobile);
});
