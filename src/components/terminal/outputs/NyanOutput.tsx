import { useEffect, useState } from "react";

const NYAN_FRAMES = [
  `
+      o     +              o   
    +             o     +       +
o          +                    
    o  +           +        +   
+        o     o       +        o
-_-_-_-_-_-_-_,------,      o   
_-_-_-_-_-_-_-|   /\\_/\\         
-_-_-_-_-_-_-~|__( ^ .^)  +     +
_-_-_-_-_-_-_-""  ""           
+      o         o   +       o  
    o        +                  
+           o          +      + 
`,
  `
    +        o          +     o 
+       o          +           +
     +          o     +         
o        +             o        
+     o         +          o    
_-_-_-_-_-_-_-,------,    +     
-_-_-_-_-_-_-_|   /\\_/\\   o     
_-_-_-_-_-_-_~|__( ^ .^)        +
-_-_-_-_-_-_-_""  ""      o     
o        +         +            
    +         o          +    o 
       o           +            
`
];

const RAINBOW_COLORS = [
  "hsl(0, 100%, 60%)",    // Red
  "hsl(30, 100%, 60%)",   // Orange
  "hsl(60, 100%, 60%)",   // Yellow
  "hsl(120, 100%, 60%)",  // Green
  "hsl(200, 100%, 60%)",  // Blue
  "hsl(270, 100%, 60%)",  // Purple
];

export const NyanOutput = () => {
  const [frame, setFrame] = useState(0);
  const [rainbowOffset, setRainbowOffset] = useState(0);

  useEffect(() => {
    const frameInterval = setInterval(() => {
      setFrame(prev => (prev + 1) % NYAN_FRAMES.length);
    }, 200);

    const rainbowInterval = setInterval(() => {
      setRainbowOffset(prev => (prev + 1) % RAINBOW_COLORS.length);
    }, 150);

    return () => {
      clearInterval(frameInterval);
      clearInterval(rainbowInterval);
    };
  }, []);

  const colorizeRainbow = (text: string) => {
    return text.split('').map((char, i) => {
      if (char === '-' || char === '_') {
        const colorIndex = (i + rainbowOffset) % RAINBOW_COLORS.length;
        return (
          <span key={i} style={{ color: RAINBOW_COLORS[colorIndex] }}>
            {char}
          </span>
        );
      }
      if (char === 'o' || char === '+') {
        return <span key={i} className="text-yellow">{char}</span>;
      }
      return <span key={i} className="text-foreground">{char}</span>;
    });
  };

  return (
    <div className="font-mono text-xs">
      <p className="text-pink mb-2">{"// Nyan nyan nyan~"}</p>
      <pre className="leading-tight">
        {NYAN_FRAMES[frame].split('\n').map((line, i) => (
          <div key={i}>{colorizeRainbow(line)}</div>
        ))}
      </pre>
      <p className="text-subtext mt-2">
        <span className="animate-pulse">♪</span> Nyanyanyanyanyanyanya! <span className="animate-pulse">♪</span>
      </p>
    </div>
  );
};
