import styles from "./styles.jsx";

const render = ({ output }) => {
  let usage=parseInt(output.used/output.total*100);
  if (typeof output === "undefined") return null;
  return (
    <div style={usage > 70 ? { color: styles.colors.red } : null}>
      <span >R{usage}%,</span>
    </div>
  );
};

export default render;
