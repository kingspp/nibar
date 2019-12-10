import styles from "./styles.jsx";
import cst from "./constants.jsx";
import {sendNotification} from './utils.jsx'

function setNotificationState(output){
  if (output.percentage>15 && cst.BATTERY_VARS.BATTERY_REMAINDER_15==false){
    cst.BATTERY_VARS.BATTERY_REMAINDER_15=true  
    cst.BATTERY_VARS.BATTERY_REMAINDER_10=true
    cst.BATTERY_VARS.BATTERY_REMAINDER_5=true
    cst.BATTERY_VARS.BATTERY_REMAINDER_CHARGED=true
  }
  else if(output.percentage<5 && output.charging=="false"){
    if (cst.BATTERY_VARS.BATTERY_REMAINDER_5==true){
      sendNotification("🔴 Battery Low", "Remaining Time: "+output.remaining+" ("+output.percentage+"% )", "")
      cst.BATTERY_VARS.BATTERY_REMAINDER_5=false
    }  
  }
  else if(output.percentage<10 && output.charging=="false"){
    if (cst.BATTERY_VARS.BATTERY_REMAINDER_10==true){
      sendNotification("🟠 Battery Low", "Remaining Time: "+output.remaining+" ("+output.percentage+"% )", "")      
      cst.BATTERY_VARS.BATTERY_REMAINDER_10=false
    }
  }
  else if(output.percentage<15 && output.charging=="false"){
    if (cst.BATTERY_VARS.BATTERY_REMAINDER_15==true){
      sendNotification("🟡 Battery Low", "Remaining Time: "+output.remaining+" ("+output.percentage+"% )", "")            
      cst.BATTERY_VARS.BATTERY_REMAINDER_15=false
    }
  }
  else if(output.percentage==100 && output.charging=="true"){
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
    console.log(error);
    return (<div style={{color:styles.colors.red}}>Error</div>)  
  }
  
};

export default render;

