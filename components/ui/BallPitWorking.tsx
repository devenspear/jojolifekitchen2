"use client";

import { useEffect, useRef, useCallback } from 'react';

interface BallPitProps {
  count?: number;
  gravity?: number;
  friction?: number;
  wallBounce?: number;
  followCursor?: boolean;
  className?: string;
}

interface Ball {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  mass: number;
}

const BallPitWorking: React.FC<BallPitProps> = ({
  count = 80,
  gravity = 0.05,
  friction = 0.99,
  wallBounce = 0.8,
  followCursor = true,
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ballsRef = useRef<Ball[]>([]);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });
  const lastTimeRef = useRef<number>(0);

  const redColors = [
    '#FF6B6B', // coral red
    '#FF5252', // red accent
    '#F44336', // material red
    '#E53E3E', // chakra red
    '#DC2626', // tailwind red-600
    '#EF4444', // tailwind red-500
    '#F87171', // tailwind red-400
  ];

  const createBall = useCallback((canvas: HTMLCanvasElement): Ball => {
    return {
      x: Math.random() * (canvas.width - 40) + 20,
      y: Math.random() * (canvas.height * 0.7) + 20, // Keep balls in upper 70% initially
      vx: (Math.random() - 0.5) * 1,
      vy: (Math.random() - 0.5) * 1 - 0.5, // Slight upward initial velocity
      radius: Math.random() * 8 + 6,
      color: redColors[Math.floor(Math.random() * redColors.length)],
      mass: 1
    };
  }, []);

  const initBalls = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    ballsRef.current = [];
    for (let i = 0; i < count; i++) {
      ballsRef.current.push(createBall(canvas));
    }
  }, [count, createBall]);

  const updatePhysics = useCallback((deltaTime: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const width = canvas.width;
    const height = canvas.height;
    const dt = Math.min(deltaTime / 16, 2); // Cap delta time for stability

    ballsRef.current.forEach((ball, i) => {
      // Minimal gravity - almost weightless
      ball.vy += gravity * dt;

      // Strong upward force to keep balls floating throughout the space
      const centerY = height * 0.5; // Target center at middle
      if (ball.y > centerY) {
        const upwardForce = Math.pow((ball.y - centerY) / height, 2) * 2;
        ball.vy -= upwardForce * dt;
      }

      // Add continuous floating motion - like underwater
      ball.vx += Math.sin(Date.now() * 0.001 + i) * 0.02 * dt;
      ball.vy += Math.cos(Date.now() * 0.0008 + i) * 0.02 * dt;
      
      // Random brownian motion
      ball.vx += (Math.random() - 0.5) * 0.03 * dt;
      ball.vy += (Math.random() - 0.5) * 0.03 * dt;

      // Mouse interaction - repulsion force
      if (followCursor) {
        const dx = ball.x - mouseRef.current.x;
        const dy = ball.y - mouseRef.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 120 && distance > 0) {
          const force = (120 - distance) / 120;
          const forceX = (dx / distance) * force * 0.8;
          const forceY = (dy / distance) * force * 0.8;
          
          ball.vx += forceX * dt;
          ball.vy += forceY * dt;
        }
      }

      // Apply friction
      ball.vx *= Math.pow(friction, dt);
      ball.vy *= Math.pow(friction, dt);

      // Limit maximum velocity to prevent chaos
      const maxVel = 3;
      const vel = Math.sqrt(ball.vx * ball.vx + ball.vy * ball.vy);
      if (vel > maxVel) {
        ball.vx = (ball.vx / vel) * maxVel;
        ball.vy = (ball.vy / vel) * maxVel;
      }

      // Update position
      ball.x += ball.vx * dt;
      ball.y += ball.vy * dt;

      // Wall collisions with proper physics
      if (ball.x + ball.radius > width) {
        ball.x = width - ball.radius;
        ball.vx *= -wallBounce;
      } else if (ball.x - ball.radius < 0) {
        ball.x = ball.radius;
        ball.vx *= -wallBounce;
      }
      
      if (ball.y + ball.radius > height) {
        ball.y = height - ball.radius;
        ball.vy *= -wallBounce;
        // Strong upward force when hitting bottom to prevent sticking
        ball.vy -= 1.5;
      } else if (ball.y - ball.radius < 0) {
        ball.y = ball.radius;
        ball.vy *= -wallBounce;
        // Add downward force when hitting top
        ball.vy += 0.3;
      }

      // Ball-to-ball collisions
      for (let j = i + 1; j < ballsRef.current.length; j++) {
        const other = ballsRef.current[j];
        const dx = other.x - ball.x;
        const dy = other.y - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const minDistance = ball.radius + other.radius;

        if (distance < minDistance && distance > 0) {
          // Normalize collision vector
          const nx = dx / distance;
          const ny = dy / distance;

          // Separate balls
          const overlap = minDistance - distance;
          const separationX = nx * overlap * 0.5;
          const separationY = ny * overlap * 0.5;

          ball.x -= separationX;
          ball.y -= separationY;
          other.x += separationX;
          other.y += separationY;

          // Calculate relative velocity
          const relativeVelX = ball.vx - other.vx;
          const relativeVelY = ball.vy - other.vy;
          const impulse = 2 * (relativeVelX * nx + relativeVelY * ny) / 2;

          // Apply collision response
          ball.vx -= impulse * nx * 0.8;
          ball.vy -= impulse * ny * 0.8;
          other.vx += impulse * nx * 0.8;
          other.vy += impulse * ny * 0.8;
        }
      }
    });
  }, [gravity, friction, wallBounce, followCursor]);

  const render = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    // Clear with slight transparency for trail effect
    ctx.globalAlpha = 1;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw balls with glow effect
    ballsRef.current.forEach((ball) => {
      // Draw glow
      ctx.globalAlpha = 0.3;
      ctx.beginPath();
      ctx.arc(ball.x, ball.y, ball.radius + 2, 0, Math.PI * 2);
      ctx.fillStyle = ball.color;
      ctx.fill();

      // Draw main ball
      ctx.globalAlpha = 0.9;
      ctx.beginPath();
      ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
      ctx.fillStyle = ball.color;
      ctx.fill();

      // Add highlight
      ctx.globalAlpha = 0.6;
      const gradient = ctx.createRadialGradient(
        ball.x - ball.radius * 0.3,
        ball.y - ball.radius * 0.3,
        0,
        ball.x,
        ball.y,
        ball.radius
      );
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
      gradient.addColorStop(0.7, 'rgba(255, 255, 255, 0.2)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      
      ctx.beginPath();
      ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
    });

    ctx.globalAlpha = 1;
  }, []);

  const animate = useCallback((currentTime: number) => {
    const deltaTime = currentTime - lastTimeRef.current;
    lastTimeRef.current = currentTime;
    
    updatePhysics(deltaTime);
    render();
    
    animationRef.current = requestAnimationFrame(animate);
  }, [updatePhysics, render]);

  const startAnimation = useCallback(() => {
    if (animationRef.current) return;
    lastTimeRef.current = performance.now();
    animationRef.current = requestAnimationFrame(animate);
  }, [animate]);

  const stopAnimation = useCallback(() => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = undefined;
    }
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    
    mouseRef.current.x = (e.clientX - rect.left) * scaleX;
    mouseRef.current.y = (e.clientY - rect.top) * scaleY;
  }, []);

  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    
    // Re-position balls that are now outside bounds
    ballsRef.current.forEach(ball => {
      if (ball.x > canvas.width - ball.radius) ball.x = canvas.width - ball.radius;
      if (ball.y > canvas.height - ball.radius) ball.y = canvas.height - ball.radius;
      if (ball.x < ball.radius) ball.x = ball.radius;
      if (ball.y < ball.radius) ball.y = ball.radius;
    });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set initial canvas size
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    // Initialize balls and start animation
    initBalls();
    startAnimation();

    // Event listeners
    canvas.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      stopAnimation();
      canvas.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [initBalls, startAnimation, stopAnimation, handleMouseMove, handleResize]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ 
        width: '100%', 
        height: '100%',
        display: 'block'
      }}
    />
  );
};

export default BallPitWorking;