import {Libreria} from './libreria';
import {Libro} from './libro';

export class Menu{
    libreria: Libreria;

    constructor(libreria: Libreria) {
        this.libreria = libreria;
    }

    mostrarMenu(): void {
        console.log("1. Mostrar libros");
        console.log("2. Añadir libro");
        console.log("3. Quitar libro");
        console.log("4. Mostrar longitud");
        console.log("5. Obtener libros con descuento");
        console.log("6. Ordenar libros por precio mayor");
        console.log("7. Buscar libros por título");
        console.log("8. Buscar libros por autor");
        console.log("9. Buscar libros por fecha de publicación");
        console.log("10. Buscar libros por género");
        console.log("11. Buscar libros por idioma");
        console.log("0. Salir");
    }

    ejecutar(opcion: number): void {
        switch (opcion) {
            case 1:
                this.libreria.mostrarLibros();
                break;
            case 2:
                const nuevoLibro = new Libro("Nuevo Título", "Nuevo Autor", "Género", "Idioma", "Precio", "Formato", "ISBN", "Descripción", "Estado", "Ubicación", new Date(), "Editorial", 300, "15x20", "500g",20);
                this.libreria.añadirLibro(nuevoLibro);
                break;
            case 3:
                this.libreria.quitarLibro("978-0-14-026886-7");
                break;
            case 4:
                console.log("Número de libros en la librería:", this.libreria.mostrarLongitud());
                break;
            case 5:
                const librosConDescuento = this.libreria.obtenerLibrosConDescuento(5);
                console.log("Libros con descuento:", librosConDescuento);
                break;
            case 6:
                console.log("Libros ordenados por precio mayor:");
                console.log(this.libreria.ordenarLibrosPorPrecioMayor());
                break;
            case 7:
                const librosPorTitulo = this.libreria.buscarLibrosPorTitulo("El Quijote");
                console.log("Libros encontrados por título:", librosPorTitulo);
                break;
            case 8:
                const librosPorAutor = this.libreria.buscarLibrosPorAutor("Homero");
                console.log("Libros encontrados por autor:", librosPorAutor);
                break;
            case 9:
                const librosPorFecha = this.libreria.buscarLibrosPorFechaDePublicacion(new Date("1844-03-28"));
                console.log("Libros encontrados por fecha de publicación:", librosPorFecha);
                break;
            case 10:
                const librosPorGenero = this.libreria.buscarLibrosPorGenero("Ficción");
                console.log("Libros encontrados por género:", librosPorGenero);
                break;
            case 11:
                const librosPorIdioma = this.libreria.buscarLibrosPorIdioma("Español");
                console.log("Libros encontrados por idioma:", librosPorIdioma);
                break;
            case 0:
                console.log("Saliendo del menú...");
                break;
            default:
                console.log("Opción no válida");
                break;
        }
    }
}