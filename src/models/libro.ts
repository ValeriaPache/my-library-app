
export class Libro {
    /*primero defini las propiedades del libro*/
    titulo: string;
    autor: string;
    genero: string;
    idioma: string;
    precio: string;
    formato: string;
    isbn: string;
    descripcion: string;
    estado: string;
    ubicacion: string;
    fechaPublicacion: Date;
    editorial: string;
    paginas: number;
    dimensiones: string;
    peso: string;
    descuento: number;
/* El constructor toma todos estos valores como parámetros y los asigna a las propiedades correspondientes*/
    constructor(
        titulo: string,
        autor: string,
        genero: string,
        idioma: string,
        precio:string,
        formato: string,
        isbn: string,
        descripcion: string,
        estado: string,
        ubicacion: string,
        fechaPublicacion: Date,
        editorial: string,
        paginas: number,
        dimensiones: string,
        peso: string,
        descuento: number,
    )

    {
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.idioma = idioma;
        this.precio = precio;
        this.formato = formato;
        this.isbn = isbn;
        this.descripcion = descripcion;
        this.estado = estado;
        this.ubicacion = ubicacion;
        this.fechaPublicacion = fechaPublicacion;
        this.editorial = editorial;
        this.paginas = paginas;
        this.dimensiones = dimensiones;
        this.peso = peso;
        this.descuento =descuento;
    }
}