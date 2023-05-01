const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;
const target = "https://testapi.factorlabs.io/";

// Serve the static React app
app.use(express.static(path.join(__dirname, "build")));

// Proxy setup
app.use(
  "/v1",
  createProxyMiddleware({
    target: target,
    changeOrigin: true,
  })
);

// Handle any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
