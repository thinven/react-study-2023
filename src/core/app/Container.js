import React, { useEffect } from "react";

function Container({ children }) {
  //===========================================================================
  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child, {
      // 추가 프로퍼티
    })
  );
  //===========================================================================
  return <>{childrenWithProps}</>;
}

export default Container;
