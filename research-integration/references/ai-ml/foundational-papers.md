# AI/ML Domain - Foundational Papers

> This document compiles key papers in the AI/ML field from the 1970s to 2020s, covering five major themes: expert systems, machine learning, deep learning, large language models, and AI Agents. Each entry includes core contributions, key insights, and application scenarios.

---

## I. Expert Systems and Knowledge Representation (1970s-1990s)

### 1.1 Knowledge Representation Fundamentals

#### DENDRAL System (Buchanan et al., 1969)
- **Domain**: Chemical analysis expert system
- **Core Contribution**: First expert system, demonstrating the possibility of knowledge engineering
- **Key Insights**:
  - Domain expert knowledge can be formalized and encoded
  - Separation of inference engine from knowledge base is a key design pattern
  - Heuristic rules are a method for handling incomplete information
- **Application Scenarios**: Scenarios requiring systematizing expert experience
- **Practical Advice**: When building expert systems, first identify key decision points in the domain, then express them with rules

#### MYCIN System (Shortliffe, 1976)
- **Domain**: Medical diagnosis expert system
- **Core Contribution**: Introduced uncertainty reasoning mechanism (certainty factors)
- **Key Insights**:
  - Expert knowledge often contains uncertainty
  - Need to formalize "likelihood" rather than absolute truth
  - Human-AI collaboration is superior to full automation
- **Application Scenarios**: High-uncertainty domains like medical diagnosis and risk assessment
- **Practical Advice**: Retain human review环节 in high-risk decisions

### 1.2 Knowledge Graphs and Semantic Networks

#### Semantic Networks (Quillian, 1968; Collins & Quillian, 1969)
- **Core Contribution**: Proposed representing relationships between concepts using graph structures
- **Key Insights**:
  - Knowledge can be organized through semantic relationships
  - Concept hierarchies align with cognitive principles
  - Reasoning can be implemented through graph traversal
- **Application Scenarios**: Building knowledge bases, designing recommendation systems
- **Practical Advice**: When designing knowledge graphs, first determine entity and relationship types

---

## II. Evolution of Machine Learning Paradigms (1980s-2010s)

### 2.1 Symbolic Learning and Decision Trees

#### ID3 Algorithm (Quinlan, 1986)
- **Core Contribution**: First practical decision tree learning algorithm
- **Key Insights**:
  - Information gain is an effective metric for selecting split attributes
  - Top-down recursive splitting is an efficient way to build decision trees
  - Decision trees are easy to interpret and understand
- **Application Scenarios**: Classification problems, applications requiring high interpretability
- **Practical Advice**: Prioritize decision trees for scenarios needing explanation to non-technical audiences

#### C4.5 Algorithm (Quinlan, 1993)
- **Core Contribution**: Improved ID3, handling continuous attributes and missing values
- **Key Insights**:
  - Information gain ratio can reduce bias toward multi-valued attributes
  - Pruning is an important technique to prevent overfitting
  - Decision trees can naturally handle mixed-type data
- **Application Scenarios**: Same as above, with additional support for complex data

### 2.2 Statistical Learning and Support Vector Machines

#### Support Vector Machines (Vapnik, 1995)
- **Core Contribution**: VC dimension theory and structural risk minimization
- **Key Insights**:
  - Maximizing classification margin improves generalization ability
  - Kernel trick allows finding linear boundaries in high-dimensional spaces
  - Small-sample learning is possible
- **Application Scenarios**: High-dimensional feature problems like text classification and image recognition
- **Practical Advice**: SVM is sensitive to feature scales; input must be standardized

### 2.3 Ensemble Learning

#### Random Forests (Breiman, 2001)
- **Core Contribution**: Bootstrap aggregation and random feature selection
- **Key Insights**:
  - Ensemble of multiple weak classifiers can produce a strong classifier
  - Randomness improves model robustness
  - Parallel training is feasible
- **Application Scenarios**: Classification/regression problems requiring high accuracy and robustness
- **Practical Advice**: Random Forest usually doesn't need much tuning and makes a good baseline

---

## III. Deep Learning Revolution (2010s)

### 3.1 Convolutional Neural Networks

