import { SNSHandler } from "aws-lambda"

const snsHello : SNSHandler = async (event) => {
  console.log(`Hello ${event.Records[0].Sns.Message}`);
}

export const main = snsHello