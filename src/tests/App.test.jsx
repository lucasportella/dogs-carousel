/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
import RenderWithRouter from './RenderWithRouter';
import App from '../App';

test('renders learn react link', async () => {
  RenderWithRouter(<App />);
  const rawCarouselIntroTrext = screen.getByText(/Pure logical html carousel:/i);
  const dogCarouselLoadingText = screen.getByText(/Loading/i);
  expect(rawCarouselIntroTrext).toBeInTheDocument();
  expect(dogCarouselLoadingText).toBeInTheDocument();
  const allImages = await screen.findAllByRole('img');
  expect(allImages.length).toBe(6);
});
