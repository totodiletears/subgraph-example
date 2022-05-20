import { Message } from "../generated/schema";
import { NewMessage } from "../generated/Board/Board";

export function handleBoardUpdated(event: NewMessage): void {
    let message = new Message(event.params.id.toHex());
    message.sender = event.params.sender.toHex();
    message.message = event.params.message;
    message.block = event.params.block;
    message.save();
}