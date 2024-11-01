---
title: Self contained state in Vue
description: Take a look at self contained state strategies in Vue
slug: playbook/vue/state-management/self-contained
sidebar:
  label: Self-contained state
  order: 100
tableOfContents: false
---

Self-contained state management is when the state is managed within a single component. This is the simplest form of state management in Vue.

This kind of state management is documented in [state-management vue docs](https://vuejs.org/guide/scaling-up/state-management#what-is-state-management).

## When to use self-contained state

This approach is useful when the state is linked to the component lyfecycle and doesn't need to be shared with other components.

Once the component is destroyed, the state is also destroyed.

## Creating self-contained state

You are using this approach when you define a reactive variable in a component and you don't expose it to the parent with props.

It means that the state is only available within the component and its children.

For example:

```vue
<script setup lang="ts">
const count = ref(0)
const add = () => count.value++
const substract = () => count.value--
</script>

<template>
  <div>
    <div>Count: {{ count }}</div>
    <button @click="add">+</button>
    <button @click="substract">-</button>
  </div>
</template>
```
