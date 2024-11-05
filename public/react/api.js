let apiURL;

if (process.env.NODE_ENV === 'development') {
  apiURL = process.env.REACT_APP_API_URL || 'https://inventory-app-backend-java.onrender.com/api';
} else {
  apiURL = '/api'
}

export default apiURL;
