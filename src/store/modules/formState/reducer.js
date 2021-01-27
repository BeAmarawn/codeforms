import produce from 'immer';

const INITIAL_STATE = {
  shortCode: null,
  started: false,
  loading: false,
  firstAcess: true,
};

export default function formState(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@formState/START_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@formState/START_SUCCESS': {
        draft.shortCode = action.payload.shortCode;
        draft.started = true;
        draft.loading = false;
        break;
      }
      case '@formState/FIRST_ACESS': {
        draft.firstAcess = false;
        break;
      }
      case '@formState/START_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@formState/SIGN_OUT': {
        draft.shortCode = null;
        draft.started = false;
        break;
      }
      default:
    }
  });
}
