// App.js
import React, { useState } from 'react';
import Filter from './filter';
import PropTypes from 'prop-types';
import Main_Page from './main_page';
import Sidebar from '../../../components/sidebar/sidebar';
import "./custom.css";


const Custom = () => {
  const [filters, setFilters] = useState({
    metrics: {
      goal_location: true,
      robot_state: true,
      metrics_misc: true,
    },
    sensors: {
      breakbeams: true,
      gps: true,
      cams: true,
      imu: true,
      ultrasonic: true,
      wheel_motor: true,
    },
    battery: {
      battery: true
    }
  });

  const updateFilters = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="app">
      <div className='sidebar'>
        <Sidebar />
      </div>
      <Filter filters={filters} updateFilters={updateFilters} />
      <Main_Page filters={filters} />
    </div>
  );
};


Custom.propTypes = {
  filters: PropTypes.object.isRequired,
  updateFilters: PropTypes.func.isRequired,
};

export default Custom;
