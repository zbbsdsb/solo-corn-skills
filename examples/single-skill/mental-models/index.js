const { log } = require('../../utils');

class MentalModels {
  constructor() {
    this.models = {
      firstPrinciples: this.firstPrinciples,
      inversion: this.inversion,
      secondOrderThinking: this.secondOrderThinking,
      circleOfCompetence: this.circleOfCompetence,
      probabilisticThinking: this.probabilisticThinking
    };
  }

  firstPrinciples(problem, assumptions) {
    log('=== First Principles Analysis ===', 'info');
    log(`Problem: ${problem}`, 'info');
    log('Challenging assumptions:', 'info');
    assumptions.forEach((assumption, index) => {
      log(`  ${index + 1}. ${assumption} → Why must this be true?`, 'info');
    });
    const coreTruths = assumptions.filter(a => a.includes('fundamental') || a.includes('core'));
    log(`Core truths: ${coreTruths.join(', ') || 'Need to redefine'}`, 'success');
    return { problem, coreTruths, assumptions };
  }

  inversion(goal) {
    log('=== Inversion Analysis ===', 'info');
    log(`Goal: ${goal}`, 'info');
    const failures = [
      'Insufficient research',
      'Ignored key risks',
      'Lack of resource preparation',
      'Poor execution plan',
      'No feedback mechanism'
    ];
    log('How to ensure failure?', 'info');
    failures.forEach((f, i) => log(`  ${i + 1}. ${f}`, 'warn'));
    const solutions = failures.map(f => `Avoid: ${f}`);
    log('Solutions:', 'success');
    solutions.forEach((s, i) => log(`  ${i + 1}. ${s}`, 'success'));
    return { goal, failures, solutions };
  }

  secondOrderThinking(action) {
    log('=== Second Order Thinking Analysis ===', 'info');
    log(`Action: ${action}`, 'info');
    const consequences = {
      firstOrder: 'Direct result',
      secondOrder: 'Indirect impact',
      thirdOrder: 'Long-term effects'
    };
    Object.entries(consequences).forEach(([order, desc]) => {
      log(`${order}: ${desc}`, 'info');
    });
    return { action, consequences };
  }

  circleOfCompetence(topic) {
    log('=== Circle of Competence Analysis ===', 'info');
    log(`Topic: ${topic}`, 'info');
    const areas = ['Known', 'Known unknowns', 'Unknown unknowns'];
    areas.forEach(area => log(`  ${area}`, 'info'));
    return { topic, areas };
  }

  probabilisticThinking(scenarios) {
    log('=== Probabilistic Thinking Analysis ===', 'info');
    scenarios.forEach((s, i) => {
      log(`${i + 1}. ${s.name} - Probability: ${s.probability}%`, 'info');
    });
    return scenarios;
  }

  applyModel(modelName, ...args) {
    const model = this.models[modelName];
    if (model) {
      return model.apply(this, args);
    } else {
      log(`Model not found: ${modelName}`, 'error');
      return null;
    }
  }
}

if (require.main === module) {
  const mm = new MentalModels();
  
  log('Mental models toolkit example', 'success');
  log('=' .repeat(50), 'info');
  
  mm.firstPrinciples('How to succeed in entrepreneurship', [
    'Need large amounts of capital',
    'Need perfect product',
    'Need huge team',
    'Fundamental: Solve real problems'
  ]);
  
  console.log();
  mm.inversion('Build a successful product');
  
  console.log();
  mm.secondOrderThinking('Price reduction promotion');
}

module.exports = MentalModels;
