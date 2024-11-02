import { fireEvent, render, screen } from '@testing-library/react';
import PostComments from '../PostComments';

describe('Teste para o componente PostComments', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComments />);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve permitir a inserção de dois comentários', () => {
        render(<PostComments />);

        // Localiza o campo de entrada e o botão
        const input = screen.getByTestId('comment-input');
        const addButton = screen.getByTestId('add-comment-button');

        // Insere o primeiro comentário
        fireEvent.change(input, { target: { value: 'Primeiro comentário' } });
        fireEvent.click(addButton);

        // Verifica o primeiro comentário
        expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();

        // Insere o segundo comentário
        fireEvent.change(input, { target: { value: 'Segundo comentário' } });
        fireEvent.click(addButton);

        // Verifica o segundo comentário
        expect(screen.getByText('Segundo comentário')).toBeInTheDocument();
    });
});
