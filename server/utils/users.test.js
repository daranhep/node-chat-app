const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'Node Yo'
    }, {
      id: '2',
      name: 'Jen',
      room: 'Node Yo'
    }, {
      id: '3',
      name: 'Julie',
      room: 'Sup Yo'
    }]
  });

  it('should add new user', () => {
    let users = new Users();
    let user = {
      id: '123',
      name: 'Andrew',
      room: 'The Office Fans'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    let userId = '1';
    let user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove user', () => {
    let userId = '99';
    let user = users.getUser(userId);

    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    let userId = '2';
    let user = users.getUser(userId);

    expect(user.id).toBe(userId);
  });

  it('should find not user', () => {
    let userId = '99';
    let user = users.getUser(userId);

    expect(user).toNotExist();
  });

  it('should return names for Node Yo', () => {
    let userList = users.getUserList('Node Yo');

    expect(userList).toEqual(['Mike', 'Jen']);
  });

  it('should return names for Sup Yo', () => {
    let userList = users.getUserList('Sup Yo');

    expect(userList).toEqual(['Julie']);
  });
});
