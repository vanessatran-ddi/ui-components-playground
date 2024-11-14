// import {GoADrawer} from "@abgov/react-components/experimental";
import { useState } from "react";

export const Drawer = () => {
  const [open, setOpen] = useState<boolean>(false);

  function toggleOpen() {
    setOpen(!open)      ;
  }

  return (
    <>
      <button onClick={toggleOpen}>Show</button>
      {/*<GoADrawer open={open} position="left" maxSize="400px" onClose={toggleOpen}>*/}
      {/*  <div style={{margin: "50rem 0"}}>*/}
      {/*    <h1>Test</h1>*/}
      {/*  </div>*/}
      {/*</GoADrawer>*/}
    </>
  )
}
