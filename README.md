# SkylarIQ Lang Graph Agent (Node.js, ESM)

Owner: Vasudev Patil

This repository contains a Node.js (ESM) implementation of the SkylarIQ Lang Graph Agent for a customer support workflow with 11 stages (deterministic and non-deterministic).

## Run (Terminal Demo)
```bash
node -v            # ensure Node.js is installed
npm run demo       # runs src/runDemo.js
```

## Files
- config/agentConfig.json — stage graph configuration
- src/langGraphAgent.js — agent implementation
- src/runDemo.js — demo runner (creates outputLog.json)
- sampleInput.json — sample payload

The agent logs each stage, ability, and MCP client, and finally writes a structured outputLog.json.
