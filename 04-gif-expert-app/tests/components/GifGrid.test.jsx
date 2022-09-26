import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGIfs";

jest.mock("../../src/hooks/useFetchGIfs");

describe("Pruebas en <GifGrid/>", () => {
  const category = "One Punch";

  test("debe de mostrar el loading inicialmente", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);
    // screen.debug();
    expect(screen.getByText("Cargando.."));
    expect(screen.getByText(category));
  });

  test("debe de mostrar items cuando se cargan las imágenes useFetchGifs", () => {
    //DATA DE PRUEBA
    const gifs = [
        {
            id: 'ABC',
            title: 'Goku',
            url:'https://abc.com/imgae.jpg'
        },
        {
            id: '123',
            title: 'Fio',
            url:'https://abc.com/imgaen.jpg'
        },
    ];
    //RETORNAR IMAGENES DE PRUEBA E ISLOADING FALSE
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });
    render(<GifGrid category={category} />);
    // screen.debug()
    expect(screen.getAllByRole('img').length).toBe(2)
  });
});
