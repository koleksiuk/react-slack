var Discussion = require("../models/Discussion.js");

var DISCUSSIONS = [
  new Discussion({ id: 1, name: "Team channel", userIds: [1, 2]}),
  new Discussion({ id: 2, name: "Fellow devs" , userIds: [1, 2]})
];

class DiscussionsDAO {
  getDiscussions() {
    return new Promise((resolve, reject) => {
      resolve(DISCUSSIONS);
    })
  }

  getDiscussion(discussionId) {
    let discussion = DISCUSSIONS.filter(function(discussion) { return discussion.id == discussionId})[0];

    return new Promise((resolve, reject) => {
      if (discussion) {
        resolve(discussion);
      } else {
        reject("No discussion found");
      }
    });
  }
}

module.exports = DiscussionsDAO
