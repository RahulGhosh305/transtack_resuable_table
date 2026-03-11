export const generateUsers = (count = 500) => {
  const roles = ["Admin", "Editor", "User"];
  const status = ["Active", "Inactive"];

  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    role: roles[Math.floor(Math.random() * roles.length)],
    status: status[Math.floor(Math.random() * status.length)],
    createdAt: "2024-01-01",
  }));
};

export const usersData = generateUsers();