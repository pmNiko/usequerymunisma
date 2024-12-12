import { Mode } from '../../interfaces';

export interface RequestHttp<G> {
  extraHeaders?: { [key: string]: string };
  fn: string;
  parametros?: G;
  mode?: Mode;
}
