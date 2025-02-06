// api.js
const API_BASE_URL = 'https://sperowai.onrender.com'; // Replace this with your backend URL

export const API_ENDPOINTS = {
    login: `${API_BASE_URL}/auth/login`,
    profile: `${API_BASE_URL}/api/user/profile`,
    search: `${API_BASE_URL}/api/search`, 
    // Add more endpoints as needed
};

export default API_ENDPOINTS;
