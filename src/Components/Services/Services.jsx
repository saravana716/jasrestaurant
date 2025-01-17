import React from 'react'
import "./Services.css"
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
const Services = () => {
  useEffect(() => {
    // Initialize ScrollReveal and configure animations
    ScrollReveal().reveal(".reveal", {
      delay: 200, // Delay before animation starts
      distance: "50px", // Distance for slide animations
      duration: 1000, // Duration of the animation
      easing: "ease-in-out", // Easing function for the animation
      origin: "bottom", // Direction from which the element will animate in
      reset: true, // Reset animation after it leaves the viewport
    });
    ScrollReveal().reveal(".reveal-1", {
      delay: 200,
      distance: "100px",
      duration: 1500,
      origin: "top",
      reset: true,
    });

    ScrollReveal().reveal(".reveal-2", {
      delay: 400,
      distance: "50px",
      duration: 1000,
      origin: "bottom",
      reset: true,
    });

    ScrollReveal().reveal(".reveal-3", {
      delay: 600,
      distance: "70px",
      duration: 1200,
      origin: "left",
      reset: true,
    });


  }, []);
 
  return (
    <>
    <div className='services reveal-3'>
        <h3>Diverse Solutions Tailored to Your Needs</h3>
        <h1>Comprehensive Services</h1>
        <p>A multifaceted array of tailored solutions to address your unique requirements and elevate your experience.</p>
    </div>
    </>
  )
}

export default Services