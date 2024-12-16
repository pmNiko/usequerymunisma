import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useQueryState } from 'usequerymunisma';

interface FakeDataReponse {
  name: string;
  dni: number;
  age: number;
}

const FN_Example = 'fnexample';

const mockResponse = {
  estado: 1,
  mensaje: null,
  rowcount: 1,
  datos: {
    name: 'Carlos',
    dni: 11222333,
    age: 40,
  },
};

const App = () => {
  const { data, isFetching } = useQueryState<FakeDataReponse>(FN_Example, {
    auto: true,
    fetchDelay: 2000,
    mode: 'mock',
    mockResponse,
  });

  return (
    <div>
      {isFetching ? <span>Cargando</span> : <pre>{JSON.stringify(data)}</pre>}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
