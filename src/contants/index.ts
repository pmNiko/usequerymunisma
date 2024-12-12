
export const EMPTY = 0;

//** Constanst Notify ERROE: 0 - OK = 1 - INFO = 2  
export const INFO_CODE_STATUS = 2;

export const initialNotifyState = {
  exists: false,
  info: false,
  error: false,
  message: '',
}


//** Constanst Query 
export const queryReducerInitialState = {
  isStarted: false,
  isFetching: false,
  data: [] as any | null,
  isReady: false,
  containData: false
}

// ** Constanst Adapter
export const initialAdapterState = { 
  isAdapting: false, 
  completed: false,
  resultExists: false,
  results: [] as any | null, 
}