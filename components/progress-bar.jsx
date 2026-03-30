import React from 'react';

const ProgressBar = ({ progress }) => {
  // Ensure the value stays between 0 and 100
  const clampedProgress = Math.min(100, Math.max(0, progress));

  const containerStyles = {
    height: 20,
    width: '100%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: '10px 0',
    overflow: 'hidden' // Ensures filler stays within rounded corners
  };

  const fillerStyles = {
    height: '100%',
    width: `${clampedProgress}%`,
    backgroundColor: "#006a4d", // Lloyds-style Green
    borderRadius: 'inherit',
    textAlign: 'right',
    transition: 'width 0.5s ease-in-out', // Smooth animation on change
  };

  const labelStyles = {
    padding: 10,
    color: 'white',
    fontWeight: 'bold',
    fontSize: '12px'
  };

  return (
    <div 
      style={containerStyles} 
      role="progressbar" 
      aria-valuenow={clampedProgress} 
      aria-valuemin="0" 
      aria-valuemax="100"
    >
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${clampedProgress}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
