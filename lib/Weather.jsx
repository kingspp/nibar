import styles from "./styles.jsx";


const render = ({output}) => {
    var [icon, temp, wind, metric] = output.split(" ");
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
};

export default render;

