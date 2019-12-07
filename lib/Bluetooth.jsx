import styles from "./styles.jsx";

const render = ({ output }) => {	
	try {  
		if (output == 0) return null;
  		return <div><i className="fa fa-bluetooth-b"/></div>;
  }
  	catch(error) {
    	return (<div style={{color:styles.colors.red}}>Error</div>)  
  }
  
};

export default render;
