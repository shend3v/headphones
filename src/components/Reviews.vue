<template>
  <div class="container mt-5 mb-5">
    <h2 class="text-left">Other Reviews you may like</h2>
    <div class="reviews mt-5">
      <ReviewCard
        title="Nam non volutpat massa"
        desc="eget
                ultrices neque. Pellentesque
                semper pharetra magna eu
                posuere."
        img="https://picsum.photos/150/100/"
      />
      <ReviewCard
        title="Nulla et eros bibendum"
        desc="tempus velit a, fringilla ligula.
Cras cursus feugiat mi, laoreet
laoreet ante scelerisque et."
        img="https://picsum.photos/150/100/"
      />

      <ReviewCard
        title="Proin elementum faucibus"
        desc="tincidunt. Nullam sed orci et
lacus luctus pharetra. Quisque
iaculis metus quis."
        img="https://picsum.photos/150/100/"
      />
    </div>
  </div>
</template>

<script>
import ReviewCard from "./ReviewCard.vue";

export default {
  name: "Reviews",
  components: {
    ReviewCard
  }
};
</script>

<style>
</style>
