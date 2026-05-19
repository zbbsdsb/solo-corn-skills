# Collector Skill - API Definitions

## Overview

This document defines the integration interfaces for the Collector skill, enabling seamless communication with other skills in the SOLO system. The Collector skill is responsible for gathering, synthesizing, and delivering context information to support decision-making processes.

## Table of Contents

1. [Input Format Definitions](#input-format-definitions)
2. [Output Format Definitions](#output-format-definitions)
3. [API Interface Specifications](#api-interface-specifications)
4. [Data Type Definitions](#data-type-definitions)

---

## Input Format Definitions

### 1.1 Context Request Format

The primary input format for requesting context collection:

```json
{
  "request_id": "uuid-v4-string",
  "request_type": "context_collection | data_gathering | information_synthesis",
  "source_skills": ["string"],
  "target_domain": "string",
  "parameters": {
    "scope": "narrow | medium | broad",
    "depth": "surface | intermediate | deep",
    "time_range": {
      "start": "ISO-8601 timestamp",
      "end": "ISO-8601 timestamp"
    },
    "filters": {
      "relevance_threshold": 0.0-1.0,
      "priority_tags": ["string"],
      "excluded_sources": ["string"]
    }
  },
  "context": {
    "current_task": "string",
    "user_intent": "string",
    "constraints": ["string"]
  },
  "metadata": {
    "requester_skill": "string",
    "priority": "low | normal | high | critical",
    "deadline": "ISO-8601 timestamp"
  }
}
```

### 1.2 Parameter Schemas

#### Scope Parameter

| Value | Description | Use Case |
|-------|-------------|----------|
| `narrow` | Focused collection on specific entities or concepts | Precise fact-checking, targeted queries |
| `medium` | Balanced coverage with moderate breadth | General analysis, comparative studies |
| `broad` | Comprehensive coverage across multiple domains | Strategic planning, holistic assessment |

#### Depth Parameter

| Value | Description | Resource Implication |
|-------|-------------|---------------------|
| `surface` | Basic information retrieval | Minimal processing, fast response |
| `intermediate` | Structured analysis with context | Moderate processing, standard response |
| `deep` | Comprehensive analysis with synthesis | Intensive processing, detailed response |

### 1.3 Supported Request Types

| Type | Description | Required Parameters |
|------|-------------|-------------------|
| `context_collection` | Gather relevant context from various sources | `target_domain`, `scope` |
| `data_gathering` | Collect specific data points or statistics | `target_domain`, `filters` |
| `information_synthesis` | Integrate and synthesize information from multiple sources | `source_skills`, `depth` |

---

## Output Format Definitions

### 2.1 Primary Response Format

```json
{
  "response_id": "uuid-v4-string",
  "request_id": "uuid-v4-string",
  "status": "success | partial_success | failure",
  "timestamp": "ISO-8601 timestamp",
  "result": {
    "collected_data": {
      "primary_findings": [
        {
          "id": "uuid-v4-string",
          "content": "string",
          "source": "string",
          "confidence": 0.0-1.0,
          "relevance_score": 0.0-1.0,
          "metadata": {}
        }
      ],
      "supporting_evidence": [],
      "contextual_information": {}
    },
    "synthesis": {
      "summary": "string",
      "key_insights": ["string"],
      "relationships": [
        {
          "from": "entity-id",
          "to": "entity-id",
          "relationship_type": "string",
          "strength": 0.0-1.0
        }
      ],
      "confidence_assessment": {
        "overall_confidence": 0.0-1.0,
        "calibration_quality": "well_calibrated | miscalibrated",
        "uncertainty_factors": ["string"]
      }
    },
    "metadata": {
      "collection_duration_ms": 0,
      "sources_consulted": ["string"],
      "data_quality_score": 0.0-1.0,
      "gaps_identified": ["string"]
    }
  },
  "recommendations": {
    "follow_up_actions": [
      {
        "action": "string",
        "priority": "low | normal | high",
        "rationale": "string"
      }
    ],
    "skill_suggestions": ["string"]
  }
}
```

### 2.2 Status Codes

| Status | Description | Implications |
|--------|-------------|--------------|
| `success` | All requested data collected successfully | Complete response with all findings |
| `partial_success` | Partial data collected, some gaps exist | Response includes available data plus gaps |
| `failure` | Collection failed | Error details provided, retry recommended |

### 2.3 Error Response Format

```json
{
  "response_id": "uuid-v4-string",
  "request_id": "uuid-v4-string",
  "status": "failure",
  "timestamp": "ISO-8601 timestamp",
  "error": {
    "code": "ERROR_CODE",
    "message": "Human-readable error description",
    "details": {},
    "recoverable": true,
    "retry_after_ms": 0
  }
}
```

---

## API Interface Specifications

### 3.1 Primary Interface: `collect`

**Description**: Main interface for context collection requests.

**Endpoint**: Internal skill-to-skill communication

**Method**: Asynchronous request-response

**Signature**:
```typescript
async function collect(request: ContextRequest): Promise<CollectorResponse>
```

**Parameters**:
- `request: ContextRequest` - The context collection request object

**Returns**: `Promise<CollectorResponse>` - The collection result

**Throws**:
- `CollectorError` - On unrecoverable failure

### 3.2 Secondary Interface: `stream`

**Description**: Streaming interface for large-scale data collection.

**Method**: Streaming response with partial results

**Signature**:
```typescript
async function* stream(request: ContextRequest): AsyncGenerator<PartialResponse>
```

**Parameters**:
- `request: ContextRequest` - The context collection request object

**Yields**: `PartialResponse` - Incremental collection results

### 3.3 Utility Interface: `validate_request`

**Description**: Validates incoming requests before processing.

**Signature**:
```typescript
function validate_request(request: any): ValidationResult
```

**Returns**: `ValidationResult` with validation status and any errors

### 3.4 Utility Interface: `estimate_cost`

**Description**: Estimates resource requirements for a request.

**Signature**:
```typescript
function estimate_cost(request: ContextRequest): CostEstimate
```

**Returns**: Estimated processing time, memory, and API calls required

---

## Data Type Definitions

### 4.1 Core Types

#### ContextRequest

```typescript
interface ContextRequest {
  request_id: string;
  request_type: 'context_collection' | 'data_gathering' | 'information_synthesis';
  source_skills: string[];
  target_domain: string;
  parameters: RequestParameters;
  context: RequestContext;
  metadata: RequestMetadata;
}
```

#### RequestParameters

```typescript
interface RequestParameters {
  scope: 'narrow' | 'medium' | 'broad';
  depth: 'surface' | 'intermediate' | 'deep';
  time_range?: TimeRange;
  filters?: FilterParameters;
}
```

#### FilterParameters

```typescript
interface FilterParameters {
  relevance_threshold?: number;
  priority_tags?: string[];
  excluded_sources?: string[];
  content_types?: string[];
  min_confidence?: number;
}
```

#### TimeRange

```typescript
interface TimeRange {
  start: string; // ISO-8601
  end: string;   // ISO-8601
}
```

#### RequestContext

```typescript
interface RequestContext {
  current_task: string;
  user_intent?: string;
  constraints?: string[];
  previous_interactions?: string[];
}
```

#### RequestMetadata

```typescript
interface RequestMetadata {
  requester_skill: string;
  priority: 'low' | 'normal' | 'high' | 'critical';
  deadline?: string; // ISO-8601
  correlation_id?: string;
}
```

### 4.2 Response Types

#### CollectorResponse

```typescript
interface CollectorResponse {
  response_id: string;
  request_id: string;
  status: 'success' | 'partial_success' | 'failure';
  timestamp: string;
  result: CollectionResult;
  recommendations?: FollowUpRecommendations;
}
```

#### CollectionResult

```typescript
interface CollectionResult {
  collected_data: CollectedData;
  synthesis: SynthesisResult;
  metadata: CollectionMetadata;
}
```

#### CollectedData

```typescript
interface CollectedData {
  primary_findings: Finding[];
  supporting_evidence: Evidence[];
  contextual_information: Record<string, any>;
}
```

#### Finding

```typescript
interface Finding {
  id: string;
  content: string;
  source: string;
  confidence: number;
  relevance_score: number;
  metadata: FindingMetadata;
}
```

#### FindingMetadata

```typescript
interface FindingMetadata {
  collected_at: string;
  original_format?: string;
  verification_status?: 'verified' | 'unverified' | 'disputed';
  tags?: string[];
}
```

#### SynthesisResult

```typescript
interface SynthesisResult {
  summary: string;
  key_insights: string[];
  relationships: Relationship[];
  confidence_assessment: ConfidenceAssessment;
}
```

#### Relationship

```typescript
interface Relationship {
  from: string;
  to: string;
  relationship_type: string;
  strength: number;
}
```

#### ConfidenceAssessment

```typescript
interface ConfidenceAssessment {
  overall_confidence: number;
  calibration_quality: 'well_calibrated' | 'miscalibrated';
  uncertainty_factors: string[];
}
```

#### CollectionMetadata

```typescript
interface CollectionMetadata {
  collection_duration_ms: number;
  sources_consulted: string[];
  data_quality_score: number;
  gaps_identified: string[];
}
```

#### FollowUpRecommendations

```typescript
interface FollowUpRecommendations {
  follow_up_actions: Action[];
  skill_suggestions: string[];
}
```

#### Action

```typescript
interface Action {
  action: string;
  priority: 'low' | 'normal' | 'high';
  rationale: string;
}
```

### 4.3 Error Types

#### CollectorError

```typescript
interface CollectorError {
  code: string;
  message: string;
  details?: Record<string, any>;
  recoverable: boolean;
  retry_after_ms?: number;
}
```

#### Error Codes

| Code | Description | Recoverable |
|------|-------------|-------------|
| `INVALID_REQUEST` | Request validation failed | Yes |
| `DOMAIN_NOT_SUPPORTED` | Target domain not in scope | No |
| `SOURCE_UNAVAILABLE` | Required source temporarily unavailable | Yes |
| `TIMEOUT` | Collection exceeded time limit | Yes |
| `INSUFFICIENT_DATA` | Not enough data to satisfy request | Partial |
| `INTERNAL_ERROR` | Unexpected internal failure | Yes |

---

## Integration Guidelines

### 5.1 Request Construction

1. **Generate unique request ID**: Use UUID v4 for all requests
2. **Specify source skills**: List all skills that should contribute to collection
3. **Set appropriate scope**: Match scope to actual information needs
4. **Define time boundaries**: Constrain time range when applicable
5. **Set priority correctly**: Use priority levels to manage resource allocation

### 5.2 Response Handling

1. **Check status field**: Always verify response status before processing
2. **Handle partial success**: Implement graceful degradation for partial results
3. **Extract confidence scores**: Use confidence assessments for downstream processing
4. **Review gaps**: Incorporate identified gaps into decision-making
5. **Follow recommendations**: Consider suggested follow-up actions

### 5.3 Error Recovery

1. **Retry recoverable errors**: Implement exponential backoff for retryable failures
2. **Fallback strategies**: Define alternative approaches for non-recoverable errors
3. **Log errors**: Record all errors for debugging and improvement
4. **Alert on critical failures**: Notify operators on unrecoverable errors

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2026-05-19 | Initial API definition |
