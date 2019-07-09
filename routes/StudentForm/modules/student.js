------------------------------------
Actions
------------------------------------
export function addValues (values) {
  return {
    let data = JSON.parse(localStorage.getItem('student'));
    let array = [];
    if(data != null){
   	  data.map(function (v){
   		array.push(v);
   	  });
   	}
   	array.push(values);
   	localStorage.setItem('student', JSON.stringify(array));
  }
}

export const actions = {
  type: ADD,
  payload:
}
------------------------------------
Action Handlers
------------------------------------
const ACTION_HANDLERS = {
  [ADD_DATA]    : (state, action) =>
}

------------------------------------
Reducer
------------------------------------
const initialState = {

}
export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
