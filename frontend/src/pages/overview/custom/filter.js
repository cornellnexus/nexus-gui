import React, { useState } from 'react';
import "./filter.css";
import PropTypes from 'prop-types';


const Filter = ({ filters, updateFilters }) => {
  if (!filters) {
    return null;
  }
  if (!updateFilters) {
    return null;
  }
  const toggleVisibility = (section, component) => {
    updateFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      if (component) {
        updatedFilters[section][component] = !prevFilters[section][component];
      } else {
        const sectionState = !prevFilters[section][Object.keys(prevFilters[section])[0]];
        Object.keys(updatedFilters[section]).forEach(
          (key) => (updatedFilters[section][key] = sectionState)
        );
      }
      return updatedFilters;
    });
  };


  const toggleSection = (section) => {
    toggleVisibility(section, '');
  };


  const toggleSectionCheckbox = (section) => {
    toggleVisibility(section); // Toggle the section when the checkbox is clicked
  };

  return (
    <div className="filter-sidebar">
      <div className="section">
        <label><h2>
          <input
            type="checkbox"
            checked={filters.metrics && filters.metrics.goal_location && filters.metrics.robot_state && filters.metrics.metrics_misc}
            onChange={() => toggleSectionCheckbox('metrics')}
          />
          Metrics
        </h2></label>
        {filters.metrics && (
          <div>
            <label>
              <input
                type="checkbox"
                checked={filters.metrics.goal_location}
                onChange={() => toggleVisibility('metrics', 'goal_location')}
              />
              Goal Location
            </label>
            <label>
              <input
                type="checkbox"
                checked={filters.metrics.robot_state}
                onChange={() => toggleVisibility('metrics', 'robot_state')}
              />
              Robot State
            </label>
            <label>
              <input
                type="checkbox"
                checked={filters.metrics.metrics_misc}
                onChange={() => toggleVisibility('metrics', 'metrics_misc')}
              />
              Miscellanious
            </label>
          </div>
        )}
      </div>
      <div className="section">
        <label><h2>
          <input
            type="checkbox"
            checked={filters.sensors && filters.sensors.breakbeams && filters.sensors.gps && filters.sensors.cams && filters.sensors.imu && filters.sensors.ultrasonic && filters.sensors.wheel_motor}
            onChange={() => toggleSectionCheckbox('sensors')}
          />
          Sensors
        </h2></label>
        {filters.sensors && (
          <div>
            <label>
              <input
                type="checkbox"
                checked={filters.sensors.breakbeams}
                onChange={() => toggleVisibility('sensors', 'breakbeams')}
              />
              Breakbeams
            </label>
            <label>
              <input
                type="checkbox"
                checked={filters.sensors.gps}
                onChange={() => toggleVisibility('sensors', 'gps')}
              />
              GPS
            </label>
            <label>
              <input
                type="checkbox"
                checked={filters.sensors.cams}
                onChange={() => toggleVisibility('sensors', 'cams')}
              />
              Cams
            </label>
            <label>
              <input
                type="checkbox"
                checked={filters.sensors.imu}
                onChange={() => toggleVisibility('sensors', 'imu')}
              />
              IMU
            </label>
            <label>
              <input
                type="checkbox"
                checked={filters.sensors.ultrasonic}
                onChange={() => toggleVisibility('sensors', 'ultrasonic')}
              />
              Ultrasonic
            </label>
            <label>
              <input
                type="checkbox"
                checked={filters.sensors.wheel_motor}
                onChange={() => toggleVisibility('sensors', 'wheel_motor')}
              />
              Wheel Motors
            </label>
          </div>
        )}
      </div>

      <div className="section">
        <h2 onClick={() => toggleSection('battery', ' ')}> Battery</h2>
        {filters.battery && (
          <div>
            <label>
              <input
                type="checkbox"
                checked={filters.battery.battery}
                onChange={() => toggleVisibility('battery', 'battery')}
              />
              Battery
            </label>
          </div>
        )}
      </div>
    </div >
  );
};


Filter.propTypes = {
  filters: PropTypes.object.isRequired,
  updateFilters: PropTypes.func.isRequired,
};



export default Filter;

