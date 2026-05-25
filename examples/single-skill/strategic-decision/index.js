const { log } = require('../../utils');

class StrategicDecision {
  constructor() {
    this.frameworks = {
      swot: this.swot,
      porter: this.porter,
      valueProposition: this.valueProposition,
      marketSizing: this.marketSizing,
      scenarioPlanning: this.scenarioPlanning
    };
  }

  swot(analysis) {
    log('=== SWOT Analysis ===', 'info');
    ['strengths', 'weaknesses', 'opportunities', 'threats'].forEach(key => {
      log(`${key.toUpperCase()}:`, 'info');
      (analysis[key] || []).forEach(item => log(`  - ${item}`, key.includes('strength') || key.includes('opportunity') ? 'success' : 'warn'));
    });
    return analysis;
  }

  porter(industry) {
    log('=== Porter Five Forces Analysis ===', 'info');
    const forces = [
      'Existing competitors',
      'New entrants threat',
      'Substitute products threat',
      'Supplier bargaining power',
      'Buyer bargaining power'
    ];
    forces.forEach((force, i) => log(`${i + 1}. ${force}`, 'info'));
    return { industry, forces };
  }

  valueProposition(customer, needs, solution) {
    log('=== Value Proposition Analysis ===', 'info');
    log(`Target customer: ${customer}`, 'info');
    log(`Pain points: ${needs.join(', ')}`, 'info');
    log(`Solution: ${solution}`, 'success');
    return { customer, needs, solution };
  }

  marketSizing(tam, sam, som) {
    log('=== Market Sizing Analysis ===', 'info');
    log(`TAM (Total Addressable Market): ${tam}`, 'info');
    log(`SAM (Serviceable Addressable Market): ${sam}`, 'info');
    log(`SOM (Serviceable Obtainable Market): ${som}`, 'success');
    return { tam, sam, som };
  }

  scenarioPlanning(base, optimistic, pessimistic) {
    log('=== Scenario Planning ===', 'info');
    log('Base scenario:', 'info');
    log(`  ${base}`, 'info');
    log('Optimistic scenario:', 'success');
    log(`  ${optimistic}`, 'success');
    log('Pessimistic scenario:', 'warn');
    log(`  ${pessimistic}`, 'warn');
    return { base, optimistic, pessimistic };
  }

  makeDecision(options, criteria) {
    log('=== Decision Matrix ===', 'info');
    log('Options:', 'info');
    options.forEach(opt => log(`  - ${opt.name}`, 'info'));
    log('Evaluation criteria:', 'info');
    criteria.forEach(c => log(`  - ${c}`, 'info'));
    return { options, criteria };
  }
}

if (require.main === module) {
  const sd = new StrategicDecision();
  
  log('Strategic decision example', 'success');
  log('=' .repeat(50), 'info');
  
  sd.swot({
    strengths: ['Technology leadership', 'Team experience'],
    weaknesses: ['Limited funding', 'Low brand awareness'],
    opportunities: ['Fast market growth', 'Policy support'],
    threats: ['Intense competition', 'Regulatory changes']
  });
  
  console.log();
  sd.valueProposition('SMEs', ['Reduce cost', 'Improve efficiency'], 'SaaS Solution');
  
  console.log();
  sd.marketSizing('100B', '10B', '1B');
}

module.exports = StrategicDecision;
