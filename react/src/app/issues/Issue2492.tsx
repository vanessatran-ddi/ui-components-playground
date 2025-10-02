import {
  GoabTextArea,
  GoabFormItem,
  GoabCallout,
  GoabButton
} from "@abgov/react-components";
import { useState } from "react";
import {
  GoabTextAreaOnChangeDetail,
  GoabTextAreaOnBlurDetail
} from "@abgov/ui-components-common";

export const Issue2492 = () => {
  // TextArea values
  const [blurTextAreaValue, setBlurTextAreaValue] = useState("");
  const [basicTextAreaValue, setBasicTextAreaValue] = useState("");

  // Event tracking
  const [blurEventCount, setBlurEventCount] = useState(0);
  const [lastBlurValue, setLastBlurValue] = useState("");
  const [lastBlurName, setLastBlurName] = useState("");
  const [changeEventCount, setChangeEventCount] = useState(0);
  const [lastChangeValue, setLastChangeValue] = useState("");

  // Timestamps
  const [lastBlurTime, setLastBlurTime] = useState<Date | null>(null);
  const [lastChangeTime, setLastChangeTime] = useState<Date | null>(null);

  const handleTextAreaChange = (detail: GoabTextAreaOnChangeDetail) => {
    console.log('TextArea Change Event:', detail);
    setChangeEventCount(prev => prev + 1);
    setLastChangeValue(detail.value);
    setLastChangeTime(new Date());
    setBlurTextAreaValue(detail.value);
  };

  const handleTextAreaBlur = (detail: GoabTextAreaOnBlurDetail) => {
    console.log('TextArea Blur Event:', detail);
    setBlurEventCount(prev => prev + 1);
    setLastBlurValue(detail.value);
    setLastBlurName(detail.name);
    setLastBlurTime(new Date());
  };

  const resetCounters = () => {
    setBlurEventCount(0);
    setChangeEventCount(0);
    setLastBlurValue("");
    setLastBlurName("");
    setLastChangeValue("");
    setLastBlurTime(null);
    setLastChangeTime(null);
  };

  const getTimeDiff = (): string => {
    if (lastBlurTime && lastChangeTime) {
      const diff = lastBlurTime.getTime() - lastChangeTime.getTime();
      return `${diff}ms`;
    }
    return 'N/A';
  };

  const formatTime = (date: Date | null): string => {
    if (!date) return 'N/A';
    return date.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      fractionalSecondDigits: 3
    });
  };

  return (
    <>
      <h1>Issue #2492 - Add onBlur Event for TextArea</h1>

      <p><strong>Problem:</strong> TextArea component was missing onBlur event support, making it inconsistent with other form controls.</p>
      <p><strong>Solution:</strong> Added onBlur event that fires when the textarea loses focus, providing name and value in the event detail.</p>

      <div style={{ margin: "2rem 0" }}>
        <h2>Basic TextArea with onBlur Event</h2>

        <GoabFormItem label="Type some text and click away to trigger blur" mb="m">
          <GoabTextArea
            name="blurTextArea"
            value={blurTextAreaValue}
            placeholder="Type here and click outside to trigger blur event"
            rows="4"
            onChange={handleTextAreaChange}
            onBlur={handleTextAreaBlur}
          />
        </GoabFormItem>

        <GoabFormItem label="Another TextArea to test focus switching" mb="m">
          <GoabTextArea
            name="basicTextArea"
            value={basicTextAreaValue}
            placeholder="Click here to blur the first textarea"
            rows="3"
            onChange={(detail) => setBasicTextAreaValue(detail.value)}
          />
        </GoabFormItem>
      </div>

      <div style={{
        margin: "2rem 0",
        padding: "1rem",
        background: "#e7f3ff",
        borderLeft: "4px solid #0081a2"
      }}>
        <h3>Event Tracking Dashboard</h3>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1rem",
          margin: "1rem 0"
        }}>
          <div>
            <strong>onChange Events:</strong> {changeEventCount}
            <br />
            <small>Last value: {lastChangeValue || "None"}</small>
            <br />
            <small>Time: {formatTime(lastChangeTime)}</small>
          </div>

          <div>
            <strong>onBlur Events:</strong> {blurEventCount}
            <br />
            <small>Last value: {lastBlurValue || "None"}</small>
            <br />
            <small>Name: {lastBlurName || "None"}</small>
            <br />
            <small>Time: {formatTime(lastBlurTime)}</small>
          </div>
        </div>

        <div style={{ marginTop: "1rem" }}>
          <strong>Time between last change and blur:</strong> {getTimeDiff()}
        </div>

        <GoabButton
          type="tertiary"
          onClick={resetCounters}
          mt="m"
        >
          Reset Counters
        </GoabButton>
      </div>

      <GoabCallout type="information" heading="Testing Instructions" mb="l">
        <ol>
          <li>Click into the first textarea and start typing - observe onChange events firing</li>
          <li>Click outside the textarea or tab away - observe onBlur event firing once</li>
          <li>Note that blur provides both the field name and current value</li>
          <li>Try switching between the two textareas to test focus behavior</li>
          <li>Check browser console for detailed event information</li>
        </ol>
      </GoabCallout>

      <div style={{
        margin: "2rem 0",
        padding: "1rem",
        background: "#f7fafc",
        borderLeft: "4px solid #4299e1"
      }}>
        <h3>Expected Behavior</h3>
        <ul>
          <li>onBlur should fire once when focus leaves the textarea</li>
          <li>Event detail should contain: name (field name) and value (current text)</li>
          <li>onChange fires on each keystroke, onBlur only when losing focus</li>
          <li>Blur event should work consistently across all frameworks</li>
        </ul>
      </div>
    </>
  );
};