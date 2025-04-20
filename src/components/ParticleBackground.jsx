import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: false,
        },
        background: {
          color: {
            value: "#0a0a0a", // night sky
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse", // try "grab" for a web effect
            },
            onClick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 80,
              duration: 0.5,
            },
            push: {
              quantity: 2,
            },
            grab: {
              distance: 120,
              line_linked: {
                opacity: 0.5,
              },
            },
          },
        },
        particles: {
          number: {
            value: 250,
            density: {
              enable: true,
              area: 300,
            },
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "star", // change from circle to star
          },
          opacity: {
            value: 0.9,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.3,
              sync: false,
            },
          },
          size: {
            value: 1.5,
            random: { enable: true, minimumValue: 0.5 },
            anim: {
              enable: true,
              speed: 2,
              size_min: 0.3,
              sync: false,
            },
          },
          links: {
            enable: false, // disable links for starfield feel
          },
          move: {
            enable: true,
            speed: 0.2,
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "out",
            },
          },
        },
        detectRetina: true,
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
};

export default ParticleBackground;
