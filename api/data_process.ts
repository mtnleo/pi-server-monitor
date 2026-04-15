import { fetchServerState } from "./data_fetch"

export const dataProcess = async () => {
    const data = await fetchServerState();

    if (!data) {
        console.error("Unable to fetch server state");
        return null;
    }

    const latestBeat = data[0]['created_at'];
    const now = new Date();
    const beatTime = new Date(latestBeat);
    const timeDiff = (now.getTime() - beatTime.getTime()) / 1000; // Time difference in seconds

    const lastTemperature = data[0]['cpu_temperature'];
    const averageTemperature = data.reduce((sum, entry) => sum + entry.cpu_temperature, 0) / data.length;

    console.log("Latest Beat Time: ", beatTime);
    console.log("Current Time: ", now);
    console.log("Time Difference (seconds): ", timeDiff);
    console.log("Last Temperature: ", lastTemperature);
    console.log("Average Temperature: ", averageTemperature);

    // Determine server status based on time difference
    const serverStatus = timeDiff < 660 ? "on" : "off"; // Assuming a beat every minute indicates the server is on
    console.log("Server Status: ", serverStatus);

    // Process the data as needed
    console.log("Processed Data: ", data);
    
    return { serverStatus, lastTemperature, averageTemperature, latestBeat };

}