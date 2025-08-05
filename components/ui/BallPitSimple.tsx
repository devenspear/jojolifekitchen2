"use client";

import { useEffect, useRef } from 'react';

interface Ball {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  gravity: number;
}

const BallPitSimple = ({ className = '' }: { className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const ballsRef = useRef<Ball[]>([]);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const redColors = [
      '#FF6A5A', // tomato
      '#FF4444', // bright red
      '#DC2626', // red-600
      '#EF4444', // red-500
      '#F87171', // red-400
      '#FCA5A5', // red-300
      '#FECACA', // red-200
    ];

    // Initialize balls
    const initBalls = () => {
      ballsRef.current = [];
      const rect = container.getBoundingClientRect();
      const ballCount = Math.min(30, Math.floor((rect.width * rect.height) / 8000));
      
      for (let i = 0; i < ballCount; i++) {
        ballsRef.current.push({
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
          vx: (Math.random() - 0.5) * 3,
          vy: (Math.random() - 0.5) * 3,
          radius: Math.random() * 15 + 8,
          color: redColors[Math.floor(Math.random() * redColors.length)],
          gravity: 0.2
        });
      }
    };

    // Create ball elements
    const createBallElements = () => {
      container.innerHTML = '';
      ballsRef.current.forEach((_, index) => {
        const ballElement = document.createElement('div');
        ballElement.className = `absolute rounded-full transition-all duration-75 ease-linear`;
        ballElement.style.pointerEvents = 'none';
        ballElement.id = `ball-${index}`;
        container.appendChild(ballElement);
      });
    };

    // Animation loop
    const animate = () => {
      const rect = container.getBoundingClientRect();
      
      ballsRef.current.forEach((ball, index) => {
        // Physics
        ball.vy += ball.gravity;
        ball.x += ball.vx;
        ball.y += ball.vy;

        // Wall collision
        if (ball.x + ball.radius > rect.width) {
          ball.x = rect.width - ball.radius;
          ball.vx *= -0.7;
        }
        if (ball.x - ball.radius < 0) {
          ball.x = ball.radius;
          ball.vx *= -0.7;
        }
        if (ball.y + ball.radius > rect.height) {
          ball.y = rect.height - ball.radius;
          ball.vy *= -0.6;
          ball.vx *= 0.9; // friction
        }
        if (ball.y - ball.radius < 0) {
          ball.y = ball.radius;
          ball.vy *= -0.7;
        }

        // Mouse interaction
        const dx = mouseRef.current.x - ball.x;
        const dy = mouseRef.current.y - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          const force = (100 - distance) * 0.01;
          ball.vx -= (dx / distance) * force;
          ball.vy -= (dy / distance) * force;
        }

        // Ball-to-ball collision (simplified)
        ballsRef.current.forEach((otherBall, otherIndex) => {
          if (index !== otherIndex) {
            const dx = otherBall.x - ball.x;
            const dy = otherBall.y - ball.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const minDistance = ball.radius + otherBall.radius;
            
            if (distance < minDistance) {
              const angle = Math.atan2(dy, dx);
              const targetX = ball.x + Math.cos(angle) * minDistance;
              const targetY = ball.y + Math.sin(angle) * minDistance;
              const ax = (targetX - otherBall.x) * 0.1;
              const ay = (targetY - otherBall.y) * 0.1;
              ball.vx -= ax;
              ball.vy -= ay;
              otherBall.vx += ax;
              otherBall.vy += ay;
            }
          }
        });

        // Update DOM element
        const element = document.getElementById(`ball-${index}`);
        if (element) {
          element.style.left = `${ball.x - ball.radius}px`;
          element.style.top = `${ball.y - ball.radius}px`;
          element.style.width = `${ball.radius * 2}px`;
          element.style.height = `${ball.radius * 2}px`;
          element.style.backgroundColor = ball.color;
          element.style.boxShadow = `inset ${ball.radius * 0.3}px ${ball.radius * 0.3}px ${ball.radius * 0.5}px rgba(255,255,255,0.3)`;
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    // Resize handler
    const handleResize = () => {
      initBalls();
      createBallElements();
    };

    // Initialize
    initBalls();
    createBallElements();
    animate();

    // Event listeners
    container.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{ width: '100%', height: '100%' }}
    />
  );
};

export default BallPitSimple;