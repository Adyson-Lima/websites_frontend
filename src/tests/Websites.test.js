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

  it('Existe link Novo em Websites?', () => {
    expect(screen.getByTestId('mylink')).toBeInTheDocument();
  });

  it('Existe tabela em Websites?', () => {
    expect(screen.getByTestId('mytable')).toBeInTheDocument();
  });

  it('Existe botão editar em Websites?', () => {
    expect(screen.getByTestId('mybtn1')).toBeInTheDocument();
  });

  it('Existe botão excluir em Websites?', () => {
    expect(screen.getByTestId('mybtn2')).toBeInTheDocument();
  });

});