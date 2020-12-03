export function manageFriends(state, action){
  switch (action.type){
    case "ADD_FRIEND":
      state.friends.push(action.friend);
      return {friends: state.friends};
    case "REMOVE_FRIEND":
      let removed = state.friends.filter(function(value, index, arr){
        return value.id != action.id
      })
      return {friends: removed}
    default:
      return state;
  }
}
