# Train your Assistant with your own data

In RhinoArtisan Assistant, we distinguish between two complementary concepts that work together to shape how the assistant behaves and how tasks are executed: User System Prompts and the Recipe Book.

### User System Prompts

User System Prompts allow users to define one or more base instructions that control the behavior of the assistant. These prompts act as high-level rules that influence how the assistant thinks, responds, and communicates.

They can define, for example:

* The role of the assistant (designer, jeweler, sales expert, manufacturer, etc.)
* The tone and style of the responses
* The level of technical detail
* The focus of the conversation (design, production, sales, cost analysis, etc.)

Multiple User System Prompts can coexist and be reused across different scenarios.

### The Recipe Book

The Recipe Book builds on top of User System Prompts. Instead of being a single instruction, a recipe is a structured combination of:

* One or more User System Prompts
* A specific objective
* A predefined workflow or set of steps

Each recipe is designed to solve a concrete task, such as explaining a design to a customer, justifying pricing, preparing a model for manufacturing, or generating sales arguments.

Conceptually\
User System Prompts define how the assistant behaves.\
The Recipe Book defines what the assistant does and how it does it.

You can think of it like this:\
User System Prompts define the chef.\
The Recipe Book defines the dishes.

Together, they allow RhinoArtisan Assistant to be flexible, reusable, and highly focused on real-world jewelry workflows.
