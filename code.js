import React, { useState } from 'react';
import raftingImage from 'https://images.app.goo.gl/dN4JGZPGPfeUvPxz9';

const ActivitySelector = () => {
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState('');

  const handleActivitySelect = (activity) => {
    if (selectedActivities.includes(activity)) {
      setSelectedActivities(selectedActivities.filter((act) => act !== activity));
    } else {
      if (selectedActivities.length < 3) {
        setSelectedActivities([...selectedActivities, activity]);
      } else {
        console.log('You can only select up to three activities.');
      }
    }
  };

  const handleDifficultySelect = (difficulty) => {
    setSelectedDifficulty(difficulty);
  };

  return (
    <div>
      <h2>Select 3 Activities and Difficulty</h2>
      <div>
        <h3>Activities</h3>
        <div>
          <label>
            <input
              type="checkbox"
              checked={selectedActivities.includes('Rafting')}
              onChange={() => handleActivitySelect('Rafting')}
            />
            Rafting
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedActivities.includes('Paragliding')}
              onChange={() => handleActivitySelect('Paragliding')}
            />
            Paragliding
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedActivities.includes('Cycling')}
              onChange={() => handleActivitySelect('Cycling')}
            />
            Cycling
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedActivities.includes('Trekking')}
              onChange={() => handleActivitySelect('Trekking')}
            />
            Trekking
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedActivities.includes('Scuba Driving')}
              onChange={() => handleActivitySelect('Scuba Driving')}
            />
            Scuba Driving
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedActivities.includes('Bike Riding')}
              onChange={() => handleActivitySelect('Bike Riding')}
            />
            Bike Riding
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedActivities.includes('Cliff Jumping')}
              onChange={() => handleActivitySelect('Cliff Jumping')}
            />
            Cliff Jumping
          </label>
        </div>
      </div>
      <div>
        <h3>Select Activity Difficulty That You Like</h3>
        <h2>It is established fact that a reader will distract</h2>
        <div>
          <label>
            <input
              type="radio"
              name="difficulty"
              value="Beginner"
              checked={selectedDifficulty === 'Beginner'}
              onChange={() => handleDifficultySelect('Beginner')}
            />
            Beginner
          </label>
          <label>
            <input
              type="radio"
              name="difficulty"
              value="Intermediate"
              checked={selectedDifficulty === 'Intermediate'}
              onChange={() => handleDifficultySelect('Intermediate')}
            />
            Intermediate
          </label>
          <label>
            <input
              type="radio"
              name="difficulty"
              value="Advanced"
              checked={selectedDifficulty === 'Advanced'}
              onChange={() => handleDifficultySelect('Advanced')}
            />
            Advanced
          </label>
        </div>
      </div>
      <button>SUBMIT</button>
      <button>SKIP</button>
      <div>
      </div>
    </div>
  );
};

export default ActivitySelector;