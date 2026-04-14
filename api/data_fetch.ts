import client from "@/api/client";

export const fetchServerState = async () => {
    const { data, error } = await client.from("heartbeat")
                                        .select("*")
                                        .order("created_at", { ascending: false })
                                        .limit(10)
    if (error) {
        console.error("Error fetching server state:", error);
        return null;
    }

    console.log("Data: ", data);
    return data;
}