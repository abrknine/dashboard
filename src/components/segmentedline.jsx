import React from 'react';

const SegmentedLine = ({ segments }) => {
  return (
    <div className="flex w-[650px] h-6">
      {segments.map((segment, index) => (
        <div 
          key={index} 
          className="h-full" 
          style={{ 
            width: `${segment.percentage}%`, 
            backgroundColor: segment.color 
          }}
          title={`${segment.protocol}: ${segment.percentage.toFixed(2)}%`}
        />
      ))}
    </div>
  );
};

export default SegmentedLine;
