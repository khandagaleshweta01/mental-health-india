// MedicalTests.js
import React from 'react';

function MedicalTests() {
  // Example medical tests data
  const medicalTests = [
    { name: 'Test 1', description: 'Description of Test 1' },
    { name: 'Test 2', description: 'Description of Test 2' },
    // Add more test data as needed
  ];

  return (
    <div>
      <h2>Medical Tests</h2>
      <ul>
        {medicalTests.map((test, index) => (
          <li key={index}>
            <h3>{test.name}</h3>
            <p>{test.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MedicalTests;
