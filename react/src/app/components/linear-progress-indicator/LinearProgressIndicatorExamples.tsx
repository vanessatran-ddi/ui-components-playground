import React, { useState, useEffect } from "react";
import { GoabLinearProgress, GoabButton } from "@abgov/react-components";

export const LinearProgressIndicatorExamples = () => {
  // Auto-incrementing progress
  const [autoProgress, setAutoProgress] = useState(0);

  // Controlled progress
  const [controlledProgress, setControlledProgress] = useState(50);

  // Show/hide percentage
  const [showPercentage, setShowPercentage] = useState(true);

  // Indeterminate mode
  const [showIndeterminate, setShowIndeterminate] = useState(false);

  // Auto-increment effect
  useEffect(() => {
    const interval = setInterval(() => {
      setAutoProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + 10;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Handlers for controlled progress
  const incrementProgress = () => {
    if (controlledProgress < 100) {
      setControlledProgress(controlledProgress + 10);
    }
  };

  const decrementProgress = () => {
    if (controlledProgress > 0) {
      setControlledProgress(controlledProgress - 10);
    }
  };

  const resetProgress = () => {
    setControlledProgress(0);
  };

  const setProgressTo = (value: number) => {
    setControlledProgress(value);
  };

  const togglePercentageDisplay = () => {
    setShowPercentage(!showPercentage);
  };

  const toggleIndeterminate = () => {
    setShowIndeterminate(!showIndeterminate);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Linear Progress Indicator</h1>

      <h2>Basic Examples</h2>

      <h3>Static Progress (0%)</h3>
      <GoabLinearProgress progress={0} />

      <h3>Static Progress (25%)</h3>
      <GoabLinearProgress progress={25} />

      <h3>Static Progress (50%)</h3>
      <GoabLinearProgress progress={50} />

      <h3>Static Progress (75%)</h3>
      <GoabLinearProgress progress={75} />

      <h3>Static Progress (100%)</h3>
      <GoabLinearProgress progress={100} />

      <h2>Auto-Incrementing Progress</h2>
      <p>This progress bar auto-increments every second:</p>
      <GoabLinearProgress progress={autoProgress} />
      <p>Current value: {autoProgress}%</p>

      <h2>Controlled Progress</h2>
      <p>Control the progress with buttons:</p>
      <GoabLinearProgress progress={controlledProgress} />
      <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
        <GoabButton onClick={decrementProgress}>-10%</GoabButton>
        <GoabButton onClick={incrementProgress}>+10%</GoabButton>
        <GoabButton onClick={() => setProgressTo(50)}>Set to 50%</GoabButton>
        <GoabButton onClick={resetProgress}>Reset</GoabButton>
      </div>
      <p>Current value: {controlledProgress}%</p>

      <h2>Progress without Percentage Display</h2>
      <p>You can hide the percentage display using showPercentage={false}:</p>
      <GoabLinearProgress progress={50} showPercentage={false} />

      <h2>Toggle Percentage Display</h2>
      <GoabLinearProgress
        progress={75}
        showPercentage={showPercentage}
      />
      <div style={{ marginTop: "10px" }}>
        <GoabButton onClick={togglePercentageDisplay}>
          Toggle Percentage (Currently: {showPercentage ? "Shown" : "Hidden"})
        </GoabButton>
      </div>

      <h2>Indeterminate Progress (Ping Pong Effect)</h2>
      <p>When progress is null or undefined, the progress bar shows a "ping pong" animation:</p>
      <GoabLinearProgress
        progress={showIndeterminate ? null : 50}
        showPercentage={false}
      />
      <div style={{ marginTop: "10px" }}>
        <GoabButton onClick={toggleIndeterminate}>
          Toggle Mode (Currently: {showIndeterminate ? "Indeterminate" : "Determinate (50%)"})
        </GoabButton>
      </div>

      <h2>Edge Cases</h2>

      <h3>Progress Beyond 100% (should clamp to 100%)</h3>
      <GoabLinearProgress progress={150} />

      <h3>Negative Progress (should show indeterminate)</h3>
      <GoabLinearProgress progress={-1} />

      <h3>With Test ID</h3>
      <GoabLinearProgress
        progress={50}
        testId="test-linear-progress"
      />
      <p style={{ fontStyle: "italic" }}>
        This progress bar has testId="test-linear-progress" for automated testing
      </p>

      <h2>Different Widths</h2>
      <p>The progress bar should adapt to its container width:</p>

      <div style={{ width: "200px", border: "1px solid #ccc", padding: "10px" }}>
        <p>200px container:</p>
        <GoabLinearProgress progress={60} />
      </div>

      <div style={{ width: "400px", border: "1px solid #ccc", padding: "10px", marginTop: "10px" }}>
        <p>400px container:</p>
        <GoabLinearProgress progress={60} />
      </div>

      <div style={{ width: "100%", border: "1px solid #ccc", padding: "10px", marginTop: "10px" }}>
        <p>Full width container:</p>
        <GoabLinearProgress progress={60} />
      </div>
    </div>
  );
};