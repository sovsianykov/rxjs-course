import React, {useEffect, useRef, useState} from 'react';
import Navbar from "./Navbar";
import {BehaviorSubject, fromEvent, interval, Observable} from "rxjs";
import {map, mapTo, tap, take, takeLast, takeWhile,} from 'rxjs/operators'
import {Button} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import { hit } from "../redux/actions";

const Homepage = () => {
    const dispatch = useDispatch()
    // const [ballState, setBallState] = useState({xBall :0, yBall : 0, vX : 10, vY : 20 })
     const btn = useRef(null)
    const coord = useSelector(state => state.ballState )
     console.log(coord)
    let stream1$ = interval(500).pipe(
        tap(()=> dispatch(hit(coord))),
        take(10)
    )
    useEffect(()=>{


        let subscription = stream1$.subscribe(
            () => console.log(coord) 
            
        )
        return ()=>subscription.unsubscribe()
    },[coord, dispatch, stream1$])
    return (
       <>
           <div className='homepage_container'>

               <Button  ref={btn} >Click me</Button>

           </div>
       </>
    )
}



export default Homepage;