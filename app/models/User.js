class User {
  constructor({ id } = {}) {
    this.id = id;
    console.log(this.id);
  }

  getDiscussions() {
  }
}

module.exports = User
