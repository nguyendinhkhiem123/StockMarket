import * as actionType from '../Constants/ActionType';
const initState = [];

var myReducer = (state = initState , action)=>{
    switch(action.type){
        case 'LIST_ALL' :
            state = action.data;
        return [...state];
        default : return state
    }
    
}
export default  myReducer;