#### AlexNet (Krizhevsky et al., 2012)
- **Core Contribution**: ImageNet competition breakthrough, demonstrating potential of deep convolutional networks
- **Key Insights**:
  - ReLU activation is more effective than sigmoid/tanh
  - GPU acceleration is key to training deep networks
  - Data augmentation improves generalization
  - Dropout is an effective regularization method
- **Application Scenarios**: Image classification, object detection, image segmentation
- **Practical Advice**: Training deep networks requires large amounts of data and compute resources

### 3.2 Sequence Modeling and Recurrent Neural Networks

#### LSTM (Hochreiter & Schmidhuber, 1997)
- **Core Contribution**: Long Short-Term Memory networks, solving vanishing gradient problem
- **Key Insights**:
  - Gating mechanisms can control information flow
  - Long-term dependencies can be learned
  - Forget gate allows network to selectively forget
- **Application Scenarios**: Natural language processing, time series prediction
- **Practical Advice**: LSTM variants (GRU) perform comparably on many tasks and are simpler

### 3.3 Transformer Architecture

#### Attention Is All You Need (Vaswani et al., 2017)
- **Core Contribution**: Transformer architecture, entirely based on attention mechanisms
- **Key Insights**:
  - Self-attention can be computed in parallel, significantly accelerating training
  - Positional encoding preserves sequence order information
  - Multi-head attention can capture multiple types of relationships
  - Scalability: Larger models and more data bring continuous improvement
- **Application Scenarios**: Almost all sequence-to-sequence tasks
- **Practical Advice**: Transformer has become the foundational architecture in NLP

---

## IV. Large Language Models (2018-2024)

### 4.1 Pre-trained Language Models

#### BERT (Devlin et al., 2018)
- **Core Contribution**: Bidirectional Transformer + masked language model pre-training
- **Key Insights**:
  - Pre-train-fine-tune paradigm can transfer to downstream tasks
  - Bidirectional context understanding significantly improves performance
  - Task-specific fine-tuning is much more efficient than training from scratch
- **Application Scenarios**: Text classification, named entity recognition, question answering systems
- **Practical Advice**: BERT-style models are a good starting point for text tasks

#### GPT Series (Radford et al., 2018, 2019; Brown et al., 2020)
- **Core Contribution**: Generative pre-training + zero-shot/few-shot learning
- **Key Insights**:
  - Language models can learn a wide range of tasks without explicit supervision
  - Prompt engineering can unlock model's latent capabilities
  - Scaling laws: Larger models perform better (up to a certain scale)
- **Application Scenarios**: Text generation, code generation, dialogue systems
- **Practical Advice**: For generative tasks, GPT-style models are usually preferred

### 4.2 Reasoning Capability Enhancement

#### Chain-of-Thought Prompting (Wei et al., 2022)
- **Core Contribution**: Intermediate reasoning steps can improve complex problem-solving ability
- **Key Insights**:
  - Explicit reasoning process is more effective than directly giving answers
  - Chain-of-thought can be induced (few-shot examples)
  - This capability can emerge in small models too (but with limited effect)
- **Application Scenarios**: Math problems, logical reasoning, complex QA
- **Practical Advice**: For complex tasks, guide the model to "think before answering"

#### ReAct (Yao et al., 2023)
- **Core Contribution**: Agent framework combining reasoning and action
- **Key Insights**:
  - Reasoning and action should alternate
  - Action results can feedback to reasoning process
  - Can integrate with external tools
- **Application Scenarios**: Complex tasks requiring tool use, conversational AI
- **Practical Advice**: ReAct is a foundational framework for building practical AI Agents

### 4.3 Alignment and Safety

#### RLHF: Learning to Summarize from Human Feedback (Stiennon et al., 2020)
- **Core Contribution**: Fine-tuning with reinforcement learning from human feedback
- **Key Insights**:
  - Human preferences can serve as training signal
  - Can significantly improve model helpfulness and harmlessness
  - Requires high-quality human feedback data
- **Application Scenarios**: Generative tasks requiring alignment with user expectations
- **Practical Advice**: RLHF is a key technology for making LLMs more aligned with human intent

---

## V. AI Agent Architecture (2023-2024)

### 5.1 Agent Fundamentals

