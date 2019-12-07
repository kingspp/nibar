import styles from "./styles.jsx";

const style = {
  red: styles.colors.red,
  green:styles.colors.green
}

const render = ({ output }) => {
try {  
		if (output == 'Unknown') return <i style={{color:style.red}} class="fa fa-circle"/>;
  return <div><i class="fa fa-circle" style={{color:style.green}}/></div>;
  }
  	catch(error) {
    	return (<div style={{color:styles.colors.red}}>Error</div>)  
  }	
  
};

export default render;
