import React from 'react';

export default function B01(props) {
  const { input, color } = props;
 
  return (
    <div style={{ border: "1px solid #ccc" }}>
      <p style={{ color: color?.name }}>{input?.name}</p>
    </div>
  )
}
