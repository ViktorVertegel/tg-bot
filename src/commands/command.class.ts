import { Telegraf } from "telegraf";
import { IBotContext } from "../context/context.inteface";

export abstract class Command {
    constructor(public bot: Telegraf<IBotContext>) { }
    
    abstract handle(): void;
}