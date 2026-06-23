"use client";

import { useEffect, useRef } from "react";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    let direction = 1; // 1 = forward, -1 = reverse
    let lastTime = performance.now();

    const loop = (time: number) => {
      const video = videoRef.current;
      if (!video) return;

      const dt = (time - lastTime) / 1000;
      lastTime = time;

      // Skip logic if video duration is not loaded yet
      if (Number.isNaN(video.duration) || video.duration === 0) {
        animationFrameId = requestAnimationFrame(loop);
        return;
      }

      const duration = video.duration;
      let speed = 1.0;

      // Calculate speed (slow down at the last second)
      if (direction === 1 && video.currentTime > duration - 1) {
        speed = Math.max(0.1, duration - video.currentTime);
        video.playbackRate = speed;
      } else if (direction === -1 && video.currentTime < 1) {
        // Optionally slow down at the very beginning when playing in reverse
        speed = Math.max(0.1, video.currentTime);
      } else if (direction === 1) {
        video.playbackRate = 1.0;
      }

      // Handle Direction and playback
      if (direction === 1) {
        if (video.currentTime >= duration - 0.05) {
          // Reached end, switch to reverse
          direction = -1;
          video.pause();
        } else {
          if (video.paused) {
            video.play().catch(() => {
              // Ignore autoplay errors
            });
          }
        }
      } else {
        // Reverse playback using manual currentTime adjustments
        // Standard speed is 1.0x, we multiply by dt
        const newTime = Math.max(0, video.currentTime - speed * dt);
        video.currentTime = newTime;

        if (newTime <= 0.05) {
          // Reached beginning, switch to forward
          direction = 1;
          video.playbackRate = 0.1; // Will start slow and speed up
        }
      }

      animationFrameId = requestAnimationFrame(loop);
    };

    // Ensure muted playback to avoid autoplay policies
    if (videoRef.current) {
      videoRef.current.muted = true;
    }

    animationFrameId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 z-0 object-cover w-full h-full opacity-60"
      src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_161253_c72b1869-400f-45ed-ac0c-52f68c2ed5bd.mp4"
      muted
      playsInline
      autoPlay
      preload="auto"
      loop={false}
    />
  );
}
