import { useState } from "react";
import { GoabButton, GoabCircularProgress } from "@abgov/react-components";

export const ProgressIndicatorExamples = () => {
  const [visible, setVisible] = useState(false);

  function onClick() {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 3000);
  }

  return (
    <>
      <GoabButton onClick={onClick}>
        Show Fullscreen
      </GoabButton>
      <GoabCircularProgress variant="fullscreen" size="large" message="Loading message..." visible={visible}></GoabCircularProgress>
    </>
  )
}
