import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

function RenderWithRouter(component) {
  return ({
    ...render(
      <MemoryRouter>
        {component}
      </MemoryRouter>,
    ),
  });
}

export default RenderWithRouter;
