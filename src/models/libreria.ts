
import {Libro} from './libro';

export class Libreria{
    private libros: Libro [] = [];

    mostrarLibros(): void {
        console.log(this.libros);
    }
    añadirLibro(libro: Libro): void{
        this.libros.push(libro);
        console.log(`Libro'${libro.titulo}'agregada a la pila`)
    }
    quitarLibro(isbn: string): void {
        this.libros = this.libros.filter(libro => libro.isbn !== isbn);
        console.log(`Libro con ISBN '${isbn}' quitado de la librería.`);
    }
    mostrarLongitud(): number {
        return this.libros.length;
    }
    obtenerLibrosConDescuento(descuento: number): Libro[] {
        return this.libros.filter(libro => parseFloat(libro.precio) < descuento);
    }

    ordenarLibrosPorPrecioMayor(): Libro[] {
        return this.libros.sort((a, b) => parseFloat(b.precio) - parseFloat(a.precio));
    }

    buscarLibrosPorTitulo(titulo: string): Libro[] {
        return this.libros.filter(libro => libro.titulo.includes(titulo));
    }
    buscarLibrosPorAutor(autor: string): Libro[] {
        return this.libros.filter(libro => libro.autor.includes(autor));
    }

    buscarLibrosPorFechaDePublicacion(fecha: Date): Libro[] {
        return this.libros.filter(libro => libro.fechaPublicacion === fecha);
    }

    buscarLibrosPorGenero(genero: string): Libro[] {
        return this.libros.filter(libro => libro.genero.includes(genero));
    }

    buscarLibrosPorIdioma(idioma: string): Libro[] {
        return this.libros.filter(libro => libro.idioma.includes(idioma));
    }
}
