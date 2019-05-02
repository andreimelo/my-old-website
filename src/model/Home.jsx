import React from  'react'
import Toggle from '../component/Toggle'
import { useSpring, animated } from 'react-spring'
import '../styles/Home.css'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export default ()=>{
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
    return (
        <React.Fragment>
        <animated.div className="container-melo" onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }}>
         <div className="inside-container-melo">
           <p className="p-melo"> I'm Andrei Melo</p>
           <p className="p-melo"> Front-End Developer</p>
           <p className="p-melo"> ReactJS</p>
           <br/>
            <Toggle />
         </div>
        </animated.div>
           
        </React.Fragment>
    )
}