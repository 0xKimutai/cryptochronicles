// Mock user credentials
export const mockUsers = [
  {
    id: 1,
    username: 'admin',
    password: 'admin123',
    name: 'Admin User',
    email: 'admin@cryptochronicles.com'
  },
  {
    id: 2,
    username: 'demo',
    password: 'demo123',
    name: 'Demo User',
    email: 'demo@cryptochronicles.com'
  },
  {
    id: 3,
    username: 'crypto',
    password: 'crypto123',
    name: 'Crypto Enthusiast',
    email: 'crypto@cryptochronicles.com'
  }
];

// Authentication state
export const authState = {
  isAuthenticated: false,
  currentUser: null,
  token: null
};

// Mock authentication functions
export const authenticateUser = (username, password) => {
  const user = mockUsers.find(
    u => u.username === username && u.password === password
  );
  
  if (user) {
    const token = `mock-jwt-token-${Date.now()}`;
    authState.isAuthenticated = true;
    authState.currentUser = user;
    authState.token = token;
    
    // Store in localStorage for persistence
    localStorage.setItem('cryptoAuth', JSON.stringify({
      isAuthenticated: true,
      currentUser: user,
      token: token
    }));
    
    return { success: true, user };
  }
  
  return { success: false, error: 'Invalid credentials' };
};

export const logoutUser = () => {
  authState.isAuthenticated = false;
  authState.currentUser = null;
  authState.token = null;
  localStorage.removeItem('cryptoAuth');
};

export const checkAuthStatus = () => {
  const storedAuth = localStorage.getItem('cryptoAuth');
  if (storedAuth) {
    const auth = JSON.parse(storedAuth);
    authState.isAuthenticated = auth.isAuthenticated;
    authState.currentUser = auth.currentUser;
    authState.token = auth.token;
    return auth.isAuthenticated;
  }
  return false;
}; 