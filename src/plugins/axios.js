import axios from 'axios'

// axios.defaults.baseURL = 'http://0.0.0.0:19003/api'
// axios.defaults.baseURL = "https://hackathonbackend-f8r2.onrender.com/api";
axios.defaults.baseURL = "http://localhost:19003/api";
// axios.defaults.baseURL = "https://livraria-marrcandre-2024.onrender.com/api";

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('psg_auth_token');
    // Exclui URLs públicas da adição do token
    if (token && !config.url.includes('/send-email/')) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);