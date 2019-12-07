import styles from "./styles.jsx";

const render = ({ output }) => {
  try {
    let charging = output.charging;
    let percentage = output.percentage;
    let remainingTime = output.remaining;  
    return (
      <div>
      <div
      style={
        percentage < 20 && charging == "false"
        ? { color: styles.colors.red }
        : charging=="true"?{ color: styles.colors.green }:null
      }
      ><span>{charging==='true' ? "􀋨" : "B"} {percentage}%, {remainingTime}</span>        
      </div>
      </div>
      );
  }
  catch(error) {
    return (<div style={{color:styles.colors.red}}>Error</div>)  
  }
  
};

export default render;

