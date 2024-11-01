---
title: Context scoped state in Vue
description: Take a look at context-scoped state strategies in Vue
slug: playbook/vue/state-management/context-scoped
sidebar:
  label: Context-scoped state
  order: 200
tableOfContents: false
---

With context-scoped we mean any state that is shared in our application but is not global.

For example:

- State shared between components by prop drilling
- State shared between components by provide/inject

Similarly to self-contained state, context-scoped state is linked to a component lifecycle.

## When to use context-scoped state

This approach is useful when the state is shared between components but you don't need it to be global.

The advantage of this approach compared to global state is that the state is linked to a component lifecycle.

Once the component is destroyed, the state is also destroyed.

### Creating context-scoped state

#### Prop drilling

WIP

#### Provide/Inject

Check next page to see an example of context-scoped state management with provide/inject.
