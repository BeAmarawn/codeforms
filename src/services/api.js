import axios from 'axios';

const api = axios.create({
  baseURL: 'https://us-central1-code-forms.cloudfunctions.net/forms',
});

export default api;
