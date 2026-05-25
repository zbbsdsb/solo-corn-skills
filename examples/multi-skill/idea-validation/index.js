const { log } = require('../../utils');
const Landing = require('../../single-skill/landing');
const MentalModels = require('../../single-skill/mental-models');
const ProductBuilder = require('../../single-skill/product-builder');

class IdeaValidation {
  constructor(idea) {
    this.idea = idea;
    this.landing = new Landing();
    this.mentalModels = new MentalModels();
    this.productBuilder = new ProductBuilder();
  }

  async validate() {
    log('=' .repeat(60), 'info');
    log('Idea Validation Workflow', 'success');
    log('=' .repeat(60), 'info');
    console.log();

    log('[Phase 1] Clarify idea with Landing Skill', 'info');
    this.landing.clarifyIdea(
      this.idea,
      ['Timeline: 2 weeks', 'Budget: Zero-cost validation'],
      ['10 paid intents', 'Problem validation']
    );
    console.log();

    log('[Phase 2] Analyze with mental models', 'info');
    this.mentalModels.firstPrinciples(this.idea, [
      'Need to develop full product',
      'Need large user base',
      'Fundamental: Find real pain points'
    ]);
    console.log();
    this.mentalModels.inversion('Successfully validate idea');
    console.log();

    log('[Phase 3] Define MVP with ProductBuilder', 'info');
    this.productBuilder.writePRD(
      'Validation Version: ' + this.idea,
      ['Validate problem exists', 'Get user feedback'],
      ['As a user, I can express my pain points'],
      ['Problem research', 'Simple feedback']
    );
    console.log();

    this.landing.mvpDefinition([
      { name: 'Research survey', priority: 'must' },
      { name: 'Pre-registration page', priority: 'must' },
      { name: 'Full product', priority: 'won\'t' }
    ]);
    console.log();

    log('Validation plan complete!', 'success');
    return { validated: true, nextSteps: ['Start research', 'Collect feedback'] };
  }
}

if (require.main === module) {
  const validator = new IdeaValidation('AI Smart Customer Service Assistant');
  validator.validate();
}

module.exports = IdeaValidation;
