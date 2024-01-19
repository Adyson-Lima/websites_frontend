import {render, screen} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Websites from '../pages/Websites';

describe('Testes da tela Websites', () => {

  beforeEach(() => {
    render(
      <BrowserRouter>
        <Websites/>
      </BrowserRouter>
    );
  });

  it('Existe card em Websites?', () => {
    expect(screen.getByTestId('mycard')).toBeInTheDocument();
  });

});