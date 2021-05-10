import { HIT } from "./types";

export function hit(coord) {
    return  async dispatch  => {
          coord.xBall += coord.vX
           dispatch({type : HIT, payload : coord})

    }
}