import {Libreria} from './models/libreria';
import {Libro} from './models/libro';
import {Menu} from './models/menu';

// Creación de algunos libros de ejemplo
const libro1 = new Libro("El Quijote", "Miguel de Cervantes", "Ficcion", "Español", "55.000", "Tapa dura", "978-3-16-148410-0", "Un clásico de literatura", "Nuevo", "Madrid", new Date("1905-01-16"), "Editorial Clasicos", 1072, "15x4x23cm", "1 Kg",10);
const libro2 = new Libro("La Odisea", "Homero", "Epica", "Griego", "70.000", "Tapa dura", "978-0-14-026886-7", "Una epopeya de aventuras", "Nuevo", "Atenas", new Date("-800-01-01"), "ditorial Clasicos", 541, "15x3x23cm", "0.7 Kg",20);
const libro3 = new Libro ("Cien Años de Soledad", "Gabriel García Márquez", "Ficción", "Español", "20.000", "Tapa blanda", "978-0-14-310713-0", "La historia de la familia Buendía.", "Nuevo", "Bogotá", new Date("1967-05-30"), "Editorial Sudamericana", 417, "13x2.5x20 cm", "0.5 kg",5);
const libro4 = new Libro ("Don Juan Tenorio", "José Zorrilla", "Drama", "Español", "25.000", "Tapa blanda", "978-84-376-0494-7", "Una obra de teatro clásica.", "Usado", "Barcelona", new Date("1844-03-28"), "Editorial Castalia", 240, "12x1.8x19 cm", "0.3 kg",40);
// Creación de la librería y añadiendo los libros
const libreria = new Libreria();
libreria.mostrarLibros();
libreria.añadirLibro(libro1);
libreria.añadirLibro(libro2);
libreria.añadirLibro(libro3);
libreria.añadirLibro(libro4);
//libreria.quitarLibro("978-0-14-026886-7");
//libreria.ordenarLibrosPorPrecioMayor();


// Creación del menú
const menu = new Menu(libreria);

// Ejemplo de uso del menú
menu.mostrarMenu();
menu.ejecutar(1);   // Muestra los libros
//menu.ejecutar(2);   // Añade Libro
//menu.ejecutar(3);   // Quitar libro
//menu.ejecutar(4);   // Muestra la longitud de la librería
//menu.ejecutar(5);   // Muestra Libros Con descuento
//menu.ejecutar(6);   // Muestra los de precio mayor
//menu.ejecutar(7);   // Muestra libro por titulo
//menu.ejecutar(8);   // Muestra libro por Autor
//menu.ejecutar(9);   // Muestra libro por Fecha De Publicación
//menu.ejecutar(10);  //  Muestra libro por genero
menu.ejecutar(11);  // Mostrar por libro por idioma