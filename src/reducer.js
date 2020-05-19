import * as actions from "./actionTypes";

let lastId = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    case actions.BUG_ADD:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case actions.BUG_REMOVE:
      return state.filter((x) => x.id !== action.payload.id);
    case actions.BUG_RESOLVE:
      return state.map((x) =>
        x.id !== action.payload.id ? x : { ...x, resolved: true }
      );
    default:
      return state;
  }
}
