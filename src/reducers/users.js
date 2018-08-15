const users = (state = [], action) => {
  switch (action.type) {
    case "ADD_USER":
      return [
        ...state,
        {
          id: action.id,
          firstName: action.firstName,
          lastName: action.lastName,
          title: action.title,
          gender: action.gender,
          age: action.age
        }
      ];

    case "EDIT_USER":
      return state.map(user => {
        if (user.id == action.id) {
          return {
            ...user,
            title: action.title,
            gender: action.gender,
            age: action.age
          };
        } else {
          return user;
        }
      });

    case "DELETE_USER":
      return state.filter(user => user.id !== action.id);

    default:
      return state;
  }
};

export default users;
