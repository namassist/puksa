import { useState, useEffect, ReactNode } from "react";

interface TypingOutputProps {
  children: ReactNode;
  speed?: number;
  onComplete?: () => void;
}

export const TypingOutput = ({ children, speed = 5, onComplete }: TypingOutputProps) => {
  const [displayedContent, setDisplayedContent] = useState<string>("");
  const [isComplete, setIsComplete] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  // Convert ReactNode to string for typing animation
  const getTextContent = (node: ReactNode): string => {
    if (typeof node === "string") return node;
    if (typeof node === "number") return String(node);
    if (!node) return "";
    
    if (Array.isArray(node)) {
      return node.map(getTextContent).join("");
    }
    
    if (typeof node === "object" && "props" in node) {
      const element = node as React.ReactElement;
      return getTextContent(element.props.children);
    }
    
    return "";
  };

  const fullText = getTextContent(children);

  useEffect(() => {
    if (displayedContent.length < fullText.length) {
      const timeout = setTimeout(() => {
        // Type multiple characters at once for faster animation
        const charsToAdd = Math.min(speed, fullText.length - displayedContent.length);
        setDisplayedContent(fullText.slice(0, displayedContent.length + charsToAdd));
      }, 10);
      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
      onComplete?.();
    }
  }, [displayedContent, fullText, speed, onComplete]);

  // Cursor blink effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // When typing is complete, show the actual React content for proper styling
  if (isComplete) {
    return <div className="animate-fade-in">{children}</div>;
  }

  return (
    <div className="font-mono whitespace-pre-wrap">
      <span className="text-foreground">{displayedContent}</span>
      <span 
        className={`inline-block w-2 h-4 bg-green ml-0.5 ${showCursor ? 'opacity-100' : 'opacity-0'}`}
        style={{ verticalAlign: 'middle' }}
      />
    </div>
  );
};
