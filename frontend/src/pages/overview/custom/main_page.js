import React from 'react';
import Goal_Location from ".././subcomponents/metrics/goal_location";
import Robot_State from ".././subcomponents/metrics/robot_state";
import Metric_Misc from ".././subcomponents/metrics/metrics_misc";
import Breakbeams from ".././subcomponents/sensors/breakbeams";
import IMU from ".././subcomponents/sensors/imu";
import Ultrasonic from ".././subcomponents/sensors/ultrasonic";
import GPS from ".././subcomponents/sensors/gps";
import Cams from ".././subcomponents/sensors/cams";
import Wheel_Motors from ".././subcomponents/sensors/wheel_motor";
import Battery_Comp from ".././subcomponents/battery_comp";
import "./main_page.css"
import PropTypes from 'prop-types';



const Main_Page = ({ filters }) => {
  if (!filters) {
    return null;
  }
  return (
      <div className="main-content">
        {filters.metrics.goal_location && <Goal_Location />}
        {filters.metrics.robot_state && <Robot_State />}
        {filters.metrics.metrics_misc && <Metric_Misc />}
        {filters.sensors.breakbeams && <Breakbeams />}
        {filters.sensors.imu && <IMU />}
        {filters.sensors.ultrasonic && <Ultrasonic />}
        {filters.sensors.gps && <GPS />}
        {filters.sensors.cams && <Cams />}
        {filters.sensors.wheel_motor && <Wheel_Motors />}
        {filters.battery.battery && <Battery_Comp />}
      </div>
  );
};


Main_Page.propTypes = {
  filters: PropTypes.object.isRequired,
};

export default Main_Page;