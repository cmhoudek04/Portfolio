import { useState, useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadTrianglesPreset } from "@tsparticles/preset-triangles";
import { isMobile } from "react-device-detect";

export default function Home() {
    const [init, setInit] = useState(false);

    // Lighter config on mobile for performance while keeping the same look
    const config = isMobile ? {
        particleCount: 35,
        fpsLimit: 60,
        linkDistance: 150,
        linkOpacity: 0.25,
        size: 3,
        speed: 0.6,
    } : {
        particleCount: 170,
        fpsLimit: 120,
        linkDistance: 150,
        linkOpacity: 1,
        size: 4,
        speed: 1,
    };

    // Initialize particle engine
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadTrianglesPreset(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    if (!init) return null;

    return (
        <Particles
            id="tsparticles"
            options={{
                preset: "triangles",

                fullScreen: {
                    enable: true,
                    zIndex: -1 // Puts particles behind other page elements
                },

                background: {
                    color: {
                        value: "#08141dff" // Dark blue background
                    }
                },

                fpsLimit: config.fpsLimit,

                particles: {
                    color: {
                        value: "#fef08a" // White particles
                    },
                    links: {
                        color: "rgba(36, 97, 122, 1)", // Grey links
                        distance: config.linkDistance,
                        opacity: config.linkOpacity,
                    },
                    move: {
                        speed: config.speed // Moderate speed
                    },
                    size: {
                        value: config.size // Medium size
                    },
                    number: {
                        value: config.particleCount, // 15 for mobile, 170 for desktop.
                    }
                },
            }}
    />
  );
}