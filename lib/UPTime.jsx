import styles from "./styles.jsx";

const render = ({ output }) => {
  if (typeof output === "undefined") return null;
  return (
    <div style={output > 10 ? { color: styles.colors.red } : null}>
      <span>{output.replace(',','')}</span>
    </div>
  );
};

export default render;
