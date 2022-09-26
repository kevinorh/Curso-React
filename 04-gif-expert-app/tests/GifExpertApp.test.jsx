import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";


describe('Pruebas en <GifExpertApp/>', () => { 
    test('debe agregar una categoria', () => {
        const category = 'One Punch';

        render(<GifExpertApp/>)
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target : { value : category } });
        fireEvent.submit(form);

        expect(screen.getByText(category));
        
        screen.debug();
    });
    test('debe agregar una categoria solo si es nueva', () => {
        const category = 'One Punch';

        render(<GifExpertApp/>)
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target : { value : category } });
        fireEvent.submit(form);

        fireEvent.input(input, { target : { value : category } });
        fireEvent.submit(form);

        expect(screen.getByText(category));
        //Cuando encuentra multiple, la prueba falla

        // screen.debug();
    });
 });