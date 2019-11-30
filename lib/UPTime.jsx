import styles from "./styles.jsx";

const render = ({ output }) => {
  if (typeof output === "undefined") return null;
  return (
    <div style={output > 10 ? { color: styles.colors.red } : null}>
      <i class="fa fa-user"/>&nbsp;<span>{output.replace(',','')}</span>
    </div>
  );
};

export default render;
