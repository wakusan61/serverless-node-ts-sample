import { handlerPath } from '@libs/handler-resolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
      {
        eventBridge: {
            schedule : 'cron(15 6 7 5 ? 2022)'
        }
      }
  ],
};