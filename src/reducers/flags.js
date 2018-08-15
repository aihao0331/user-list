const flags = (state = { route: "home" }, action) => {
  switch (action.type) {
    case "HOME_PAGE":
      return { route: "home" };
    case "CREATE_PAGE":
      return { route: "create" };
    case "EDIT_PAGE":
      return { route: "edit", id: action.id };
    default:
      return state;
  }
};

export default flags;
