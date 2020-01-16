// Main Reducer file
//

export default function(state = {}, action) {
  const { type } = action;
  switch (type) {
    case 'FIRST_CASE': {
      console.log('success');
    }
  }

  return state;
}
