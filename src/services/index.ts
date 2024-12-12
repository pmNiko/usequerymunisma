export interface SessionUser {
  n_cont: number;
  denominacion: string;
  cuitcuil: string;
  documento: string;
  tipopersona: string;
  fechanacimiento: string;
  e_mail: string;
  telefono: string;
}

export interface LoginResponse {
  token: string;
}

export interface CheckAuthResponse<T> {
  token: string;
  payload: T;
}

const DEFAULT_API_URL = 'http://staging.smandes.gov.ar/api-commons/auth';
const API_URL = process.env.REACT_APP_API_COMMONS
  ? `${process.env.REACT_APP_API_COMMONS}/auth`
  : DEFAULT_API_URL;

const ApiCommons = {
  LOGIN: `${API_URL}/login`,
  VERIFY: `${API_URL}/verify`,
};

// Función genérica para login
const login = async <T = SessionUser>(payload: T): Promise<string> => {
  try {
    const response = await fetch(ApiCommons.LOGIN, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Login failed: ${response.statusText}`);
    }

    const data: LoginResponse = await response.json();
    return data.token;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Login error: ${error.message}`);
    } else {
      throw new Error(`Login error: ${String(error)}`);
    }
  }
};

const checkAuth = async <T = SessionUser>(
  token: string
): Promise<{ renewToken: string; payload: T }> => {
  try {
    const response = await fetch(ApiCommons.VERIFY, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Auth check failed: ${response.statusText}`);
    }

    const data: CheckAuthResponse<T> = await response.json();
    return {
      renewToken: data.token,
      payload: data.payload,
    };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Auth check error: ${error.message}`);
    } else {
      throw new Error(`Auth check error: ${String(error)}`);
    }
  }
};

export default {
  login,
  checkAuth,
};
