import { CHANGE_SERCHFIELD } from "./constant"

const intialState = {
    searchField:''
}
export const searchRobots=(state=intialState, action={})=>{
    switch(action.type){
        case CHANGE_SERCHFIELD:
            return {...state, searchField:action.payload};
        default: 
            return state;
    }
}