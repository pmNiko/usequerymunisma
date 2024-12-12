export enum CodeEstateResponse {
  ERROR,
  OK,
  INFO,
}

/** DTO de comunicación con la API-REST.
 *  Recibe un tipo generico para definir el tipo de
 *  la propiedad "datos"
 * @property estado:
 * - 0: ERROR
 * - 1: OK
 * - 2: INFO
 */
export interface DTOsysGetData<T> {
  rowcount: number;
  estado: CodeEstateResponse;
  mensaje: string | null;
  datos: T;
}

interface RunAfter {
  debug?: boolean;
  execute: (arg?: any) => void;
}

export type Mode = 'develop' | 'mock' | 'prod';

export interface ExtraOptions<G, A, T> {
  name?: string;
  auto?: boolean;
  singleObject?: boolean;
  dependsOn?: null | any;
  searchParams?: G;
  useAdapter?: boolean;
  adapter?: (data: T) => A;
  runAfter?: RunAfter;

  fetchDelay?: number;
  showResponse?: boolean;
  adapterDelay?: number;
  showAdaptedResults?: boolean;
  mode?: Mode;
  mockResponse: DTOsysGetData<T>;
}

export interface NotifyState {
  exists: boolean;
  info: boolean;
  error: boolean;
  message: string;
}
