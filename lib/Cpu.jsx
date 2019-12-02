import styles from "./styles.jsx";

const render = ({ output }) => {
    let usage=parseInt(output.loadAverage/output.cores*100);
  if (typeof output === "undefined") return null;
  return (
    <div style={usage > 30 ? { color: styles.colors.red } : null}>
      <span>C{usage}%,</span>
    </div>
  );
};

export default render;
