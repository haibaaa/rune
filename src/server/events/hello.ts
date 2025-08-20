import { ASocket } from "plugboard.io";

export class test extends ASocket<[string]> {
    override async run() {
        if (!this.socket || !this.io || !this.args) {
            throw new Error("Socket or IO or Args is not available");
        }
        
        const name = this.args[0];
        
        this.socket.emit("hello", 1, `Hi, ${name}!`);
    }
}
