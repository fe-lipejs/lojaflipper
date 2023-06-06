// componentTalks.js

import { provide, inject } from 'vue';

const componentTalksSymbol = Symbol();

export function provideComponentTalks() {
  const componentTalks = {
    emit(event, ...args) {
      componentTalksSymbol.value.$emit(event, ...args);
    },
    on(event, callback) {
      componentTalksSymbol.value.$on(event, callback);
    },
    off(event, callback) {
      componentTalksSymbol.value.$off(event, callback);
    }
  };

  provide(componentTalksSymbol, componentTalks);
}

export function useComponentTalks() {
  const componentTalks = inject(componentTalksSymbol);
  if (!componentTalks) {
    throw new Error('ComponentTalks not provided!');
  }
  return componentTalks;
}
