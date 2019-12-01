import styles from "./styles.jsx";

const style = {
  red: styles.colors.red,
  green:styles.colors.green
}

const render = ({ output }) => {	
  if (output == 'Unknown') return <i style={{color:style.red}} class="fa fa-circle"/>;
  return <div><i class="fa fa-circle" style={{color:style.green}}/></div>;
};

export default render;
