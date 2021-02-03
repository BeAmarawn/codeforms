import produce from 'immer';

const INITIAL_STATE = {
  shortCode: null,
  started: false,
  formProgress: {},
  formData: false,
  loading: false,
  firstAcess: true,
};

export default function formState(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@formState/FIRST_ACESS': {
        draft.firstAcess = false;
        break;
      }

      case '@formState/START_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@formState/START_SUCCESS': {
        draft.shortCode = action.payload.shortCode;
        draft.formData = action.payload.formData;
        draft.started = true;
        draft.loading = false;
        break;
      }
      case '@formState/START_FAILURE': {
        draft.loading = false;
        break;
      }

      case '@formState/SEND_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@formState/SEND_SUCCESS': {
        draft.shortCode = null;
        draft.formData = false;
        draft.formProgress = {};
        draft.started = true;
        draft.loading = false;
        break;
      }
      case '@formState/SEND_FAILURE': {
        draft.loading = false;
        break;
      }

      case '@formState/FORM_PROGRESS': {
        draft.formProgress = action.payload.formAnswers;
        break;
      }
      case '@formState/SIGN_OUT': {
        draft.shortCode = null;
        draft.started = false;
        draft.formData = false;
        draft.formProgress = {};
        break;
      }
      default:
    }
  });
}
