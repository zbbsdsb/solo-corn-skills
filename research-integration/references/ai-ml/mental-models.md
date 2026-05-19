# Core Mental Models in AI/ML

> Core thinking tools extracted from foundational-papers.md and key-insights.md to help understand and apply AI technologies.

---

## 1. Attention Mechanism Mental Model

**Source**: Attention Is All You Need (Vaswani et al., 2017)

### Definition

The attention mechanism is a technique that allows models to "focus" on the most relevant parts of an input sequence. It computes weights for Values based on the relevance between Queries and Keys, enabling selective information aggregation.

### Visualization

```
Input sequence: [token1, token2, token3, ..., token_n]
                  ↓         ↓         ↓
              ┌─────────────────────────────┐
              │      Attention Calculation   │
              │  Query ← ─ ─ ─ ─ ─ → Key    │
              │      ↘           ↙            │
              │         Score                │
              │           ↓                  │
              │        Softmax                │
              │           ↓                  │
              │        Weight                │
              │           ↓                  │
              │    Weighted Sum              │
              └─────────────────────────────┘
                  ↓
Output: Weighted aggregated context vector
```

### Application Steps

1. **Decompose the task**: Break down the problem into subproblems requiring attention to different parts
2. **Identify the Query**: Clarify what core problem needs to be solved currently
3. **Establish Keys**: Identify all available context information sources
4. **Compute attention**: Calculate relevance between Query and each Key using dot product or other methods
5. **Aggregate information**: Weightedly combine Values based on attention weights to generate output

### Example

**Scenario**: Writing an important business email

- **Query**: "What core message do I want to convey?"
- **Keys**: Email subject, recipient background, previous communication content
- **Application**: First clarify the core viewpoint (Query), then select relevant content from background information (Keys) to support it

### Combination Prompts

- Combine with **Chain-of-Thought Prompting**: Dynamically adjust attention focus during reasoning
- Combine with **Agent Four-Capability Model**: Let Agents focus on key information during planning

---

## 2. Emergent Capability Understanding Model

**Source**: GPT Series (Radford et al., 2018-2020), Scaling Laws

### Definition

Emergent capabilities refer to capabilities that suddenly appear in a model after scale crosses a certain threshold. This capability is a quantitative to qualitative change process and cannot be simply predicted from small model performance.

### Visualization

```
          Capability
             ↑
     High  │                    ●●●●
          │                ●●
          │            ●●
          │        ●●
          │    ●●
          │●
          │● ← Threshold (Emergence Point)
          │__________________________
            Small model ←─────────────→ Large model
                 Model Scale
```

### Application Steps

1. **Assess task complexity**: Determine whether the task requires "emergence-level" capabilities
2. **Choose appropriate scale**: Select a sufficiently large model based on task difficulty
3. **Design prompt strategy**: Use generalization capabilities brought by scale to design general prompts
4. **Iterate and optimize**: If small models can complete it, no need to use large models

### Example

**Scenario**: Selecting an AI model for customer service

- **Simple task** (status inquiry): Small model + precise prompts are sufficient
- **Complex task** (handling complaints): Requires a large model with emotional understanding
- **Decision**: Start with a small model, gradually upgrade based on actual performance

### Combination Prompts

- Combine with **Pre-train-Fine-tune Model**: Domain adaptation can reduce dependency on model scale
- Combine with **Chain-of-Thought Prompting**: After scaling up, chain-of-thought effect improves significantly

---

## 3. Agent Four-Capability Mental Model

**Source**: Autonomous Agents Survey (Wang et al., 2023)

### Definition

Autonomous Agents need four core capabilities: **Perception** (understanding the environment), **Planning** (decomposing tasks), **Action** (executing actions), and **Memory** (storing context). These four capabilities work together to enable Agents to autonomously complete complex tasks.

### Visualization

```
           ┌──────────────┐
           │   Perception  │
           │               │
           └──────┬───────┘
                  ↓
      ┌──────────────┐     ┌──────────────┐
      │    Memory    │ ←→  │   Planning    │
      │              │     │              │
      └──────────────┘     └──────┬───────┘
                                   ↓
                           ┌──────────────┐
                           │    Action    │
                           │              │
                           └──────────────┘
```

### Application Steps

1. **Define perception interface**: Clarify what form of information the Agent can receive
2. **Build memory system**: Implement storage mechanism for short-term context and long-term knowledge
3. **Design planning module**: Decompose complex tasks into executable substeps
4. **Extend action capabilities**: Integrate tool use and external API calls
5. **Add reflection mechanism**: Let the Agent assess and correct its own behavior

### Example

**Scenario**: Building a code review Agent

- **Perception**: Receive code changes and context information
- **Memory**: Store code specifications and historical review experience
- **Planning**: Analyze code structure → Identify potential issues → Formulate review report
- **Action**: Read files, call code analysis tools, generate comments

### Combination Prompts

