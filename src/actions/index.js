let nextId = 0;

export const addUser = user => {
  return {
    type: "ADD_USER",
    id: nextId++,
    ...user
  };
};

export const editUser = (id, user) => {
  return {
    type: "EDIT_USER",
    id: id,
    ...user
  };
};

export const deleteUser = id => {
  return {
    type: "DELETE_USER",
    id: id
  };
};

export const toggle = val => {
  return {
    type: "TOGGLE",
    value: val
  };
};

export const toHome = () => {
  return {
    type: "HOME_PAGE"
  };
};

export const toCreate = () => {
  return {
    type: "CREATE_PAGE"
  };
};

export const toEdit = (id) => {
  return {
    type: "EDIT_PAGE",
    id: id
  };
};
