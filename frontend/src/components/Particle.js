import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 18,
            density: {
              enable: true,
              value_area: 1200,
            },
          },
          shape: {
            type: ["image"],
            image: [
              {
                /* Code icon */
                src: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='16 18 22 12 16 6'/><polyline points='8 6 2 12 8 18'/></svg>",
                width: 24,
                height: 24,
              },
              {
                /* Terminal icon */
                src: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='4 17 10 11 4 5'/><line x1='12' y1='19' x2='20' y2='19'/></svg>",
                width: 24,
                height: 24,
              },
              {
                /* React atom icon */
                src: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2'><ellipse cx='12' cy='12' rx='10' ry='4.5' transform='rotate(0 12 12)'/><ellipse cx='12' cy='12' rx='10' ry='4.5' transform='rotate(60 12 12)'/><ellipse cx='12' cy='12' rx='10' ry='4.5' transform='rotate(120 12 12)'/><circle cx='12' cy='12' r='1.5' fill='white'/></svg>",
                width: 24,
                height: 24,
              },
              {
                /* Database icon */
                src: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><ellipse cx='12' cy='5' rx='9' ry='3'/><path d='M21 12c0 1.66-4 3-9 3s-9-1.34-9-3'/><path d='M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5'/></svg>",
                width: 24,
                height: 24,
              },
              {
                /* Git branch icon */
                src: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><line x1='6' y1='3' x2='6' y2='15'/><circle cx='18' cy='6' r='3'/><circle cx='6' cy='18' r='3'/><path d='M18 9a9 9 0 0 1-9 9'/></svg>",
                width: 24,
                height: 24,
              },
              {
                /* CPU icon */
                src: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><rect x='4' y='4' width='16' height='16' rx='2'/><rect x='9' y='9' width='6' height='6'/><line x1='9' y1='1' x2='9' y2='4'/><line x1='15' y1='1' x2='15' y2='4'/><line x1='9' y1='20' x2='9' y2='23'/><line x1='15' y1='20' x2='15' y2='23'/><line x1='20' y1='9' x2='23' y2='9'/><line x1='20' y1='15' x2='23' y2='15'/><line x1='1' y1='9' x2='4' y2='9'/><line x1='1' y1='15' x2='4' y2='15'/></svg>",
                width: 24,
                height: 24,
              },
            ],
          },
          size: {
            value: 12,
            random: {
              enable: true,
              minimumValue: 8,
            },
          },
          opacity: {
            value: 0.45,
            random: {
              enable: true,
              minimumValue: 0.15,
            },
            anim: {
              enable: true,
              speed: 0.5,
              opacity_min: 0.15,
              sync: false,
            },
          },
          move: {
            enable: true,
            speed: 0.6,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
          },
          line_linked: {
            enable: false,
          },
        },
        interactivity: {
          detect_on: "window",
          events: {
            onhover: {
              enable: false,
            },
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