- Combine with **Reasoning-Action Loop Model**: Enhance Agent's adaptive capabilities
- Combine with **Attention Mechanism Model**: Focus on key information during planning and memory retrieval

---

## 4. Reasoning-Action Loop Model

**Source**: ReAct (Yao et al., 2023)

### Definition

The ReAct framework treats reasoning and action as alternating processes rather than sequential execution. Reasoning provides direction for action, and action results feed back to reasoning, forming a continuously optimizing loop.

### Visualization

```
┌─────────────────────────────────────────────────┐
│                                                 │
│     ┌─────────┐    ┌─────────┐    ┌─────────┐  │
│     │ Reason  │ →→ │  Act    │ →→ │ Observe │  │
│     │         │    │         │    │         │  │
│     └────┬────┘    └────┬────┘    └────┬────┘  │
│          ↑              │              │        │
│          └──────────────┴──────────────┘      │
│                  Loop Feedback                  │
└─────────────────────────────────────────────────┘
```

### Application Steps

1. **Initialize state**: Set problem goal and initial context
2. **Reasoning phase**: Analyze current state, decide next action
3. **Action phase**: Execute tool calls, API requests, or other actions
4. **Observation phase**: Collect action results, update state
5. **Loop until complete**: Repeat steps 2-4 until goal is reached or limit exceeded

### Example

**Scenario**: AI assistant helps user book a flight

```
Think: User needs a flight from Beijing to Shanghai on May 20
Act: Call flight search API
Observe: Returns 3 available flights
Think: Second flight has the best time, need to check price
Act: Query detailed information for this flight
Observe: Business class has availability
Think: User prefers economy, need to confirm if economy is available
Act: Query economy again
... Loop until finding suitable option
```

### Combination Prompts

- Combine with **Agent Four-Capability Model**: Reasoning-action loop is the core mechanism for Agent action
- Combine with **Chain-of-Thought Prompting**: Enhance depth and accuracy during reasoning phase

---

## 5. Pre-train-Fine-tune Transfer Model

**Source**: BERT (Devlin et al., 2018)

### Definition

The pre-train-fine-tune paradigm achieves knowledge transfer through two-stage learning: first stage learns general representations on large-scale unlabeled data, second stage fine-tunes on small-scale labeled data for specific tasks. This approach significantly reduces requirements for labeled data.

### Visualization

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│   Stage 1: Pre-training                                  │
│   ┌───────────────────────────────────────────────┐    │
│   │  Large-scale unlabeled data                    │    │
│   │  (text, code, images...)                      │    │
│   │         ↓                                     │    │
│   │  ┌─────────────┐                              │    │
│   │  │ Base Model  │                              │    │
│   │  │             │                              │    │
│   │  └─────────────┘                              │    │
│   └───────────────────────────────────────────────┘    │
│                     ↓                                   │
│   Stage 2: Fine-tuning                                  │
│   ┌───────────────────────────────────────────────┐    │
│   │  Task-specific labeled data (small amount)    │    │
│   │         ↓                                     │    │
│   │  ┌─────────────┐                              │    │
│   │  │ Task Model  │                              │    │
│   │  │             │                              │    │
│   │  └─────────────┘                              │    │
│   └───────────────────────────────────────────────┘    │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Application Steps

1. **Choose base model**: Select appropriate pre-trained model based on task type
2. **Prepare data**: Collect and clean domain-relevant labeled data
3. **Configure fine-tuning**: Set lower learning rate, appropriately freeze some layers
4. **Evaluate and iterate**: Evaluate on validation set, continuously adjust hyperparameters
5. **Deploy application**: Deploy fine-tuned model to production

### Example

**Scenario**: Building a document classification system for the legal industry

- **Choose base**: Legal domain pre-trained model (e.g., LegalBERT)
- **Fine-tuning data**: 2000 annotated legal documents
- **Result**: Achieved 92% accuracy with only 2000 documents

### Combination Prompts

- Combine with **Emergent Capability Model**: Understand why pre-training scale is so important
- Combine with **Attention Mechanism Model**: Understand attention patterns learned during pre-training

---

## Model Combination Quick Reference

| Task Scenario | Recommended Model Combination |
|--------------|-----------------------------|
| Building dialogue Agents | Agent Four-Capabilities + Reasoning-Action Loop |
| Complex reasoning tasks | Emergent Capability + Chain-of-Thought Prompting |
| Vertical domain applications | Pre-train-Fine-tune + Domain Adaptation |
| Tool use systems | Reasoning-Action Loop + Agent Four-Capabilities |
| Long document processing | Attention Mechanism + Memory System |

---

## Usage Advice

1. **Start simple**: Prioritize using a single model to solve problems
2. **Understand limitations**: Each model has applicable boundaries; excessive combination may increase complexity
3. **Iterate continuously**: Adjust model selection and combination methods based on actual performance
4. **Focus on balance**: Find balance between model capability, inference cost, and latency

---

*This document is organized based on core papers in AI/ML, see foundational-papers.md and key-insights.md*

*Last updated: 2024*
