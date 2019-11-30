import styles from "./styles.jsx";

const style = {
  color: styles.colors.red
}

const render = ({ output }) => {	
  if (output == 'muted:false') return null;
  return <div>🔇</div>;
};

export default render;
