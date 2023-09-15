import React, { useMemo } from "react";
import { Routes, Route } from "react-router-dom";

import { NotFoundPage } from "pages";
import { RoutList } from "./RoutList";

function Routing(props) {
  //===========================================================================
  //===========================================================================
  const routListComp = useMemo(() => {
    return RoutList.map((item, idx) => (
      <Route
        key={idx}
        exact
        path={item.path}
        element={<item.component test={"test"} />}
      />
    ));
  }, [RoutList]);
  //===========================================================================
  return (
    <>
      <Routes>
        {routListComp}
        <Route element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default Routing;
