import React, { Component, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import FolderIcon from "@mui/icons-material/Folder";

export default function FolderCard({ folder_obj }) {
  return (
    <div className="col">
      <Link to={`/folder/${folder_obj.id}`} style={{textDecoration: "none"}}>
        <div className="card" style={{ height: "50px" }}>
          <div className="card-body">
            <FolderIcon sx={{ color: "white" }} />
            <div className="card-title">{folder_obj.name}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}