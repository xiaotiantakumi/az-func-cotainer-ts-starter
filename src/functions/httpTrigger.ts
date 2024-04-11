import {
  app,
  HttpRequest,
  HttpResponseInit,
  InvocationContext,
} from "@azure/functions";

export async function httpTrigger(
  request: HttpRequest,
  context: InvocationContext,
): Promise<HttpResponseInit> {
  context.log(`Http function processed request for url "${request.url}"`);

  const name = request.query.get("name") || (await request.text()) || "world";
  const name2 = name + "2";
  console.log(name2);
  const name3 = name2 + "3";
  return { body: `Hello, ${name}!` };
}

app.http("httpTrigger", {
  methods: ["GET", "POST"],
  authLevel: "anonymous",
  handler: httpTrigger,
});
