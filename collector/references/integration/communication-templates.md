# Collector Skill - Communication Templates

## Overview

This document provides standardized templates and protocols for skill-to-skill communication involving the Collector skill. These templates ensure consistent, reliable, and well-documented interactions across the SOLO system.

## Table of Contents

1. [Communication Principles](#communication-principles)
2. [Request Templates](#request-templates)
3. [Response Templates](#response-templates)
4. [Error Handling Protocols](#error-handling-protocols)
5. [Communication Examples](#communication-examples)

---

## Communication Principles

### 1.1 Core Principles

| Principle | Description | Application |
|-----------|-------------|-------------|
| **Clarity** | Each message has a clear purpose and structure | Use standardized templates |
| **Completeness** | All necessary context is provided | Include required fields |
| **Idempotency** | Same request produces same result | Include request IDs |
| **Traceability** | All communications can be tracked | Log all exchanges |
| **Graceful Degradation** | Handle failures with useful feedback | Provide error details |

### 1.2 Communication Protocol

```
┌─────────────────────────────────────────────────────────────────┐
│                  MESSAGE EXCHANGE PROTOCOL                      │
│                                                                  │
│  Requester                    Collector                    Other │
│    │                             │                           │   │
│    │───[Request]────────────────▶│                           │   │
│    │                             │                           │   │
│    │                      ┌──────▼──────┐                    │   │
│    │                      │  Validate   │                    │   │
│    │                      └──────┬──────┘                    │   │
│    │                             │                           │   │
│    │                             ▼                           │   │
│    │                      ┌──────────────┐                    │   │
│    │                      │   Process    │◀──────[Query]─────┼───┤
│    │                      └──────┬───────┘                    │   │
│    │                             │                           │   │
│    │                             ▼                           │   │
│    │◀───[Response]──────────────│                           │   │
│    │                             │                           │   │
└─────────────────────────────────────────────────────────────────┘
```

### 1.3 Message Structure

All skill-to-skill messages follow this base structure:

```json
{
  "message_id": "uuid-v4-string",
  "message_type": "request | response | error | notification",
  "timestamp": "ISO-8601 timestamp",
  "sender": {
    "skill_id": "string",
    "instance_id": "string"
  },
  "receiver": {
    "skill_id": "string",
    "instance_id": "string"
  },
  "payload": {},
  "metadata": {
    "correlation_id": "string",
    "reply_to": "string",
    "ttl": 300
  }
}
```

---

## Request Templates

### 2.1 Standard Context Collection Request

```json
{
  "message_id": "msg-uuid-001",
  "message_type": "request",
  "timestamp": "2026-05-19T10:30:00Z",
  "sender": {
    "skill_id": "decision-skill",
    "instance_id": "decision-prod-01"
  },
  "receiver": {
    "skill_id": "collector",
    "instance_id": "collector-prod-01"
  },
  "payload": {
    "request_id": "req-uuid-001",
    "request_type": "context_collection",
    "source_skills": ["web-search", "knowledge-base", "documentation"],
    "target_domain": "software_architecture",
    "parameters": {
      "scope": "medium",
      "depth": "intermediate",
      "time_range": {
        "start": "2025-01-01T00:00:00Z",
        "end": "2026-05-19T23:59:59Z"
      },
      "filters": {
        "relevance_threshold": 0.7,
        "priority_tags": ["microservices", "scalability"],
        "content_types": ["technical_article", "case_study"]
      }
    },
    "context": {
      "current_task": "Design scalable backend architecture",
      "user_intent": "Understanding best practices for microservices",
      "constraints": ["Must support 10k requests/second", "Java-based"]
    },
    "metadata": {
      "requester_skill": "decision-skill",
      "priority": "high",
      "deadline": "2026-05-19T10:35:00Z"
    }
  },
  "metadata": {
    "correlation_id": "corr-uuid-001",
    "reply_to": "/queue/decision-skill/responses",
    "ttl": 300
  }
}
```

### 2.2 Data Gathering Request

```json
{
  "message_id": "msg-uuid-002",
  "message_type": "request",
  "timestamp": "2026-05-19T10:30:00Z",
  "sender": {
    "skill_id": "analysis-skill",
    "instance_id": "analysis-prod-01"
  },
  "receiver": {
    "skill_id": "collector",
    "instance_id": "collector-prod-01"
  },
  "payload": {
    "request_id": "req-uuid-002",
    "request_type": "data_gathering",
    "source_skills": ["database", "metrics-service"],
    "target_domain": "performance_metrics",
    "parameters": {
      "scope": "narrow",
      "depth": "surface",
      "filters": {
        "min_confidence": 0.9,
        "content_types": ["metric_data", "statistics"]
      }
    },
    "context": {
      "current_task": "Retrieve system performance data",
      "user_intent": "Real-time monitoring dashboard"
    },
    "metadata": {
      "requester_skill": "analysis-skill",
      "priority": "normal",
      "correlation_id": "corr-uuid-002"
    }
  },
  "metadata": {
    "correlation_id": "corr-uuid-002",
    "reply_to": "/queue/analysis-skill/responses",
    "ttl": 60
  }
}
```

### 2.3 Information Synthesis Request

```json
{
  "message_id": "msg-uuid-003",
  "message_type": "request",
  "timestamp": "2026-05-19T10:30:00Z",
  "sender": {
    "skill_id": "reasoning-skill",
    "instance_id": "reasoning-prod-01"
  },
  "receiver": {
    "skill_id": "collector",
    "instance_id": "collector-prod-01"
  },
  "payload": {
    "request_id": "req-uuid-003",
    "request_type": "information_synthesis",
    "source_skills": ["web-search", "documentation", "knowledge-base", "external-api"],
    "target_domain": "technology_comparison",
    "parameters": {
      "scope": "broad",
      "depth": "deep",
      "filters": {
        "relevance_threshold": 0.6,
        "priority_tags": ["comparison", "benchmark"]
      }
    },
    "context": {
      "current_task": "Compare cloud database options",
      "user_intent": "Selecting optimal database for production workload",
      "constraints": ["Must support JSON documents", "Managed service preferred"]
    },
    "metadata": {
      "requester_skill": "reasoning-skill",
      "priority": "high",
      "deadline": "2026-05-19T10:45:00Z"
    }
  },
  "metadata": {
    "correlation_id": "corr-uuid-003",
    "reply_to": "/queue/reasoning-skill/responses",
    "ttl": 900
  }
}
```

### 2.4 Streaming Collection Request

```json
{
  "message_id": "msg-uuid-004",
  "message_type": "request",
  "timestamp": "2026-05-19T10:30:00Z",
  "sender": {
    "skill_id": "monitoring-skill",
    "instance_id": "monitoring-prod-01"
  },
  "receiver": {
    "skill_id": "collector",
    "instance_id": "collector-prod-01"
  },
  "payload": {
    "request_id": "req-uuid-004",
    "request_type": "context_collection",
    "source_skills": ["metrics-service", "log-service", "alerting-service"],
    "target_domain": "system_health",
    "parameters": {
      "scope": "medium",
      "depth": "surface",
      "filters": {
        "relevance_threshold": 0.8
      }
    },
    "context": {
      "current_task": "Continuous health monitoring"
    },
    "metadata": {
      "requester_skill": "monitoring-skill",
      "priority": "high",
      "streaming": true,
      "heartbeat_interval_ms": 5000
    }
  },
  "metadata": {
    "correlation_id": "corr-uuid-004",
    "reply_to": "/stream/monitoring-skill/health",
    "ttl": 3600
  }
}
```

---

## Response Templates

### 3.1 Success Response

```json
{
  "message_id": "msg-uuid-101",
  "message_type": "response",
  "timestamp": "2026-05-19T10:31:30Z",
  "sender": {
    "skill_id": "collector",
    "instance_id": "collector-prod-01"
  },
  "receiver": {
    "skill_id": "decision-skill",
    "instance_id": "decision-prod-01"
  },
  "payload": {
    "response_id": "resp-uuid-001",
    "request_id": "req-uuid-001",
    "status": "success",
    "timestamp": "2026-05-19T10:31:30Z",
    "result": {
      "collected_data": {
        "primary_findings": [
          {
            "id": "finding-uuid-001",
            "content": "Microservices architecture enables horizontal scaling through service isolation",
            "source": "web-search",
            "confidence": 0.92,
            "relevance_score": 0.95,
            "metadata": {
              "collected_at": "2026-05-19T10:31:00Z",
              "verification_status": "verified",
              "tags": ["scalability", "microservices", "architecture"]
            }
          }
        ],
        "supporting_evidence": [
          {
            "evidence_id": "evidence-uuid-001",
            "content": "Netflix processes 500+ million API calls daily using microservices",
            "source": "knowledge-base",
            "confidence": 0.95,
            "type": "case_study"
          }
        ],
        "contextual_information": {
          "related_concepts": ["service_mesh", "api_gateway", "containerization"],
          "best_practices": ["single_responsibility", "database_per_service", "async_communication"]
        }
      },
      "synthesis": {
        "summary": "Microservices architecture provides optimal scalability for high-throughput systems. Key success factors include proper service decomposition, independent deployability, and robust communication patterns.",
        "key_insights": [
          "Service isolation enables independent scaling of components",
          "Container orchestration (Kubernetes) simplifies deployment complexity",
          "API gateway pattern centralizes cross-cutting concerns"
        ],
        "relationships": [
          {
            "from": "microservices",
            "to": "horizontal_scaling",
            "relationship_type": "enables",
            "strength": 0.95
          }
        ],
        "confidence_assessment": {
          "overall_confidence": 0.90,
          "calibration_quality": "well_calibrated",
          "uncertainty_factors": ["specific_technology_constraints", "organizational_capabilities"]
        }
      },
      "metadata": {
        "collection_duration_ms": 8500,
        "sources_consulted": ["web-search", "knowledge-base", "documentation"],
        "data_quality_score": 0.88,
        "gaps_identified": []
      }
    },
    "recommendations": {
      "follow_up_actions": [
        {
          "action": "Deep dive into specific technology stack options",
          "priority": "normal",
          "rationale": "High-level understanding established, detailed evaluation needed"
        }
      ],
      "skill_suggestions": ["reasoning-skill", "evaluation-skill"]
    }
  },
  "metadata": {
    "correlation_id": "corr-uuid-001",
    "in_response_to": "msg-uuid-001",
    "processing_time_ms": 8500
  }
}
```

### 3.2 Partial Success Response

```json
{
  "message_id": "msg-uuid-102",
  "message_type": "response",
  "timestamp": "2026-05-19T10:32:00Z",
  "sender": {
    "skill_id": "collector",
    "instance_id": "collector-prod-01"
  },
  "receiver": {
    "skill_id": "analysis-skill",
    "instance_id": "analysis-prod-01"
  },
  "payload": {
    "response_id": "resp-uuid-002",
    "request_id": "req-uuid-002",
    "status": "partial_success",
    "timestamp": "2026-05-19T10:32:00Z",
    "result": {
      "collected_data": {
        "primary_findings": [
          {
            "id": "finding-uuid-002",
            "content": "Average response time: 45ms over last 24 hours",
            "source": "metrics-service",
            "confidence": 0.98,
            "relevance_score": 0.92,
            "metadata": {
              "collected_at": "2026-05-19T10:31:55Z",
              "verification_status": "verified"
            }
          }
        ],
        "supporting_evidence": [],
        "contextual_information": {}
      },
      "synthesis": {
        "summary": "Partial metrics available. Real-time data incomplete due to delayed aggregation.",
        "key_insights": [
          "Response time metrics show stable performance",
          "Detailed breakdown pending data aggregation"
        ],
        "relationships": [],
        "confidence_assessment": {
          "overall_confidence": 0.65,
          "calibration_quality": "miscalibrated",
          "uncertainty_factors": ["incomplete_data", "delayed_aggregation"]
        }
      },
      "metadata": {
        "collection_duration_ms": 2500,
        "sources_consulted": ["metrics-service"],
        "data_quality_score": 0.65,
        "gaps_identified": [
          "Detailed percentile breakdown not available",
          "Historical comparison data pending"
        ]
      }
    },
    "recommendations": {
      "follow_up_actions": [
        {
          "action": "Retry request after 5 minutes for complete data",
          "priority": "normal",
          "rationale": "Data aggregation in progress"
        }
      ],
      "skill_suggestions": []
    }
  },
  "metadata": {
    "correlation_id": "corr-uuid-002",
    "in_response_to": "msg-uuid-002",
    "processing_time_ms": 2500
  }
}
```

### 3.3 Streaming Response (Chunk)

```json
{
  "message_id": "msg-uuid-201",
  "message_type": "response",
  "timestamp": "2026-05-19T10:30:05Z",
  "sender": {
    "skill_id": "collector",
    "instance_id": "collector-prod-01"
  },
  "receiver": {
    "skill_id": "monitoring-skill",
    "instance_id": "monitoring-prod-01"
  },
  "payload": {
    "response_id": "resp-uuid-004",
    "request_id": "req-uuid-004",
    "status": "streaming",
    "chunk_number": 1,
    "total_chunks": null,
    "timestamp": "2026-05-19T10:30:05Z",
    "result": {
      "partial_data": {
        "findings": [
          {
            "id": "health-uuid-001",
            "content": "CPU usage: 45%, Memory: 62%, Disk: 78%",
            "source": "metrics-service",
            "confidence": 0.99,
            "timestamp": "2026-05-19T10:30:00Z"
          }
        ]
      },
      "is_complete": false
    }
  },
  "metadata": {
    "correlation_id": "corr-uuid-004",
    "in_response_to": "msg-uuid-004",
    "heartbeat": true
  }
}
```

---

## Error Handling Protocols

### 4.1 Error Response Template

```json
{
  "message_id": "msg-uuid-301",
  "message_type": "error",
  "timestamp": "2026-05-19T10:31:00Z",
  "sender": {
    "skill_id": "collector",
    "instance_id": "collector-prod-01"
  },
  "receiver": {
    "skill_id": "decision-skill",
    "instance_id": "decision-prod-01"
  },
  "payload": {
    "response_id": "resp-uuid-error-001",
    "request_id": "req-uuid-001",
    "status": "failure",
    "timestamp": "2026-05-19T10:31:00Z",
    "error": {
      "code": "SOURCE_UNAVAILABLE",
      "message": "Primary data source temporarily unavailable",
      "details": {
        "failed_source": "knowledge-base",
        "failure_reason": "connection_timeout",
        "attempted_retries": 3,
        "last_error": "Connection refused after 30000ms"
      },
      "recoverable": true,
      "retry_after_ms": 5000,
      "alternative_suggestions": [
        "Use alternative source: documentation",
        "Reduce scope to exclude unavailable sources",
        "Retry with exponential backoff"
      ]
    }
  },
  "metadata": {
    "correlation_id": "corr-uuid-001",
    "in_response_to": "msg-uuid-001",
    "error_category": "transient",
    "error_severity": "medium"
  }
}
```

### 4.2 Error Code Reference

| Code | Description | Recoverable | Retry Strategy |
|------|-------------|-------------|----------------|
| `INVALID_REQUEST` | Request validation failed | Yes | Fix request and retry |
| `DOMAIN_NOT_SUPPORTED` | Target domain not in scope | No | Choose different domain |
| `SOURCE_UNAVAILABLE` | Required source temporarily unavailable | Yes | Exponential backoff (5s, 10s, 20s) |
| `TIMEOUT` | Collection exceeded time limit | Yes | Retry with reduced scope |
| `INSUFFICIENT_DATA` | Not enough data to satisfy request | Partial | Retry with broader scope |
| `RATE_LIMITED` | API rate limit exceeded | Yes | Wait and retry with backoff |
| `AUTHENTICATION_FAILED` | Source authentication failed | Yes | Refresh credentials and retry |
| `QUOTA_EXCEEDED` | Data quota exceeded | Yes | Wait for quota reset |
| `INTERNAL_ERROR` | Unexpected internal failure | Yes | Retry after delay |
| `CIRCUIT_OPEN` | Circuit breaker triggered | Yes | Wait for circuit reset |

### 4.3 Retry Strategy Template

```json
{
  "retry_policy": {
    "max_retries": 3,
    "backoff_strategy": "exponential",
    "base_delay_ms": 1000,
    "max_delay_ms": 30000,
    "jitter": true,
    "jitter_factor": 0.1,
    "retry_conditions": [
      {
        "error_code": "SOURCE_UNAVAILABLE",
        "action": "retry",
        "delay_multiplier": 2
      },
      {
        "error_code": "TIMEOUT",
        "action": "retry",
        "delay_multiplier": 1.5
      },
      {
        "error_code": "RATE_LIMITED",
        "action": "retry",
        "delay_multiplier": 3
      },
      {
        "error_code": "DOMAIN_NOT_SUPPORTED",
        "action": "fail",
        "delay_multiplier": null
      }
    ]
  }
}
```

### 4.4 Circuit Breaker Configuration

```json
{
  "circuit_breaker": {
    "failure_threshold": 5,
    "failure_window_ms": 60000,
    "recovery_timeout_ms": 300000,
    "half_open_requests": 3,
    "state": "closed",
    "metrics": {
      "failure_count": 2,
      "success_count": 48,
      "last_failure": "2026-05-19T09:45:00Z"
    }
  }
}
```

---

## Communication Examples

### 5.1 Complete Request-Response Cycle

#### Step 1: Initial Request

```json
{
  "message_id": "msg-example-001",
  "message_type": "request",
  "timestamp": "2026-05-19T10:00:00Z",
  "sender": {"skill_id": "reasoning-skill", "instance_id": "reasoning-prod-01"},
  "receiver": {"skill_id": "collector", "instance_id": "collector-prod-01"},
  "payload": {
    "request_id": "req-example-001",
    "request_type": "context_collection",
    "source_skills": ["web-search", "documentation"],
    "target_domain": "machine_learning",
    "parameters": {
      "scope": "medium",
      "depth": "intermediate"
    },
    "context": {
      "current_task": "Evaluate ML frameworks for production deployment"
    },
    "metadata": {
      "requester_skill": "reasoning-skill",
      "priority": "normal"
    }
  },
  "metadata": {
    "correlation_id": "corr-example-001",
    "reply_to": "/queue/reasoning-skill/responses",
    "ttl": 300
  }
}
```

#### Step 2: Validation Acknowledgment

```json
{
  "message_id": "msg-example-002",
  "message_type": "notification",
  "timestamp": "2026-05-19T10:00:01Z",
  "sender": {"skill_id": "collector", "instance_id": "collector-prod-01"},
  "receiver": {"skill_id": "reasoning-skill", "instance_id": "reasoning-prod-01"},
  "payload": {
    "type": "request_accepted",
    "request_id": "req-example-001",
    "estimated_completion": "2026-05-19T10:02:00Z"
  },
  "metadata": {
    "correlation_id": "corr-example-001",
    "in_response_to": "msg-example-001"
  }
}
```

#### Step 3: Progress Update

```json
{
  "message_id": "msg-example-003",
  "message_type": "notification",
  "timestamp": "2026-05-19T10:01:00Z",
  "sender": {"skill_id": "collector", "instance_id": "collector-prod-01"},
  "receiver": {"skill_id": "reasoning-skill", "instance_id": "reasoning-prod-01"},
  "payload": {
    "type": "progress_update",
    "request_id": "req-example-001",
    "progress_percentage": 50,
    "sources_completed": ["web-search"],
    "sources_remaining": ["documentation"],
    "estimated_remaining_ms": 60000
  },
  "metadata": {
    "correlation_id": "corr-example-001",
    "in_response_to": "msg-example-001"
  }
}
```

#### Step 4: Final Response

```json
{
  "message_id": "msg-example-004",
  "message_type": "response",
  "timestamp": "2026-05-19T10:01:55Z",
  "sender": {"skill_id": "collector", "instance_id": "collector-prod-01"},
  "receiver": {"skill_id": "reasoning-skill", "instance_id": "reasoning-prod-01"},
  "payload": {
    "response_id": "resp-example-001",
    "request_id": "req-example-001",
    "status": "success",
    "result": {
      "collected_data": {
        "primary_findings": [
          {
            "id": "finding-example-001",
            "content": "TensorFlow offers comprehensive production tooling and MLOps integration",
            "source": "documentation",
            "confidence": 0.88,
            "relevance_score": 0.90,
            "metadata": {
              "collected_at": "2026-05-19T10:01:50Z",
              "verification_status": "verified",
              "tags": ["production", "mlops", "tooling"]
            }
          }
        ],
        "supporting_evidence": [],
        "contextual_information": {
          "comparison_matrix": "See attached analysis"
        }
      },
      "synthesis": {
        "summary": "TensorFlow and PyTorch both suitable for production with different strengths.",
        "key_insights": [
          "TensorFlow: Superior production tooling and deployment options",
          "PyTorch: More flexible research-to-production workflow",
          "Consider team expertise and existing infrastructure"
        ],
        "relationships": [],
        "confidence_assessment": {
          "overall_confidence": 0.85,
          "calibration_quality": "well_calibrated",
          "uncertainty_factors": ["specific_use_case_constraints"]
        }
      },
      "metadata": {
        "collection_duration_ms": 115000,
        "sources_consulted": ["web-search", "documentation"],
        "data_quality_score": 0.87,
        "gaps_identified": []
      }
    },
    "recommendations": {
      "follow_up_actions": [],
      "skill_suggestions": ["evaluation-skill"]
    }
  },
  "metadata": {
    "correlation_id": "corr-example-001",
    "in_response_to": "msg-example-001",
    "processing_time_ms": 115000
  }
}
```

### 5.2 Error Recovery Flow

#### Step 1: Error Response

```json
{
  "message_id": "msg-error-001",
  "message_type": "error",
  "timestamp": "2026-05-19T10:01:00Z",
  "sender": {"skill_id": "collector", "instance_id": "collector-prod-01"},
  "receiver": {"skill_id": "reasoning-skill", "instance_id": "reasoning-prod-01"},
  "payload": {
    "response_id": "resp-error-001",
    "request_id": "req-example-001",
    "status": "failure",
    "error": {
      "code": "SOURCE_UNAVAILABLE",
      "message": "Documentation source temporarily unavailable",
      "details": {
        "failed_source": "documentation",
        "failure_reason": "connection_timeout",
        "attempted_retries": 3
      },
      "recoverable": true,
      "retry_after_ms": 5000,
      "alternative_suggestions": [
        "Retry with reduced scope",
        "Use alternative sources only"
      ]
    }
  }
}
```

#### Step 2: Retry Request

```json
{
  "message_id": "msg-retry-001",
  "message_type": "request",
  "timestamp": "2026-05-19T10:01:10Z",
  "sender": {"skill_id": "reasoning-skill", "instance_id": "reasoning-prod-01"},
  "receiver": {"skill_id": "collector", "instance_id": "collector-prod-01"},
  "payload": {
    "request_id": "req-retry-001",
    "request_type": "retry",
    "original_request_id": "req-example-001",
    "retry_strategy": "reduced_scope",
    "modified_parameters": {
      "scope": "narrow",
      "source_skills": ["web-search"]
    }
  },
  "metadata": {
    "correlation_id": "corr-example-001",
    "reply_to": "/queue/reasoning-skill/responses",
    "ttl": 300
  }
}
```

#### Step 3: Successful Retry Response

```json
{
  "message_id": "msg-retry-002",
  "message_type": "response",
  "timestamp": "2026-05-19T10:01:25Z",
  "sender": {"skill_id": "collector", "instance_id": "collector-prod-01"},
  "receiver": {"skill_id": "reasoning-skill", "instance_id": "reasoning-prod-01"},
  "payload": {
    "response_id": "resp-retry-001",
    "request_id": "req-retry-001",
    "status": "success",
    "result": { ... },
    "metadata": {
      "retry_attempt": 1,
      "original_request_id": "req-example-001"
    }
  }
}
```

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2026-05-19 | Initial communication templates documentation |
