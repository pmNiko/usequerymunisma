# useQueryMunismank

`useQueryMunismank` es un paquete diseñado para facilitar la gestión de estados relacionados con consultas asíncronas en aplicaciones React. Este hook permite manejar datos, adaptadores y notificaciones de manera declarativa y escalable.

## Características principales

- Gestión avanzada del estado de las consultas, incluyendo estados de carga, datos y errores.
- Soporte para adaptadores para transformar datos según las necesidades del cliente.
- Configuración flexible mediante múltiples parámetros de inicialización.
- Integración fluida con TypeScript para una experiencia tipada y segura.
- Control sobre las notificaciones de estado y resultados.

## Instalación

Instala el paquete desde npm:

```bash
npm install usequerymunismank
```

O directamente desde el repositorio de GitHub:

```bash
npm install pmNiko/useQueryMunismank
```

## Uso básico

### Ejemplo sin adaptador

```tsx
import { useQueryState } from 'usequerymunismank';

const ExampleComponent = () => {
  const {
    isLoading,
    stateQuery: { data, containsData },
    requests: { send },
  } = useQueryState('getItems', { auto: true });

  if (isLoading) return <p>Cargando...</p>;
  if (!containsData) return <p>No se encontraron datos.</p>;

  return (
    <ul>
      {data.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};
```

### Ejemplo con adaptador

```tsx
import { useQueryState } from 'usequerymunismank';

const adaptData = data => data.map(item => ({ ...item, isActive: true }));

const ExampleWithAdapter = () => {
  const {
    isLoading,
    stateAdapter: { adaptedResults },
    requests: { send },
  } = useQueryState('getItems', {
    useAdapter: true,
    adapter: adaptData,
    auto: true,
  });

  if (isLoading) return <p>Cargando...</p>;

  return (
    <ul>
      {adaptedResults.map(item => (
        <li key={item.id}>
          {item.name} - Activo: {item.isActive.toString()}
        </li>
      ))}
    </ul>
  );
};
```

## API del hook

### Parámetros principales

- `fn` (string, requerido): Nombre de la función o endpoint a consultar.
- `init` (opcional): Objeto de configuración con las siguientes propiedades:
  - **`name`**: Identificador del servicio para depuración.
  - **`auto`**: Ejecuta la consulta automáticamente al montar el componente (por defecto `false`).
  - **`singleObject`**: Determina si los datos devueltos serán un objeto único o un arreglo (por defecto `false`).
  - **`dependsOn`**: Dependencia para activar el fetching automático.
  - **`searchParams`**: Parámetros de búsqueda iniciales.
  - **`useAdapter`**: Activa el adaptador de datos.
  - **`adapter`**: Función adaptadora de los datos obtenidos.
  - **`runAfter`**: Objeto con configuraciones para acciones post-fetching:
    - **`debug`**: Muestra información de depuración en consola.
    - **`execute`**: Función a ejecutar tras completar la petición.
  - **`fetchDelay`**: Tiempo de espera antes de iniciar la consulta.
  - **`mode`**: Modo de ejecución (`develop`, `mock` o `prod`).
  - **`mockResponse`**: Respuesta simulada para el modo mock.

### Propiedades del estado

#### `isLoading`

Indica si la consulta está en progreso.

#### `stateQuery`

Objeto que contiene:

- **`isFetching`**: Si la consulta está en progreso.
- **`isReady`**: Si la consulta ha finalizado.
- **`containsData`**: Si la consulta devolvió datos.
- **`data`**: Datos obtenidos de la consulta.

#### `stateAdapter`

Objeto que contiene:

- **`isAdapting`**: Si el adaptador está procesando datos.
- **`adapterCompleted`**: Si el adaptador finalizó el procesamiento.
- **`adaptedResultsExists`**: Si el adaptador devolvió datos.
- **`adaptedResults`**: Datos procesados por el adaptador.

#### `notify`

Objeto que contiene:

- **`exists`**: Si existe una notificación.
- **`info`**: Si la notificación es informativa.
- **`error`**: Si ocurrió un error.
- **`message`**: Mensaje de la notificación.

#### `requests`

Métodos disponibles para interactuar con la consulta:

- **`send`**: Ejecuta la consulta con parámetros opcionales.
- **`search`**: Ejecuta la consulta con parámetros requeridos.

## Licencia

Este proyecto está licenciado bajo la [MIT License](./LICENSE).

Para más información, visita el [repositorio oficial](https://github.com/pmNiko/useQueryMunisma).
