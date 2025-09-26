// FIX: Created a simple, stylized CSS animation of a robotic arm, intended for visual flair in views like the surgical schedule.
import React from 'react';
import './RoboticArmAnimation.css';

const RoboticArmAnimation: React.FC = () => {
  return (
    <div className="robotic-arm-container">
      <div className="robotic-arm-base"></div>
      <div className="robotic-arm-segment1">
        <div className="robotic-arm-segment2">
          <div className="robotic-arm-gripper">
            <div className="gripper-finger left"></div>
            <div className="gripper-finger right"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = `
.robotic-arm-container {
    width: 200px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
}

.robotic-arm-base {
    width: 40px;
    height: 10px;
    background-color: #6B7280; /* gray-500 */
    border-radius: 4px 4px 0 0;
}

.robotic-arm-segment1 {
    width: 10px;
    height: 80px;
    background-color: #9CA3AF; /* gray-400 */
    position: absolute;
    bottom: 10px;
    transform-origin: bottom center;
    animation: arm-sway1 8s ease-in-out infinite;
    border-radius: 4px;
}

.robotic-arm-segment2 {
    width: 10px;
    height: 60px;
    background-color: #D1D5DB; /* gray-300 */
    position: absolute;
    top: -55px;
    left: 0;
    transform-origin: bottom center;
    animation: arm-sway2 8s ease-in-out infinite;
    animation-delay: -0.2s;
    border-radius: 4px;
}

.robotic-arm-gripper {
    position: absolute;
    top: -15px;
    left: -5px;
    width: 20px;
    height: 10px;
    transform-origin: center;
}

.gripper-finger {
    width: 4px;
    height: 12px;
    background-color: #6B7280; /* gray-500 */
    position: absolute;
    border-radius: 2px;
}

.gripper-finger.left {
    left: 4px;
    transform-origin: top center;
    animation: grip-left 4s ease-in-out infinite alternate;
}

.gripper-finger.right {
    right: 4px;
    transform-origin: top center;
    animation: grip-right 4s ease-in-out infinite alternate;
}

@keyframes arm-sway1 {
    0%, 100% { transform: rotate(-15deg); }
    50% { transform: rotate(15deg); }
}

@keyframes arm-sway2 {
    0%, 100% { transform: rotate(25deg); }
    50% { transform: rotate(-25deg); }
}

@keyframes grip-left {
    0% { transform: rotate(-20deg); }
    100% { transform: rotate(10deg); }
}

@keyframes grip-right {
    0% { transform: rotate(20deg); }
    100% { transform: rotate(-10deg); }
}
`;

// Inject styles into the document head
const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);


export default RoboticArmAnimation;
