import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const frameCount = 240; // Matching frames ezgif-frame-001.jpg to ezgif-frame-025.jpg[cite: 1]

export default function CinematicScroller() {
  const canvasRef = useRef(null);
  const textRef = useRef(null);
  const imagesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Preload image sequence
    let loadedImages = 0;
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      const paddedIndex = String(i).padStart(3, '0');
      img.src = `/frames/ezgif-frame-${paddedIndex}.jpg`;
      img.onload = () => {
        loadedImages++;
        if (loadedImages === 1) {
          render(0);
        }
      };
      imagesRef.current[i - 1] = img;
    }

    const frameIndex = { frame: 0 };

    const st = gsap.to(frameIndex, {
      frame: frameCount - 1,
      snap: 'frame',
      ease: 'none',
      scrollTrigger: {
        trigger: '.scroll-container',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.5,
      },
      onUpdate: () => {
        render(Math.round(frameIndex.frame));
      },
    });

    // Cinematic Text Fade, Zoom & Parallax Animation
    gsap.fromTo(
      textRef.current,
      { opacity: 0, scale: 0.8, y: 50 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        scrollTrigger: {
          trigger: '.scroll-container',
          start: 'top top',
          end: '50% center',
          scrub: true,
        },
      }
    );

    function render(index) {
      const img = imagesRef.current[index];
      if (img) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        
        // Maintain aspect ratio cover fit
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio);
        const centerShiftX = (canvas.width - img.width * ratio) / 2;
        const centerShiftY = (canvas.height - img.height * ratio) / 2;

        context.drawImage(img, 0, 0, img.width, img.height, centerShiftX, centerShiftY, img.width * ratio, img.height * ratio);
      }
    }

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render(Math.round(frameIndex.frame));
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      st.kill();
    };
  }, []);

  return (
    <div className="sticky-viewport">
      <div className="canvas-sequence-wrapper">
        <canvas ref={canvasRef} className="frame-canvas" />
      </div>
      <div className="overlay-content" ref={textRef}>
        <h1>WELCOME TO SOLAR SYSTEM</h1>
        <p>The solar system comprises 8 planets, approximately 170 natural planetary satellites (moons),</p>
      </div>
    </div>
  );
}

