import {HIT} from "./types";

const initialState = {
    ballState : {xBall :0, yBall : 0, vX : 10, vY : 20 }
}
function hitReducer(state=initialState, action) {
    switch (action.type) {
        case HIT :
            return { ...state, ballState : action.payload }
        default :
            return state;
    }

}
export default hitReducer;