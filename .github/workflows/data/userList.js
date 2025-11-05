// User credentials for different environments
const userList = {
  stage: {
    username: 'qa@yopmail.com',
    password: 'Test@1234'
  },
  prod: {
    username: 'qa@qa.com',
    password: 'QA@1234'
  }
};

// Class to get user data
class UserList {
  static getUserList(userName) {
    return userList[userName]; // returns an object with username and password
  }
}

module.exports = { UserList };