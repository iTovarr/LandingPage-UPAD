import React from 'react';

const balls = [
  { size: 'w-32 h-32', color: 'bg-upad-yellow',  top: '5%',   left: '3%',   anim: 'animate-float-slow',   delay: '0s'   },
  { size: 'w-20 h-20', color: 'bg-upad-pink',    top: '15%',  left: '91%',  anim: 'animate-float-medium', delay: '1s'   },
  { size: 'w-24 h-24', color: 'bg-upad-green',   top: '40%',  left: '4%',   anim: 'animate-float-fast',   delay: '0.5s' },
  { size: 'w-16 h-16', color: 'bg-upad-orange',  top: '55%',  left: '87%',  anim: 'animate-float-slow',   delay: '2s'   },
  { size: 'w-28 h-28', color: 'bg-upad-purple',  top: '72%',  left: '2%',   anim: 'animate-float-medium', delay: '1.5s' },
  { size: 'w-14 h-14', color: 'bg-upad-blue',    top: '82%',  left: '78%',  anim: 'animate-float-fast',   delay: '0.8s' },
  { size: 'w-18 h-18', color: 'bg-upad-yellow',  top: '30%',  left: '94%',  anim: 'animate-bounce-gentle',delay: '1.2s' },
  { size: 'w-10 h-10', color: 'bg-upad-pink',    top: '90%',  left: '42%',  anim: 'animate-float-slow',   delay: '3s'   },
];

export default function PlayfulBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden"
      aria-hidden="true"
    >
      {balls.map((b, i) => (
        <span
          key={i}
          className={`absolute rounded-full opacity-20 ${b.size} ${b.color} ${b.anim} blur-md`}
          style={{ top: b.top, left: b.left, animationDelay: b.delay }}
        />
      ))}
    </div>
  );
}
