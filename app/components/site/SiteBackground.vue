<template>
  <div id="site-bg" class="pointer-events-none fixed inset-0 -left-3 -z-1" />
</template>

<style scoped>
@supports (mask-image: linear-gradient(#000, #fff)) or (-webkit-mask-image: linear-gradient(#000, #fff)) {
  #site-bg {
    background-image:
      linear-gradient(to right, light-dark(var(--color-neutral-300), var(--color-neutral-600)) 1px, transparent 1px),
      linear-gradient(to bottom, light-dark(var(--color-neutral-300), var(--color-neutral-600)) 1px, transparent 1px);
    background-size: 20px 20px;
    background-position: 0 0, 0 0;
    mask-image:
      repeating-linear-gradient(
        to right,
        black 0px,
        black 3px,
        transparent 3px,
        transparent 8px
      ),
      repeating-linear-gradient(
        to bottom,
        black 0px,
        black 3px,
        transparent 3px,
        transparent 8px
      ),
      radial-gradient(ellipse 80% 80% at 0% 100%, #000 50%, transparent 90%);
    -webkit-mask-image:
      repeating-linear-gradient(
        to right,
        black 0px,
        black 3px,
        transparent 3px,
        transparent 8px
      ),
      repeating-linear-gradient(
        to bottom,
        black 0px,
        black 3px,
        transparent 3px,
        transparent 8px
      ),
      radial-gradient(ellipse 80% 80% at 0% 100%, #000 50%, transparent 90%);
    mask-composite: intersect;
    -webkit-mask-composite: source-in;
  }
}
</style>
