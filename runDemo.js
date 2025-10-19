import fs from 'fs';
import { LangGraphAgent } from './langGraphAgent.js';

const agent = new LangGraphAgent('./config/agentConfig.json');
const payload = JSON.parse(fs.readFileSync('./sampleInput.json', 'utf-8'));

const main = async () => {
  const result = await agent.execute(payload);
  fs.writeFileSync('./outputLog.json', JSON.stringify(result, null, 2));
  console.log('\n--- Demo Complete. Output written to outputLog.json ---');
};

main();
