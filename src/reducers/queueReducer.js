const initialState = {};

function queueReducer (state = initialState, action) {
  switch (action.type) {
    case 'QUEUE/GET/SUCCESS':
      const { currency, queue } = action.payload;
      return { ...state, [currency]: queue };
    default:
      return state;
  }
}

export default queueReducer;
