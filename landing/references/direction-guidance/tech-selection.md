# Technology Selection Guidance

## Core Principles

### Keep It Simple (KISS)

**Rule**: Choose the simplest solution that solves the problem.

**Decision Tree**:
```
Is there a built-in solution?
├─ Yes → Use built-in
└─ No → Is there a battle-tested library?
         ├─ Yes → Use library
         └─ No → Build minimal custom solution
```

**Simple Checklist**:
- [ ] Can a non-expert understand the solution in 5 minutes?
- [ ] Does the solution have fewer than 3 dependencies?
- [ ] Can you debug this at 2 AM when tired?
- [ ] Will this work in 5 years without maintenance?

**Examples**:
| Complex Choice | Simple Alternative |
|----------------|-------------------|
| Kubernetes cluster | Single server or managed container service |
| GraphQL API | REST endpoints |
| MongoDB | PostgreSQL with JSON columns |
| Custom auth system | OAuth 2.0 / Managed auth service |

### Make It Right (MIT)

**Rule**: Prefer correctness over cleverness; prefer maintainability over optimization.

**Priority Order**:
1. **Correct** - Does it produce the right output?
2. **Clear** - Can others understand it?
3. **Fast** - Is it fast enough?
4. **Small** - Does it minimize dependencies?

**Code Quality Gates**:
- [ ] No single-line complex logic that needs comments
- [ ] Variable names are self-documenting
- [ ] Functions do one thing
- [ ] Error paths are handled explicitly

## Technology Debt Assessment

### Debt Categories

| Level | Description | Action |
|-------|-------------|--------|
| **Low** | 1-2 quick fixes | Accept, document, address in next sprint |
| **Medium** | Requires refactor | Schedule within 2 sprints |
| **High** | Blocks features | Must fix before new development |
| **Critical** | Production risk | Immediate fix required |

### Debt Inventory Template

```
Feature/Layer: _______________
Type: [ ] Architectural | [ ] Implementation | [ ] Testing | [ ] Documentation
Impact: [ ] Performance | [ ] Security | [ ] Maintainability | [ ] Scalability
Effort to Fix: [ ] <1 day | [ ] 1-5 days | [ ] 1-2 weeks | [ ] >2 weeks
Risk of Delay: [ ] Low | [ ] Medium | [ ] High | [ ] Critical
```

### Debt Decision Matrix

| Effort vs Impact | Low Effort | High Effort |
|-------------------|------------|-------------|
| **High Impact** | Do first | Plan carefully, do soon |
| **Low Impact** | Do if time permits | Avoid, refactor later |

## Selection Criteria Weighting

### For Startup/MVP Phase

| Criteria | Weight | Rationale |
|----------|--------|-----------|
| Time to Market | 30% | Speed of validation |
| Operational Simplicity | 25% | Limited DevOps resources |
| Learning Curve | 20% | Team velocity |
| Cost | 15% | Budget constraints |
| Scalability | 10% | Can be addressed later |

### For Growth Phase

| Criteria | Weight | Rationale |
|----------|--------|-----------|
| Reliability | 30% | User base growth |
| Scalability | 25% | Traffic increase |
| Maintainability | 20% | Team expansion |
| Performance | 15% | User experience |
| Cost Efficiency | 10% | Unit economics |

### For Enterprise Phase

| Criteria | Weight | Rationale |
|----------|--------|-----------|
| Security | 30% | Compliance requirements |
| Supportability | 25% | SLA requirements |
| Integration | 20% | Ecosystem compatibility |
| Vendor Stability | 15% | Long-term partnership |
| Total Cost | 10% | Budget management |

## Quick Decision Framework

### The 10-Minute Test

For each technology option, answer:

1. **Purpose**: What problem does this solve? (1 sentence)
2. **Alternatives**: What else did you consider? (list 2-3)
3. **Adoption**: How many companies use this in production? (>100 = good)
4. **Maintenance**: When was last update? (<6 months = active)
5. **Exit Cost**: How hard to replace if needed? (low = good)

### Rejection Criteria

Automatically reject if:
- No production users or case studies
- No documentation or unclear API
- Unmaintained for >12 months
- Requires PhD to operate
- Single point of failure in operations
- License conflicts with project needs

### Acceptance Criteria

Automatically accept if:
- Solves the exact problem without overhead
- Industry standard with proven track record
- Team has existing expertise
- Clear migration path exists
- Active community and commercial support

## Common Technology Patterns

### Layer-Specific Recommendations

**Frontend**:
- Web: React/Vue/Svelte (pick one, stick with it)
- Mobile: React Native or Flutter for cross-platform
- Desktop: Electron only if Web tech is needed; otherwise native

**Backend**:
- <100 users: Single server, any language
- 100-10K users: Simple hosting (Railway, Render, Vercel)
- 10K-1M users: Load balancer + multiple instances
- >1M users: Dedicated infrastructure team needed

**Database**:
- Relational data: PostgreSQL
- Document storage: PostgreSQL with JSONB
- Caching: Redis
- Search: PostgreSQL full-text or Elasticsearch
- Time series: TimescaleDB or InfluxDB

**Infrastructure**:
- <10 services: Monolith with clear modules
- 10-50 services: Kubernetes or managed containers
- >50 services: Service mesh consideration

## Anti-Patterns to Avoid

1. **Not Invented Here**: Building what exists and works
2. **Over-Engineering**: Using microservices for todo app
3. **Premature Optimization**: Optimizing before measuring
4. **Analysis Paralysis**: Spending weeks on tech choices
5. **Hype-Driven Development**: Chasing latest trends
6. **Vendor Lock-in Fear**: Avoiding good tools due to future "what-ifs"

## Next Steps

After selection, document:
1. Why this technology was chosen (for future reference)
2. Known limitations and workarounds
3. Migration path if technology fails
4. Team knowledge gaps to address
5. Review date (typically 6-12 months)
