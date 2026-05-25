# Collector - Information Gathering Example

## Overview
Tools for collecting, organizing, and reviewing decisions and information.

## Core Features
- **Decision Capture**: Record decision content and context
- **Rationale Recording**: Preserve reasoning process
- **Outcome Tracking**: Track actual results
- **Framework Preservation**: Store decision frameworks
- **Decision Log**: Historical records
- **Confidence Calibration**: Compare predictions vs actual results

## Usage
```bash
node index.js
```

## Example Code
```javascript
const Collector = require('./index');
const collector = new Collector();

collector.captureDecision({
  title: 'Select Technology Stack',
  context: 'New project launch'
});
```
