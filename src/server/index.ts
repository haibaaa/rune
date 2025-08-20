import { Plugboard } from "plugboard.io";

const plugboard = new Plugboard("./src/server/events", true, {
    cors: { origin: "*" },
})

plugboard.onConnection = socket => {
    console.log("New connection:", socket.id);
};


plugboard.start(3000, () => {
    console.log("Server is running at port 3000");
});
