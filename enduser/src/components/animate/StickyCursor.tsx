'use client';
import { useCallback, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function StickyCursor() {

  const cursorSize = 15;
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  }

  const smoothOptions = {damping: 25, stiffness: 250, mass: 0.5}
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions)
  }

  const manageMouseMove = useCallback((e: MouseEvent) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  },[mouse.x, mouse.y])

  useEffect( () => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove)
    }
  }, [manageMouseMove])

  return (
    <div className={`hidden md:block relative`}>
      <motion.div 
        style={{
          left: smoothMouse.x, 
          top: smoothMouse.y,
        }} 
        className={`fixed w-10 h-10 bg-black rounded-full pointer-events-none z-[100]`}>
      </motion.div>
    </div>
  )
}