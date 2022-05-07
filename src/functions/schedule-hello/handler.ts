import { ScheduledHandler } from "aws-lambda/trigger/cloudwatch-events";

const scheduleHello: ScheduledHandler = async () => {
    console.log('Hello Scheudle');
}

export const main = scheduleHello;