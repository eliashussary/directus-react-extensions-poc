import React from "react";
export const DebuggerInput = (props) => {
  return (
    <div>
      <input
        onChange={(e) => {
          e.preventDefault();
          props.input(e.target.value);
        }}
        value={props.value}
      />
      <br />
      <pre>{JSON.stringify(props, null, "\t")}</pre>
    </div>
  );
};
