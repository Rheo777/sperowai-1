// auth.js
export const getToken = () => localStorage.getItem('token');

export const setToken = (token) => {
    localStorage.setItem('token', token);
};

export const removeToken = () => {
    localStorage.removeItem('token');
};

export const isAuthenticated = () => {
    const token = getToken();
    return !!token;
};

// Use this function for making authenticated API calls
export const authenticatedFetch = async (url, options = {}) => {
    const token = getToken();
    const headers = {
        'Content-Type': 'application/json',
        ...options.headers,
    };

    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(url, {
        ...options,
        headers,
    });

    if (response.status === 401) {
        // Token expired or invalid
        removeToken();
        window.location.href = '/login';
        throw new Error('Session expired');
    }

    return response;
};
