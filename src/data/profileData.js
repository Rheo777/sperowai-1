// Get initial data from localStorage or use default values
const getInitialData = () => {
  const savedData = localStorage.getItem('profileData');
  if (savedData) {
    return JSON.parse(savedData);
  }
  return {
    name: "",
    image: "/assets/doctor.jpg", // Default profile image
    role: "User", // Default role
    username: "",
    email: ""
  };
};

export const profileData = getInitialData();

// Update function now also saves to localStorage
export const updateProfileData = (newData) => {
  Object.assign(profileData, newData);
  localStorage.setItem('profileData', JSON.stringify(profileData));
};

// Clear user data on logout
export const clearProfileData = () => {
  localStorage.removeItem('profileData');
  Object.assign(profileData, {
    name: "",
    image: "/assets/doctor.jpg",
    role: "User",
    username: "",
    email: ""
  });
}; 