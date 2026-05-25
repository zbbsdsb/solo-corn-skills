const { log } = require('../../utils');

class Landing {
  constructor() {
    this.stages = ['clarify', 'firstPrinciples', 'prototype', 'validate'];
  }

  clarifyIdea(idea, constraints, successCriteria) {
    log('=== Idea Clarification ===', 'info');
    log(`Idea: ${idea}`, 'info');
    log('Constraints:', 'info');
    constraints.forEach(c => log(`  - ${c}`, 'warn'));
    log('Success criteria:', 'info');
    successCriteria.forEach(s => log(`  - ${s}`, 'success'));
    return { idea, constraints, successCriteria };
  }

  firstPrinciplesDeconstruction(idea) {
    log('=== First Principles Deconstruction ===', 'info');
    log(`Core question: ${idea}`, 'info');
    const assumptions = ['Must do X', 'Need Y resources', 'Users will Z'];
    log('Challenging assumptions:', 'info');
    assumptions.forEach(a => log(`  ? ${a}`, 'info'));
    return { idea, assumptions };
  }

  mvpDefinition(features) {
    log('=== MVP Definition ===', 'info');
    log('Candidate features:', 'info');
    features.forEach(f => log(`  - ${f.name} (${f.priority})`, f.priority === 'must' ? 'success' : 'info'));
    const mvp = features.filter(f => f.priority === 'must');
    log('MVP features:', 'success');
    mvp.forEach(f => log(`  ✓ ${f.name}`, 'success'));
    return mvp;
  }

  validationPlan(methods) {
    log('=== Validation Plan ===', 'info');
    methods.forEach((m, i) => log(`${i + 1}. ${m.name}: ${m.description}`, 'info'));
    return methods;
  }

  iterate(feedback) {
    log('=== Iteration ===', 'info');
    log('Collecting feedback:', 'info');
    feedback.forEach(f => log(`  - ${f}`, 'info'));
    return feedback;
  }

  execute(idea) {
    log('Starting landing process...', 'success');
    this.clarifyIdea(idea, ['Timeline: 3 months', 'Budget: 100K'], ['User validation', 'Prototype available']);
    console.log();
    this.firstPrinciplesDeconstruction(idea);
    console.log();
    this.mvpDefinition([
      { name: 'Core functionality', priority: 'must' },
      { name: 'User authentication', priority: 'must' },
      { name: 'Advanced reporting', priority: 'should' },
      { name: 'Social sharing', priority: 'could' }
    ]);
  }
}

if (require.main === module) {
  const landing = new Landing();
  log('Idea landing example', 'success');
  log('=' .repeat(50), 'info');
  landing.execute('Build an AI writing assistant');
}

module.exports = Landing;
