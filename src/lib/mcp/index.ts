import { defineMcp } from "@lovable.dev/mcp-js";
import echoTool from "./tools/echo";

export default defineMcp({
  name: "app-mcp",
  title: "App MCP",
  version: "0.1.0",
  instructions: "Tools exposed by this app. Use `echo` to verify connectivity.",
  tools: [echoTool],
});