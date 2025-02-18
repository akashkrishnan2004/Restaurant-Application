// services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const fetchMenus = async () => {
  const response = await axios.get(`${API_URL}/menus`);
  return response.data;
};

// Other API functions...
