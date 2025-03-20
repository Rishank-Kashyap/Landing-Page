/**
 * Filters users based on a search term.
 * @param {Array} users - The list of users to filter.
 * @param {string} searchTerm - The search term to filter by.
 * @returns {Array} - The filtered list of users.
 */
export const filterUsers = (users, searchTerm) => {
    if (!searchTerm) return users; // Return all users if no search term is provided
    return users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };