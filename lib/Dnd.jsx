import styles from "./styles.jsx";

const style = {
  color: styles.colors.red
}

const render = ({ output }) => {
	try {  
		if (output == 0) return null;
  return <div style={style}>􀆺</div>;
  }
  	catch(error) {
    	return (<div style={{color:styles.colors.red}}>Error</div>)  
  }  
  
};

export default render;
