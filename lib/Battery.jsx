import styles from "./styles.jsx";
import cst from "./constants.jsx";
import { run } from 'uebersicht'

function setNotificationState(output){
  if (output.percentage>15 && cst.BATTERY_VARS.BATTERY_REMAINDER_15==false){
    cst.BATTERY_VARS.BATTERY_REMAINDER_15=true  
    cst.BATTERY_VARS.BATTERY_REMAINDER_10=true
    cst.BATTERY_VARS.BATTERY_REMAINDER_5=true
  }
  else if(output.percentage<5){
    if (cst.BATTERY_VARS.BATTERY_REMAINDER_5==true){
      run("osascript -e 'display notification with title \"🔴 Battery Low\" subtitle \"Remaining Time: "+output.remaining+" ("+output.percentage+"% )\" sound name \"Submarine\"'")
      cst.BATTERY_VARS.BATTERY_REMAINDER_5=false
    }  
  }
  else if(output.percentage<10){
    if (cst.BATTERY_VARS.BATTERY_REMAINDER_10==true){
      run("osascript -e 'display notification with title \"🟠 Battery Low\" subtitle \"Remaining Time: "+output.remaining+" ("+output.percentage+"% )\" sound name \"Submarine\"'")
      cst.BATTERY_VARS.BATTERY_REMAINDER_10=false
    }
  }
  else if(output.percentage<15){
    if (cst.BATTERY_VARS.BATTERY_REMAINDER_15==true){
      run("osascript -e 'display notification with title \"🟡 Battery Low\" subtitle \"Remaining Time: "+output.remaining+" ("+output.percentage+"% )\" sound name \"Submarine\"'")
      cst.BATTERY_VARS.BATTERY_REMAINDER_15=false
    }
  }
  else if(output.percentage==100){
    if (cst.BATTERY_VARS.BATTERY_REMAINDER_CHARGED==true){
      run("osascript -e 'display notification with title \"🔋 Battery Charged\" subtitle \"Remaining Time: "+output.remaining+" ("+output.percentage+"% )\" sound name \"Submarine\"'")
      cst.BATTERY_VARS.BATTERY_REMAINDER_CHARGED=false
    }
  }         
}


const render = ({ output }) => {    
  setNotificationState(output);
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
      ><span>{charging==='true' ? "􀋨" : "🔋"}{percentage}%,{remainingTime}</span>        
      </div>
      </div>
      );
  }
  catch(error) {
    return (<div style={{color:styles.colors.red}}>Error</div>)  
  }
  
};

export default render;

