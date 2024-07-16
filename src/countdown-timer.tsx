import { useState } from "react";

const fiveMinutes = new Date(0, 0, 0, 0, 5);

const minutes = fiveMinutes.getMinutes();
const seconds = fiveMinutes.getSeconds();

console.log(`${minutes}:${seconds}`);

const CountdownTimer = () => <div>Add your timer here!</div>;

export default CountdownTimer;
