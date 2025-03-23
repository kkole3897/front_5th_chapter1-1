/**
 * @typedef {object} User
 * @property {string} id
 * @property {string} name
 * @property {string} email
 * @property {string} password
 * @property {string} description
 */

const store = {
  state: {
    user: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null,
  },
  /**
   * @param {User | null} user
   */
  setUser(user) {
    if (!user) {
      localStorage.removeItem("user");
      this.state.user = null;
      return;
    }

    this.state.user = user;
    localStorage.setItem("user", JSON.stringify(user));
  },
  updateUser(user) {
    if (!this.state.user) {
      return;
    }

    this.state.user = { ...this.state.user, ...user };
    localStorage.setItem("user", JSON.stringify(this.state.user));
  },
  isLoggedIn() {
    return this.state.user !== null;
  },
};

export default store;
