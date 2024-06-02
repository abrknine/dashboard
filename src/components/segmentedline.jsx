import React from 'react';
import { useSpring, animated } from 'react-spring';
//import './SegmentedLine.css'; // Import the CSS file for styles

const SegmentedLine = ({ segments }) => {
  return (
    <div className="flex w-[650px] h-6">
      {segments.map((segment, index) => (
        <Segment key={index} percentage={segment.percentage} color={segment.color} protocol={segment.protocol} />
      ))}
    </div>
  );
};

const Segment = ({ percentage, color, protocol }) => {
  const animatedStyles = useSpring({
    width: `${percentage}%`,
    backgroundColor: color,
    from: { width: '0%', backgroundColor: '#5FD6A4' }, // Initial styles
    config: { tension: 180, friction: 12 }, // Animation configuration
  });

  return <animated.div className="segment" style={animatedStyles} title={`${protocol}: ${percentage.toFixed(2)}%`} />;
};

export default SegmentedLine;
