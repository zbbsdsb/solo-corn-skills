# Architecture Decision Framework

## Monolith vs Microservices

### Decision Matrix

| Factor | Monolith | Microservices |
|--------|----------|---------------|
| Team Size | 1-10 | 10+ |
| Startup Time | <2 weeks | >4 weeks |
| Initial Complexity | Low | High |
| Debugging | Simple | Complex |
| Deployment | Single unit | Multiple services |
| Scaling | Whole app | Per-service |
| Tech Flexibility | Limited | Full |

### When to Choose Monolith

**Choose Monolith when**:
- Team is <10 developers
- Startup/MVP phase
- Tight deadline
- Limited DevOps expertise
- Budget constraints
- Unclear domain boundaries
- Traffic <10K users/day

**Monolith Success Patterns**:
```
Project Structure:
├── modules/
│   ├── users/
│   │   ├── handlers.go
│   │   ├── store.go
│   │   └── types.go
│   ├── orders/
│   │   ├── handlers.go
│   │   ├── store.go
│   │   └── types.go
│   └── shared/
│       ├── middleware.go
│       └── config.go
└── main.go
```

### When to Choose Microservices

**Choose Microservices when**:
- Team is >10 developers with clear ownership
- Multiple independent teams
- Different scaling needs per feature
- Polyglot requirements
- Strong domain separation
- Mission-critical isolation needs
- Traffic >100K users/day

### Migration Path: Monolith → Modular → Services

```
Phase 1: Modular Monolith
├── Clear module boundaries
├── Independent deployable units (when ready)
└── Shared contracts and interfaces

Phase 2: Strangler Fig Pattern
├── New features as services
├── Gradually extract modules
├── Maintain shared database initially
└── Decouple data last
```

## Build vs Buy vs SaaS

### Decision Framework

```
Is this core to your competitive advantage?
├─ Yes → Build it (even if harder)
└─ No → Continue evaluation...
        │
        Is this commoditized functionality?
        ├─ Yes → Use SaaS/Managed service
        └─ No → Continue...
                │
                Do you have unique requirements?
                ├─ Yes → Build or heavily customize
                └─ No → Use open-source library
```

### Category Recommendations

| Category | Recommendation | Rationale |
|----------|---------------|-----------|
| Authentication | SaaS (Auth0, Clerk, Firebase) | Security critical, complex |
| Payments | SaaS (Stripe) | PCI compliance, fraud detection |
| Email | SaaS (SendGrid, Resend) | Deliverability, reputation |
| Storage | Managed (S3, GCS) | Scale, durability |
| Search | Depends: small=PostgreSQL, large=Elasticsearch | Match to scale |
| Analytics | SaaS (Mixpanel, Amplitude) | Visualization, segmentation |
| Monitoring | Open Source + Managed (Datadog) | Required for production |
| CI/CD | SaaS (GitHub Actions) | Infrastructure management |
| Logging | Managed (Datadog, CloudWatch) | Volume, retention |

### Cost Comparison Template

| Approach | Setup Cost | Monthly Cost | Engineering Cost | Total Year 1 |
|---------|------------|--------------|------------------|--------------|
| Build | $X | $Y | E hours × rate | $X + $Y×12 + E×rate |
| Buy | License | License | Integration hours | License×13 + int |
| SaaS | $0 | Subscription | Integration hours | Sub×12 + int |

### Build Decision Checklist

Before building, confirm:
- [ ] No existing solution meets 80%+ of requirements
- [ ] This is a core differentiator
- [ ] Team has relevant expertise
- [ ] Budget allows for maintenance
- [ ] Timeline permits proper development
- [ ] Long-term support is sustainable

## Scalability Considerations

### Scalability Quadrants

```
                    │
   Scale Up         │        Scale Out
   (Vertical)       │        (Horizontal)
         ┌─────────┴─────────┐
         │                   │
High ────┤    Complex        │    Distributed
Cost     │    + Expensive    │    + Cheaper
         │                   │
         ├───────────────────┤
         │                   │
Low ─────┤    Simple         │    Containerized
         │    + Cheap        │    + Orchestrated
         │                   │
         └───────────────────┘
                    │
             Typical MVP
```

### Scaling Triggers

| Metric | Warning | Critical | Action |
|--------|---------|----------|--------|
| Response Time | >200ms | >500ms | Profile, optimize queries |
| CPU Usage | >70% | >85% | Scale up or out |
| Memory | >75% | >90% | Optimize, scale |
| Database | >60% capacity | >80% | Index, cache, shard |
| Error Rate | >1% | >5% | Rollback, investigate |

### Design for Scale, Pay for Scale

**Start Simple**:
```
MVP Architecture (User <10K):
┌─────────────┐
│   Server    │  ← Single instance
│  (App + DB) │
└─────────────┘
```

**When Needed, Scale Components**:
```
Growth Architecture (User 10K-100K):
┌─────────────┐     ┌─────────────┐
│   Load      │────▶│   Server 1  │
│   Balancer  │     └─────────────┘
│             │     ┌─────────────┐
└─────────────┘────▶│   Server 2  │
                    └─────────────┘
                          │
                    ┌─────────────┐
                    │   Database │  ← Read replica
                    │   Primary   │
                    └─────────────┘
```

### The 10x Rule

Only invest in scalability when:
- Current solution is failing (measured)
- Growth is proven, not predicted
- Cost of scaling < revenue impact

**Premature scaling costs**:
- 3x development time
- 10x operational complexity
- 5x debugging difficulty

## Architecture Review Checklist

### Before Architecture Decision

- [ ] Documented requirements
- [ ] Known constraints (budget, time, team)
- [ ] Risk assessment completed
- [ ] Alternatives evaluated
- [ ] Cost-benefit analysis done

### Architecture Decision Record (ADR)

```
# ADR-001: Choose PostgreSQL over MongoDB

## Status
Accepted

## Context
We need a database for user data with relational reporting needs.

## Decision
We will use PostgreSQL.

## Consequences
Positive:
- Strong ACID compliance
- Excellent for complex queries
- Team familiarity

Negative:
- Requires schema migrations
- Less flexible for document storage
```

### Architecture Principles

1. **Appropriate Complexity**: Match architecture to stage
2. **Design for Change**: Make expensive parts replaceable
3. **Observability First**: Know what's happening
4. **Fail Gracefully**: Assume things will break
5. **Automate Operations**: Reduce human error

## Common Architecture Mistakes

1. **Microservices on Day 1**: When monolith suffices
2. **No Caching Strategy**: Database everywhere
3. **Synchronous Everything**: No async processing
4. **Ignoring Security**: Auth at the end
5. **No Observability**: Flying blind
6. **Over-Abstraction**: Complex frameworks for simple tasks
7. **Single Point of Failure**: No redundancy
8. **No Data Strategy**: Schema as afterthought

## Next Steps

1. Define current phase (Startup/Growth/Enterprise)
2. Match architecture to phase
3. Document decisions in ADR format
4. Set scaling thresholds
5. Plan migration path if needed
