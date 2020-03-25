export class Post {
  id: string;
  titulo: string;
  autor: string;
  imagen: string;
  categoria: string;
  fecha: string;
  texto: string;

  constructor(
    pTitulo: string,
    pAutor: string,
    pImagen: string,
    pCategoria: string,
    pFecha: string,
    pTexto: string
  ) {
    this.titulo = pTitulo;
    this.autor = pAutor;
    this.imagen = pImagen;
    this.categoria = pCategoria;
    this.fecha = pFecha;
    this.texto = pTexto;
  }
}
