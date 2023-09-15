import React from "react";
import { useNavigate } from "react-router-dom";
import Result from "antd/lib/result";
import Button from "antd/lib/button";
import Empty from "antd/lib/empty";

function NotFoundPage() {
  //===========================================================================
  const navigate = useNavigate();
  const moveHome = () => {
    navigate("/");
  };
  //===========================================================================
  return (
    <>
      <Result
        status="404"
        title="404"
        subTitle="ㅍㅔ이지가 존재하지 않아요. ㅜ.ㅜ"
        extra={
          <Button onClick={moveHome} type="primary">
            Back Home
          </Button>
        }
      />
      <div className="mt100 none">
        <Empty
          imageStyle={{
            height: 160,
          }}
          description="Page Not Found ㅜ.ㅜ"
        />
      </div>
    </>
  );
}

export default NotFoundPage;
