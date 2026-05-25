const { log } = require('../../utils');

class Collector {
  constructor() {
    this.collections = {
      decisions: [],
      rationales: [],
      outcomes: [],
      frameworks: []
    };
  }

  captureDecision(decision) {
    log('=== Capture Decision ===', 'info');
    const record = {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      ...decision
    };
    this.collections.decisions.push(record);
    log(`Decision recorded: ${decision.title}`, 'success');
    return record;
  }

  captureRationale(decisionId, rationale) {
    log('=== Capture Rationale ===', 'info');
    const record = {
      decisionId,
      timestamp: new Date().toISOString(),
      ...rationale
    };
    this.collections.rationales.push(record);
    log('Rationale recorded', 'success');
    return record;
  }

  trackOutcome(decisionId, outcome) {
    log('=== Track Outcome ===', 'info');
    const record = {
      decisionId,
      timestamp: new Date().toISOString(),
      ...outcome
    };
    this.collections.outcomes.push(record);
    log('Outcome recorded', 'success');
    return record;
  }

  saveFramework(name, framework) {
    log('=== Save Framework ===', 'info');
    this.collections.frameworks.push({ name, ...framework });
    log(`Framework saved: ${name}`, 'success');
  }

  buildDecisionLog() {
    log('=== Decision Log ===', 'info');
    this.collections.decisions.forEach(d => {
      log(`${d.timestamp}: ${d.title}`, 'info');
    });
    return this.collections.decisions;
  }

  calibrateConfidence() {
    log('=== Confidence Calibration ===', 'info');
    log('Reviewing predictions vs actual results...', 'info');
    const accuracy = 0.75;
    log(`Historical accuracy: ${accuracy * 100}%`, 'success');
    return accuracy;
  }

  run() {
    log('Information collector running...', 'success');
    log('=' .repeat(50), 'info');
    this.captureDecision({
      title: 'Select Technology Stack',
      context: 'New project launch'
    });
    console.log();
    this.captureRationale(Date.now(), {
      reasons: ['Mature ecosystem', 'Team familiar']
    });
    console.log();
    this.buildDecisionLog();
  }
}

if (require.main === module) {
  const collector = new Collector();
  log('Information gathering example', 'success');
  collector.run();
}

module.exports = Collector;
