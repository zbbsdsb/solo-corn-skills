# Strategic Decision - Strategic Decision Example

## Overview
Framework tools for strategic analysis and decision-making.

## Included Frameworks
- **SWOT Analysis**: Strengths, Weaknesses, Opportunities, Threats
- **Porter's Five Forces**: Industry competitive analysis
- **Value Proposition**: Customer value positioning
- **Market Sizing**: TAM/SAM/SOM estimation
- **Scenario Planning**: Multi-scenario forecasting

## Usage
```bash
node index.js
```

## Example Code
```javascript
const StrategicDecision = require('./index');
const sd = new StrategicDecision();

sd.swot({
  strengths: ['Technology leadership'],
  weaknesses: ['Limited funding'],
  opportunities: ['Market growth'],
  threats: ['Intense competition']
});
```
