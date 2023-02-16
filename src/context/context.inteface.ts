import { Context } from "telegraf";

export interface SessinonData {
    courseLike: boolean;
}

export interface IBotContext extends Context {
    session: SessinonData;
}