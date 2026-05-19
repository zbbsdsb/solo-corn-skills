# Game Theory Basics

## Quick Definition

The study of mathematical models describing strategic interactions between rational decision-makers, used to predict behavior and optimize outcomes in competitive situations.

## Full Definition

Game Theory is a mathematical framework for analyzing strategic interactions where the outcome for each participant depends on the choices of all participants. The field examines how rational actors make decisions when they are aware that their choices affect others, and others' choices affect them. Key concepts include games (situations with set rules and players), strategies (complete plans of action), payoffs (outcomes or rewards), information (what players know), and equilibria (stable states where no player can benefit by changing strategy unilaterally). Game theory provides tools to model competitive situations, predict opponent behavior, and identify optimal strategies. Applications range from business strategy and economics to political science, biology, and military planning. Understanding game theory helps decision-makers anticipate competitor reactions, design effective contracts and agreements, avoid destructive competition, and find mutually beneficial outcomes.

## Origin & History

Game theory emerged as a formal discipline in the 1940s and 1950s. John von Neumann and Oskar Morgenstern published "Theory of Games and Economic Behavior" in 1944, establishing the foundational mathematical framework. Their work on zero-sum games provided early structure. John Nash introduced the concept of Nash Equilibrium in 1950, revolutionizing non-cooperative game theory and earning the Nobel Prize in 1994. Throughout the 1950s and 1960s, researchers expanded the field to include repeated games, cooperative games, and evolutionary game theory. John Harsanyi developed games of incomplete information, enabling analysis of strategic behavior when players lack full information. The 1994 Nobel Prize to Nash, Harsanyi, and Selten recognized these contributions. Thomas Schelling won in 2005 for applying game theory to conflict and cooperation. Today, game theory is fundamental to economics, computer science, psychology, and strategic decision-making.

## Application Steps

1. **Define the Game Structure**: Identify all players, possible actions for each player, timing of decisions (simultaneous or sequential), and information available to each player at each decision point.

2. **Map the Payoffs**: For each possible combination of actions, determine the outcome (payoff) for each player. Payoffs can be monetary, utility-based, or qualitative but must be comparable across outcomes.

3. **Identify Strategy Types**: Determine whether strategies are dominant (always best regardless of others' choices), dominated (always worse than another strategy), or conditional (best depends on others' choices).

4. **Look for Dominant Strategies**: If any player has a dominant strategy, predict they will use it. This simplifies analysis significantly.

5. **Eliminate Dominated Strategies**: Remove strategies that rational players would never choose, narrowing the analysis and potentially revealing equilibrium.

6. **Find Nash Equilibria**: Identify outcomes where no player can improve their payoff by unilaterally changing strategy. These are stable predictions for rational players.

7. **Consider Sequential Games**: For games with sequential moves, use backward induction—start from the end and work backward to identify optimal strategies at each decision point.

8. **Assess Credibility**: In sequential games, evaluate whether promised actions are credible. Threats must be rational to be believable.

9. **Consider Repeated Interactions**: For ongoing relationships, assess how the possibility of future interaction changes behavior. Repeated games enable cooperation through tit-for-tat strategies.

10. **Apply to Real Decisions**: Translate theoretical insights into practical strategic guidance, considering what your analysis predicts about competitor behavior.

## Real-World Examples

**Prisoner's Dilemma in Pricing**: Two competing airlines must decide on pricing strategy. If both charge high prices, both earn healthy profits. If one undercuts the other, the lower-priced airline captures the market. If both undercut, both lose money. The Nash equilibrium is mutual undercutting (low prices), even though both would be better off with high prices. This explains why airlines struggle to maintain high fares despite rational awareness of better outcomes.

**Chicken Game in Product Launches**: When Samsung and Apple consider major product launches, they face a chicken game. If both launch simultaneously, media attention is divided. If one launches first and succeeds, they dominate. If both delay waiting for the other, market opportunities are lost. The risk of launching simultaneously (clashing products) versus not launching (losing first-mover advantage) creates strategic tension.

**Battle of the Sexes in Corporate Strategy**: The "Battle of the Sexes" game illustrates coordination challenges where players prefer different outcomes but prefer any outcome over disagreement. When Google and Samsung negotiate Android terms, they prefer agreement over disagreement, but have different preferences on specific terms. Understanding this helps design win-win contracts.

**Coordination Game in Technology Standards**: When companies decide whether to adopt a new technology standard, coordination games apply. Everyone benefits if the standard is adopted universally, but adopting first carries risk if the standard fails. VHS versus Betamax illustrated how superior technology can lose due to coordination failures.

**Auction Design**: Game theory revolutionized auction design. Spectrum auctions, ad auctions on Google, and eBay's seller mechanisms all apply game-theoretic principles to maximize revenue or efficiency. Understanding bidder behavior enables better auction structure design.

## Common Pitfalls

**Assuming Perfect Rationality**: Real-world players are not perfectly rational—they have cognitive limits, emotions, and biases. Predictions based on perfect rationality may not hold.

**Ignoring Information Asymmetry**: Many games assume common knowledge of rules and payoffs. In reality, players often have private information that significantly affects outcomes.

**Overlooking Credibility**: Making threats that sound good but are not credible leads to failed strategies. In sequential games, commitment mechanisms matter as much as optimal moves.

**Misidentifying the Game**: The same situation can be modeled as different games with different predictions. Choosing the wrong game structure leads to flawed analysis.

**Neglecting Cultural and Contextual Factors**: Game theory assumes universal rationality, but cultural norms, past relationships, and organizational dynamics affect real strategic behavior.

**Treating Games as Static**: Markets are dynamic, and what appears to be equilibrium can shift as environments change. Yesterday's Nash equilibrium may not hold tomorrow.

**Analysis Paralysis**: Excessive game-theoretic modeling can delay decisions. Simple heuristic understanding often suffices for competitive strategy.

## Quick Reference

**Key Concepts**:

- **Nash Equilibrium**: No player can improve by changing strategy alone (stable outcome)
- **Dominant Strategy**: Best choice regardless of what others do
- **Zero-Sum Game**: One player's gain equals another's loss
- **Cooperative vs. Non-Cooperative**: Binding agreements possible vs. not possible
- **Perfect vs. Imperfect Information**: Players know game state vs. don't
- **Repeated Games**: Enable cooperation through future consequences

**Classic Games Summary**:

| Game | Key Insight | Business Application |
|------|-------------|---------------------|
| Prisoner's Dilemma | Individual rationality leads to worse collective outcome | Pricing wars, cartel instability |
| Chicken | First to commit wins | First-mover decisions, brinksmanship |
| Battle of the Sexes | Coordination with different preferences | Negotiations, partnership formation |
| Stag Hunt | Cooperation on high-reward joint strategy | Strategic alliances, joint ventures |
| Hawk-Dove | Aggression vs. conciliation tradeoffs | Market entry conflicts, disputes |

**Decision Rules**:

- If you have a dominant strategy: use it
- If no dominant strategy: look for Nash equilibrium
- In sequential games: use backward induction
- In repeated games: consider future consequences
- Always assess whether threats are credible

**When to Use**: Pricing decisions, market entry, negotiations, competitive responses, contract design, auction strategy, and any situation where your outcome depends on others' choices.
