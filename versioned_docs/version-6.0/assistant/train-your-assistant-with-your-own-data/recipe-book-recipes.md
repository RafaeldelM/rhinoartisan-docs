# Recipe Book (Recipes)

The Recipe Book defines what the RhinoArtisan Assistant does and how it does it.

<figure><img src="../../.gitbook/assets/image (1).png" alt="" width="432"><figcaption></figcaption></figure>

While User System Prompts establish the assistant’s behavior, the Recipe Book contains recipes: structured workflows designed to solve specific tasks within RhinoArtisan Assistant.

Each recipe combines context, rules, and a sequence of actions with a clear objective.

### Relationship Between User System Prompts and Recipes

In RhinoArtisan Assistant, recipes are always executed within the framework defined by the active User System Prompts.

User System Prompts define how the assistant behaves.\
Recipes define which task is executed and how it is executed.

Following the metaphor:\
User System Prompts define the chef.\
Recipes define the dishes.

### What Is a Recipe

A recipe is a structured configuration that defines:

* A specific objective
* The required context
* A sequence of steps or execution logic
* The expected type of output

Recipes turn complex tasks into repeatable, consistent, and reusable processes.

### Typical Use Cases

Recipes can be used to:

* Explain a jewelry design to a final customer
* Generate sales arguments based on a design
* Prepare a model for manufacturing
* Analyze production costs and lead times
* Adapt a design to specific client requirements
* Generate technical or commercial documentation

### Recipes as Reusable Workflows

A recipe is not a one-off instruction, but a reusable workflow.

Once created, it can be executed:

* With different designs
* With different clients
* Under different active User System Prompts

This ensures consistency and time savings across recurring tasks.

### Recipe Components

A recipe typically includes:

* A descriptive name
* A clear description of its objective
* The User System Prompts it assumes are active
* The instructions or steps the assistant must follow
* The expected output format or type

### Best Practices

#### Design recipes with a clear objective

Each recipe should solve a single, well-defined task. Avoid overly generic recipes that try to do too much.

#### Assume behavior is already defined

Recipes should not redefine tone, role, or personality. That belongs to User System Prompts.

#### Split complex workflows into multiple recipes

If a workflow becomes too long or mixes different goals, it is better to split it into smaller, focused recipes.

#### Reuse recipes whenever possible

A good recipe should be reusable across different contexts by changing only the design or the client.

#### Use action-oriented names

Recipe names should clearly describe what they do, for example:\
“Explain design to customer”, “Prepare model for manufacturing”, “Generate sales arguments”.

### Common Mistakes to Avoid

#### Using recipes to define behavior

Avoid defining tone, personality, or role inside a recipe. This belongs to User System Prompts.

#### Creating overly rigid recipes

Recipes should guide the process, not unnecessarily limit it. Leave room for contextual adaptation.

#### Duplicating logic across recipes

If multiple recipes share large parts of the same logic, consider refactoring or extracting common steps.

#### Not documenting the recipe objective

A recipe without a clear objective is difficult to reuse and maintain.

#### Treating recipes as long prompts

Recipes are not just long prompts. They are structured workflows with intent and logic.
