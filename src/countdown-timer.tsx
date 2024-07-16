import { useState } from "react";

const formatDate = (dateObject) => {
  const minutes = dateObject.getMinutes();
  const seconds = dateObject.getSeconds();
  const paddedSeconds = seconds.toString().padStart(2, "0");
  return `${minutes}:${paddedSeconds}`;
};

export default function CountdownTimer() {
  const fiveMinutes = new Date(0, 0, 0, 0, 5);
  const [timeRemaining, setTimeRemaining] = useState(fiveMinutes);
  return (
    <div>
      <h1>{formatDate(timeRemaining)}</h1>
      <div>
        <button>Start</button>
        <button>Stop</button>
        <button>Reset</button>
      </div>
    </div>
  );
}
