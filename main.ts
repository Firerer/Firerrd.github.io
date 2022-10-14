import { serve } from "std/http/server.ts";


// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  serve((req: Request) => new Response("Hello World"));
}
