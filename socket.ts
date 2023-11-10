import { Server as HttpServer } from "http";
import { Server, Socket } from "socket.io";

export const socket: Record<string, Socket> = {};

export function connect(server: HttpServer): void {
  const io: Server<Socket> = new Server(server);
  io.on("connection", (client: Socket) => {
    console.log("[socket] Connected");
    socket["io"] = client;
  });
}
