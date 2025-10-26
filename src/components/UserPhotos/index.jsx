import React from "react";
import { Typography } from "@mui/material";

import "./styles.css";
import {useParams, Link } from "react-router-dom";
import models from "../../modelData/models";
import images from "../../images/images";


/**
 * Define UserPhotos, a React component of Project 4.
 */
function UserPhotos () {
    const user = useParams();
    const photos = models.photoOfUserModel(user.userId);

    function displayPhotos() {
      return photos.map(function(photo) {
        const id = photo._id;
        const file = photo.file_name;
        const date = photo.date_time;
        const comments = photo.comments;

        function displayComments() {
          if (!comments || comments.length === 0) {
            return <p>No comments</p>;
          }
          return comments.map(function(e) {
            return (
              <div key={e._id}>
                <h4><Link to={`/users/${e.user._id}`}>Name: {e.user.first_name} {e.user.last_name}</Link></h4>
                <h5>Time: {e.date_time}</h5>
                <p>{e.comment}</p>
              </div>
            );
          });
        }

        console.log(photo);
        return (
          <div key={id}>
            <h3>Photo ID: {id}</h3>
            <p>File Name: {file}</p>
            <img src={images[file]} alt={file}></img>
            <p>Date Taken: {date}</p>
            <h3>Comments:</h3>
            <ul>{displayComments()}</ul>
          </div>
        );
      });
    }
    

    return (
      <Typography variant="body1">
        This should be the UserPhotos view of the PhotoShare app. Since it is
        invoked from React Router the params from the route will be in property
        match. So this should show details of user:
        {user.userId}. You can fetch the model for the user
        from models.photoOfUserModel(userId):
        {displayPhotos()}
      </Typography>
    );
}

export default UserPhotos;
