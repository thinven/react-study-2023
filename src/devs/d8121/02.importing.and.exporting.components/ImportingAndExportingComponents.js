import React, { useEffect, useState } from "react";

function ImportingAndExportingComponents() {

  const [num, setNum] = useState(0);

  useEffect(() => {
    const increaseNum = async () => {
      console.log('set Num:', num);
      setNum(num + 1);
    }
    increaseNum();
  }, [])

  useEffect(() => {
    console.log('detect num change');
  }, [num])


  return (
    <>
      <div>aa</div>
    </>
  );
}

export default ImportingAndExportingComponents;
