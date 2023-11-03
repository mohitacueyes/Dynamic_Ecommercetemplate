const TOKEN_KEY = 'token';
export const setAuthToken = (token) => {
    localStorage.setItem(TOKEN_KEY, token);
  };
  
  // Function to get the authentication token from localStorage
  export const getAuthToken = () => {
    return localStorage.getItem(TOKEN_KEY);
  };
  
  // Function to remove the authentication token from localStorage (logout functionality)
  export const removeAuthToken = () => {
    localStorage.removeItem(TOKEN_KEY);
  };