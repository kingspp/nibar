import styles from "./styles.jsx";

const style = {
  color: styles.colors.red
}

const render = ({ output }) => {	
		try {  
			if (output == 'muted:false') return null;
  return <div>🔇</div>;
		
  }
  	catch(error) {
  		console.log(error);
    	return (<div style={{color:styles.colors.red}}>Error</div>)  
  }
  
};

export default render;
