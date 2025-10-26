import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";
import models from "../../modelData/models"; // đường dẫn tuỳ project của bạn
import "./styles.css";

/**
 * Define TopBar, a React component.
 */
function TopBar() {
  const location = useLocation();
  const [contextText, setContextText] = useState("");

  console.log("Location:", models.userModel("57231f1a30e4351f4e9f4bd7"));

  function updateContextText() {
    const data = location.pathname.split("/")[1];
    const params = location.pathname.split("/")[2];
    const user = models.userModel(params);
    if (data === "users") {
      setContextText("User: " + user.first_name + " " + user.last_name);
    }
    else if (data === "photos") {
      setContextText(`Photos of: ${user.first_name} ${user.last_name}`);
    }
    else{
      setContextText("");
    }
  }
  useEffect(() => {
    updateContextText();
  }, [location]);

  return (
    <AppBar className="topbar-appBar" position="fixed">
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        
        <Typography variant="h6" color="inherit">
          Đỗ Đức Chính
        </Typography>

        <Typography variant="h6" color="inherit">
          {contextText}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
