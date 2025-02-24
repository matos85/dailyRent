const API_BASE_URL = 'http://your-api-ip-address.com'; // Измените на нужный IP

export const fetchData = async (endpoint) => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

