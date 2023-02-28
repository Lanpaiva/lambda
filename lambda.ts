import { APIGatewayProxyHandler } from "aws-lambda";

export const hello: APIGatewayProxyHandler = async (event, context) => {
    try {
        const name = event.queryStringParameters?.name || "World";
        const response = {
            statusCode: 200,
            body: JSON.stringify({
                message: `Hello, ${name}!`,
            }),
        };
        return response;
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: "Internal server error",
            }),
        };
    }
};