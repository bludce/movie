export function error(bool) {
  return {
      type: 'ERROR',
      hasErrored: bool
  };
}

export function loading(bool) {
  return {
      type: 'LOADING',
      isLoading: bool
  };
}