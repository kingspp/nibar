import styles from "./styles.jsx";
import cst from "./constants.jsx";
import {sendNotification} from './utils.jsx'

function updateWeatherStatus(status, icon){
    if (cst.WEATHER_STATUS=="")
        cst.WEATHER_STATUS=status
    else if(cst.WEATHER_STATUS!=status){
        sendNotification("Weather Update", icon+" "+status, "")
        cst.WEATHER_STATUS=status
    }
}

const render = ({output}) => {
    try {  
        var [status, weather] = output.split("|")                
        var [icon, temp, wind, metric] = weather.split(" ");
        updateWeatherStatus(status, icon);
        var tempColor = "", windColor = "";
        let t = parseInt(temp.replace("°C", ""));
        if (t < 0)
           tempColor = styles.colors.lightblue;
       else if (t < -8)
        tempColor = styles.colors.darkblue;
    else
        tempColor = null;

    wind = parseInt(wind.slice(1));
    if (wind > 20)
        windColor = styles.colors.red;
    else if (wind > 35)
        windColor = styles.colors.darkred;
    else
        windColor = null;
    if (output == 0) return null;
    return <div>{icon}&nbsp;<span style={{color: tempColor}}>{temp}</span>&nbsp;<span
    style={{color: windColor}}>{wind}{metric}</span></div>;
}
catch(error) {
    console.log(error);
    return (<div style={{color:styles.colors.red}}>Error</div>)  
}

};

export default render;

