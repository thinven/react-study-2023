import React from "react";

import Profile from "./Profile";
import ClockPanel from "./ClockPanel";

function PassingPropsToAComponent() {
  return (
    <div>
      <Profile />
      <ClockPanel />
    </div>
  );
}

export default PassingPropsToAComponent;
