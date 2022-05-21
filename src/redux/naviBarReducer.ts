import {naviBarPageType} from "./store";
import {v1} from "uuid";

let initialState={
    friends: [
        {id: v1(), name: "Vasia",},
        {id: v1(), name: "Dasha",},
        {id: v1(), name: "Dima",},

    ],
}
export const naviBarReducer=(state:naviBarPageType=initialState, action: any)=>{
    switch (action.type){
        case "XXX":{
            return state
        }default: return state
    }
}