#### Autonomous Agents Survey (Wang et al., 2023)
- **Core Contribution**: Systematically梳理自主Agent的设计模式
- **Key Insights**:
  - Agents need: perception, planning, action, memory capabilities
  - Tool use is key to extending Agent capabilities
  - Multi-Agent collaboration can solve more complex problems
  - Self-reflection and criticism can improve output quality
- **Application Scenarios**: Automated task execution, complex problem decomposition
- **Practical Advice**: When building Agents, prioritize implementing memory and tool use capabilities

#### AutoGPT/GPT Engineer (2023)
- **Core Contribution**: Demonstrated possibility of large models autonomously completing tasks
- **Key Insights**:
  - Goal decomposition and self-planning are feasible
  - Error recovery and fallback mechanisms are important
  - Human supervision is still necessary in complex tasks
- **Application Scenarios**: Code generation, automated workflows
- **Practical Advice**: Fully autonomous Agents are not yet reliable enough; need to set checkpoints

### 5.2 Tool Use and Tool Learning

#### Tool Learning with Foundation Models (Peng et al., 2023)
- **Core Contribution**: Large models can learn and use tools
- **Key Insights**:
  - API documentation can guide tool use
  - Tool selection and parameter construction are learnable
  - Erroneous calls can trigger retries and corrections
- **Application Scenarios**: Applications requiring calling external services
- **Practical Advice**: Provide clear, consistent API definitions for Agents

### 5.3 Multi-Agent Systems

#### CAMEL: Communicative Agents (Li et al., 2023)
- **Core Contribution**: Demonstrated autonomous collaboration between Agents
- **Key Insights**:
  - Agents can collaborate through dialogue to solve complex tasks
  - Role-playing can guide Agent behavior
  - Need to prevent goal drift and error accumulation
- **Application Scenarios**: Tasks requiring multi-party participation
- **Practical Advice**: Multi-Agent system design needs to consider communication protocols and conflict resolution

---

## VI. Practical Application Insights

### 6.1 Model Selection Guide

| Task Type | Recommended Model | Reason |
|-----------|------------------|--------|
| Text classification | BERT, RoBERTa | Mature pre-train-fine-tune paradigm |
| Text generation | GPT, LLaMA | Strong generation capability |
| Sequence labeling | BERT+CRF | Combines structured prediction |
| Code generation | Codex, CodeLlama | Specialized pre-training |
| Multimodal | GPT-4V, Claude 3 | Vision-language fusion |

### 6.2 Implementation Considerations

1. **Data quality takes priority over model complexity**
   - Cleaning data is often more effective than changing models
   - Annotation quality directly affects model performance

2. **Evaluation metrics should match business goals**
   - Accuracy is not always the best choice
   - Consider different costs of false positives/false negatives

3. **Keep it simple until complexity is necessary**
   - Start with a simple baseline
   - Only upgrade when simple methods reach a bottleneck

4. **Monitoring and iteration are mandatory**
   - Deployment is not the end, but the beginning
   - Establish feedback loops for continuous improvement

---

## Reference Formats

### APA Style

Buchanan, B. G., & Feigenbaum, E. A. (1978). DENDRAL and META-DENDRAL: Their applications dimension. *Artificial Intelligence*, *11*(1), 5-24.

Vaswani, A., Shazeer, N., Parmar, N., et al. (2017). Attention is all you need. *Advances in Neural Information Processing Systems*, *30*.

Brown, T. B., Mann, B., Ryder, N., et al. (2020). Language models are few-shot learners. *Advances in Neural Information Processing Systems*, *33*, 1877-1901.

### BibTeX Format

```bibtex
@article{vaswani2017attention,
  title={Attention is all you need},
  author={Vaswani, Ashish and Shazeer, Noam and Parmar, Niki and others},
  journal={NeurIPS},
  volume={30},
  year={2017}
}
```

---

## Next Steps

- See [key-insights.md](./key-insights.md) for actionable insights
- See [mental-models.md](./mental-models.md) to apply thinking tools
- Combine with entrepreneurship theory to formulate AI application strategies

---

*Last updated: 2024*
*Maintainer: Solo Corn Skills Team*
