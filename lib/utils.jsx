import { run } from 'uebersicht';

function sendNotification(title, subtitle, content){
	run("osascript -e 'display notification \""+content+"\" with title \""+title+"\" subtitle \""+subtitle+"\" sound name \"Submarine\"'")
	console.log("Running command")
}

export {sendNotification};