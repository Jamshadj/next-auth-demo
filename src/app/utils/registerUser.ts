// Register a user with email, password, and name
export const registerUser = (email: string, password: string, name: string) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const newUser = {
      email,
      password,
      name,
      role: 'guest', // Default role
    };
  
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
  };
  