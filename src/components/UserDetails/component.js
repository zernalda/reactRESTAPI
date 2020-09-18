import React from "react";
import PropTypes from "prop-types";
import "./UserDetails.css";
import Logo from '../../assets/DJBX_Black.png'

const UserDetails = ({ userImage, displayName }) => (
  <div className="user-details-container">
    <img style={{backgroundColor:"green"}} alt="user" className="user-image" src={Logo} />
    <p className="user-name">{displayName}</p>
  </div>
);


UserDetails.propTypes = {
  userImage: PropTypes.string,
  displayName: PropTypes.string
};

export default UserDetails;
