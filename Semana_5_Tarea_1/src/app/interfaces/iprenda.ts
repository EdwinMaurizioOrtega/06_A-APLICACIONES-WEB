export interface IPrenda {
  id_prenda?: number;
  id_usuario: number;
  titulo: string;
  descripcion?: string;
  categoria?: string;
  marca?: string;
  talla?: string;
  color?: string;
  estado_prenda?: string;
  tipo_publicacion?: string;
  precio?: number;
  disponible?: boolean;
  ciudad?: string;
  sector?: string;
  latitud?: number;
  longitud?: number;
  fecha_publicacion?: string;
  estado_publicacion?: string;
}
