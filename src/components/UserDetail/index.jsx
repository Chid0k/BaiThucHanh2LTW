import React from "react";
import {Typography} from "@mui/material";

import "./styles.css";
import {useParams, Link} from "react-router-dom";
import models from "../../modelData/models";

/**
 * Define UserDetail, a React component of Project 4.
 */
function UserDetail() {

    function fetchUserDetails(userId) {
      const listUser = models.userListModel();
      return listUser.map(function(user) {
        if (user._id === userId) {
          return (
            <div key={user._id}>
              <p>ID: {user._id}</p>
              <p>Name: {user.first_name} {user.last_name}</p>
              <p>Location: {user.location}</p>
              <p>Description: {user.description}</p>
              <p>Occupation: {user.occupation}</p>
              <Link to={`/photos/${user._id}`}>My Photos</Link>
            </div>
          )
        }
      });
    }

    const user = useParams();
    return (
        <>
          <Typography variant="body1">
            This should be the UserDetail view of the PhotoShare app. Since it is
            invoked from React Router the params from the route will be in property match.
            So this should show details of user: {user.userId}.
            You can fetch the model for the user from models.userModel.
            {fetchUserDetails(user.userId)}
          </Typography>
        </>
    );
}

export default UserDetail;
