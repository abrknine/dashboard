import React from 'react';

const SegmentedLine = ({ segments }) => {
  console.log(segments);
  return (
    <div className="flex w-[650px] h-4">
      {segments.map((segment, index) => (
        <div 
          key={index} 
          className={`h-full`} 
          style={{ 
            width: `${segment.percentage}%`, 
            backgroundColor: segment.color 
          }}
          title={segments.protocol}
        />
      ))}
    </div>
  );
};

export default SegmentedLine;
