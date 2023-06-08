<template>
  <main>
    <create-global-state/>
    <create-injection-state/>
    <create-shared-composable/>
    <use-async-state/>
    <use-debounced-ref-history/>
    <use-manual-ref-history/>
    <use-ref-history/>
    <use-last-changed/>
    <use-storage/>
    <use-session-storage/>
    <hr>
    <use-active-element/>
    <use-document-visibility/>
    <use-dragabble/>
    <use-drop-zone/>
    <use-element-bounding/>
    <use-element-size/>
    <use-element-visibility/>
    <use-intersection-observer/>
    <use-mouse-in-element/>
    <use-mutation-observer/>
    <use-parent-element/>
    <use-resize-observer/>
    <use-window-focus/>
    <use-window-scroll/>
    <use-window-size/>
    <hr>
    <use-bluetooth/>
    <use-breakpoints/>
    <use-broadcast-channel/>
    <use-browser-location/>
    <use-clipboard/>
    <use-color-mode/>
    <use-css-var/>
  </main>
</template>

<script setup>
  import createGlobalState from './vueUseComponents/CreateGlobalState.vue'
  import CreateInjectionState from './vueUseComponents/CreateInjectionState.vue'
  import CreateSharedComposable from './vueUseComponents/CreateSharedComposable.vue'
  import UseAsyncState from './vueUseComponents/UseAsyncState.vue'
  import UseDebouncedRefHistory from './vueUseComponents/UseDebouncedRefHistory.vue'
  import UseLastChanged from './vueUseComponents/UseLastChanged.vue'
  import UseStorage from './vueUseComponents/UseStorage.vue'
  import UseSessionStorage from './vueUseComponents/UseSessionStorage.vue'
  import UseRefHistory from './vueUseComponents/UseRefHistory.vue'
  import UseManualRefHistory from './vueUseComponents/UseManualRefHistory.vue'
  import UseActiveElement from './vueUseComponents/UseActiveElement.vue'
  import UseDocumentVisibility from './vueUseComponents/UseDocumentVisibility.vue'
  import UseDragabble from './vueUseComponents/UseDragabble.vue'
  import UseDropZone from './vueUseComponents/UseDropZone.vue'
  import UseElementBounding from './vueUseComponents/UseElementBounding.vue'
  import UseElementSize from './vueUseComponents/UseElementSize.vue'
  import UseElementVisibility from './vueUseComponents/UseElementVisibility.vue'
  import UseIntersectionObserver from "./vueUseComponents/UseIntersectionObserver.vue";
  import UseMouseInElement from "./vueUseComponents/UseMouseInElement.vue";
  import UseMutationObserver from "./vueUseComponents/UseMutationObserver.vue";
  import UseParentElement from "./vueUseComponents/UseParentElement.vue";
  import UseResizeObserver from "./vueUseComponents/UseResizeObserver.vue";
  import UseWindowFocus from "./vueUseComponents/UseWindowFocus.vue";
  import UseWindowScroll from "./vueUseComponents/UseWindowScroll.vue";
  import UseWindowSize from "./vueUseComponents/UseWindowSize.vue";
  import UseBluetooth from "./vueUseComponents/UseBluetooth.vue";
  import UseBreakpoints from "./vueUseComponents/UseBreakpoints.vue";
  import UseBroadcastChannel from "./vueUseComponents/UseBroadcastChannel.vue";
  import UseBrowserLocation from "./vueUseComponents/UseBrowserLocation.vue";
  import UseClipboard from "./vueUseComponents/UseClipboard.vue";
  import UseColorMode from "./vueUseComponents/UseColorMode.vue";
  import UseCssVar from "./vueUseComponents/UseCssVar.vue";



</script>

<style>
h2 {
  margin-top: 50px;
}
</style>
