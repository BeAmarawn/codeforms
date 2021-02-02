export function startRequest(shortCode) {
  return {
    type: '@formState/START_REQUEST',
    payload: { shortCode },
  };
}

export function startSuccess(shortCode, formData) {
  return {
    type: '@formState/START_SUCCESS',
    payload: { shortCode, formData },
  };
}
export function firstAcessConfirm(boolean) {
  return {
    type: '@formState/FIRST_ACESS',
    payload: { boolean },
  };
}
export function saveProgressForm(formAnswers) {
  return {
    type: '@formState/FORM_PROGRESS',
    payload: { formAnswers },
  };
}
export function startFailure() {
  return {
    type: '@formState/START_FAILURE',
  };
}
export function signOut() {
  return {
    type: '@formState/SIGN_OUT',
  };
}
