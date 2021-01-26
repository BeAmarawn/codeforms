export function startRequest(shortCode) {
  return {
    type: '@formState/START_REQUEST',
    payload: {shortCode},
  };
}

export function startSuccess(shortCode, form) {
  return {
    type: '@formState/START_SUCCESS',
    payload: {shortCode, form},
  };
}
export function firstAcessConfirm(boolean) {
  return {
    type: '@formState/FIRST_ACESS',
    payload: {boolean},
  };
}
export function startFailure() {
  return {
    type: '@formState/START_FAILURE',
  };
}
