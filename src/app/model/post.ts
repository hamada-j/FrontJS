export class Post {
  id: string;
  autorId: string;
  titulo: string;
  autor: string;
  imagen: string;
  categoria: string;
  fecha: string;
  texto: string;

  constructor(
    pAutorId: string,
    pTitulo: string,
    pAutor: string,
    pImagen: string,
    pCategoria: string,
    pFecha: string,
    pTexto: string
  ) {
    this.autorId = pAutorId;
    this.titulo = pTitulo;
    this.autor = pAutor;
    this.imagen = pImagen;
    this.categoria = pCategoria;
    this.fecha = pFecha;
    this.texto = pTexto;
  }
}
export class PostEdit {
  id: string;
  autorId: string;
  titulo: string;
  autor: string;
  imagen: string;
  categoria: string;
  fecha: string;
  texto: string;

  constructor(
    pid: string,
    pAutorId: string,
    pTitulo: string,
    pAutor: string,
    pImagen: string,
    pCategoria: string,
    pFecha: string,
    pTexto: string
  ) {
    this.id = pid;
    this.autorId = pAutorId;
    this.titulo = pTitulo;
    this.autor = pAutor;
    this.imagen = pImagen;
    this.categoria = pCategoria;
    this.fecha = pFecha;
    this.texto = pTexto;
  }
}
