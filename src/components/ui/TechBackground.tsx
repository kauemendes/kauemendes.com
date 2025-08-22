'use client';

import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  connections: number[];
  pulsePhase: number;
  size: number;
  type: 'data' | 'neural' | 'hub';
}

export function TechBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>(0);
  const nodesRef = useRef<Node[]>([]);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initNodes = () => {
      const nodes: Node[] = [];
      const nodeCount = Math.floor((canvas.width * canvas.height) / 15000);
      
      for (let i = 0; i < nodeCount; i++) {
        const nodeType: Node['type'] = 
          i < nodeCount * 0.1 ? 'hub' :
          i < nodeCount * 0.3 ? 'neural' : 'data';
        
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          connections: [],
          pulsePhase: Math.random() * Math.PI * 2,
          size: nodeType === 'hub' ? 4 : nodeType === 'neural' ? 2.5 : 1.5,
          type: nodeType
        });
      }

      // Create connections
      nodes.forEach((node, i) => {
        const maxConnections = node.type === 'hub' ? 8 : node.type === 'neural' ? 4 : 2;
        const connectionDistance = node.type === 'hub' ? 200 : 120;
        
        nodes.forEach((otherNode, j) => {
          if (i !== j && node.connections.length < maxConnections) {
            const dx = node.x - otherNode.x;
            const dy = node.y - otherNode.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < connectionDistance) {
              node.connections.push(j);
            }
          }
        });
      });

      nodesRef.current = nodes;
    };

    const animate = () => {
      timeRef.current += 0.016;
      
      ctx.fillStyle = 'rgba(11, 19, 43, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const nodes = nodesRef.current;

      // Update node positions
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x <= 0 || node.x >= canvas.width) node.vx *= -1;
        if (node.y <= 0 || node.y >= canvas.height) node.vy *= -1;

        // Keep nodes in bounds
        node.x = Math.max(0, Math.min(canvas.width, node.x));
        node.y = Math.max(0, Math.min(canvas.height, node.y));

        node.pulsePhase += 0.02;
      });

      // Draw connections with data flow
      nodes.forEach((node, i) => {
        node.connections.forEach(connectionIndex => {
          const connectedNode = nodes[connectionIndex];
          if (!connectedNode) return;

          const dx = connectedNode.x - node.x;
          const dy = connectedNode.y - node.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Connection line
          const opacity = Math.max(0, 1 - distance / 150);
          
          // Different colors for different connection types
          let color = '';
          if (node.type === 'hub' || connectedNode.type === 'hub') {
            color = `rgba(0, 229, 255, ${opacity * 0.4})`; // Brand accent1 - cyan
          } else if (node.type === 'neural' || connectedNode.type === 'neural') {
            color = `rgba(46, 230, 166, ${opacity * 0.3})`; // Brand accent2 - green
          } else {
            color = `rgba(255, 122, 0, ${opacity * 0.2})`; // Brand accent3 - orange
          }

          ctx.strokeStyle = color;
          ctx.lineWidth = node.type === 'hub' ? 1.5 : 0.8;
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(connectedNode.x, connectedNode.y);
          ctx.stroke();

          // Data packets flowing along connections
          if (opacity > 0.1) {
            const progress = (timeRef.current * 0.5 + i * 0.1) % 1;
            const packetX = node.x + dx * progress;
            const packetY = node.y + dy * progress;
            
            ctx.fillStyle = color.replace(/[\d.]+(?=\))/, '0.8');
            ctx.beginPath();
            ctx.arc(packetX, packetY, 1, 0, Math.PI * 2);
            ctx.fill();
          }
        });
      });

      // Draw nodes
      nodes.forEach(node => {
        const pulse = Math.sin(node.pulsePhase) * 0.3 + 0.7;
        
        // Node glow
        const gradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, node.size * 3
        );

        let nodeColor = '';
        switch (node.type) {
          case 'hub':
            nodeColor = '0, 229, 255'; // cyan
            break;
          case 'neural':
            nodeColor = '46, 230, 166'; // green
            break;
          default:
            nodeColor = '255, 122, 0'; // orange
        }

        gradient.addColorStop(0, `rgba(${nodeColor}, ${pulse * 0.8})`);
        gradient.addColorStop(0.5, `rgba(${nodeColor}, ${pulse * 0.3})`);
        gradient.addColorStop(1, `rgba(${nodeColor}, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size * 3, 0, Math.PI * 2);
        ctx.fill();

        // Node core
        ctx.fillStyle = `rgba(${nodeColor}, ${pulse})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fill();

        // Hub special effect
        if (node.type === 'hub') {
          ctx.strokeStyle = `rgba(${nodeColor}, ${pulse * 0.5})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.size * 2, 0, Math.PI * 2);
          ctx.stroke();
        }
      });

      // Neural wave patterns
      if (timeRef.current % 3 < 0.016) { // Every 3 seconds
        const waveNodes = nodes.filter(n => n.type === 'neural');
        if (waveNodes.length > 0) {
          const sourceNode = waveNodes[Math.floor(Math.random() * waveNodes.length)];
          
          // Create expanding wave
          const waveRadius = (timeRef.current % 3) * 100;
          ctx.strokeStyle = 'rgba(46, 230, 166, 0.2)';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(sourceNode.x, sourceNode.y, waveRadius, 0, Math.PI * 2);
          ctx.stroke();
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initNodes();
    animate();

    const handleResize = () => {
      resizeCanvas();
      initNodes();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'transparent' }}
      />
      
      {/* Additional CSS animations overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0, 229, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 229, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              animation: 'gridMove 20s linear infinite'
            }}
          />
        </div>

        {/* Floating data particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-brand-accent1 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}

        {/* Neural pulse rings */}
        {[...Array(5)].map((_, i) => (
          <div
            key={`pulse-${i}`}
            className="absolute border border-brand-accent2/20 rounded-full"
            style={{
              width: `${20 + i * 40}px`,
              height: `${20 + i * 40}px`,
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              animation: `pulse ${2 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes gridMove {
          from { transform: translate(0, 0); }
          to { transform: translate(50px, 50px); }
        }

        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.6;
          }
          33% { 
            transform: translateY(-20px) translateX(10px) scale(1.2);
            opacity: 1;
          }
          66% { 
            transform: translateY(10px) translateX(-5px) scale(0.8);
            opacity: 0.8;
          }
        }

        @keyframes pulse {
          0% { 
            transform: scale(1);
            opacity: 0.3;
          }
          50% { 
            transform: scale(1.5);
            opacity: 0.1;
          }
          100% { 
            transform: scale(2);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}