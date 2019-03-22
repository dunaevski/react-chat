import React from "react";
import MUIAvata from "@material-ui/core/Avatar";
import getColor from "../utils/color-from";
import titleInitials from "../utils/title-initials";

const Avatar = ({ colorFrom, childern, ...rest }) => {
  return (
    <MUIAvata style={{ backgroundColor: getColor(colorFrom) }} {...rest}>
      {titleInitials(childern)}
    </MUIAvata>
  );
};

export default Avatar;
