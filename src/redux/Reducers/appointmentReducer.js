import {SHOW, CREATE, UPDATE, DESTROY} from '../Types/appointmentType';

const initialState = {
  appointment: {}
};

const appointmentReducer = (state = initialState, action) =>{
  switch(action.type){
    case SHOW :
    return{
      ...state,
      appointment: action.payload
    }
    case CREATE :
      return{
        ...state,
        appointment: action.payload
      }
    case UPDATE :
      return{
        ...state,
        appointment : action.payload
      }
    case DESTROY :
      return{
        ...state,
        appointment : action.payload
      }
    
    default:
      return state
  }
};

export default appointmentReducer;