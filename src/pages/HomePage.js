import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "antd/lib/button";

function HomePage() {
  const navigate = useNavigate();
  const handleClickLink = (path) => {
    navigate(path);
  };
  return (
    <>
      <div>HomePage</div>
      <div>
        <Button onClick={() => handleClickLink("/d8121")}>프루이 샘플</Button>
      </div>
    </>
  );
}

export default HomePage;
