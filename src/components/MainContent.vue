<template>
  <main>
    <div class="main-content">
      <div class="container">
        <blockquote class="mt-5">
          When you buy through links on our site, we may earn an affiliate commission.
          <a
            class="font-weight-bold"
            href="#"
          >Learn more</a>
        </blockquote>
        <div class="mt-5">
          <h2 class="text-left font-weight-bold text-warning">The Best Headphones For Exercise</h2>
          <img
            src="https://i.imgur.com/oVMwQgf.jpg"
            class="img-fluid mt-3 mb-3"
            alt="woman with headphones"
          >
          <p class="text-left mt-3">
            We looked at hundreds of headphones nec velit consectetur, porta lacus a, sodales turpis. Donec
            vitae nibh ex. Pellentesque a viverra sapien, in dictum metus. Vestibulum non turpis in nunc faucibus
            ornare blandit et ante. Quisque non lacinia lacus. Phasellus rhoncus, erat eget vehicula placerat,
            odio odio tincidunt lectus, id ullamcorper lacus lectus et felis. Praesent orci orci, luctus at nibh ac,
            maximus pretium lorem.
          </p>
        </div>
      </div>

      <div class="container">
        <h2 class="text-left font-weight-bold text-warning">Testing Process</h2>
        <p class="text-left mt-3">
          Donec volutpat vulputate est a convallis. Phasellus a orci mauris. Nulla tristique molestie nisi ut
          iaculis. Suspendisse rutrum est eu quam vehicula, ut vehicula magna blandit. Cras dapibus
          elementum neque, id tempus turpis convallis vitae. Nulla quis augue sit amet nibh consectetur
          bibendum.
        </p>
        <p class="text-left mt-3">
          Aenean tincidunt lobortis ultricies. Nulla consectetur at metus sed aliquam. Vivamus tempus porttitor
          nunc, nec egestas dolor dictum vitae. Phasellus malesuada erat et consequat lacinia. In eu mi non
          est semper tempus ac eu turpis. Donec elit purus, volutpat quis est nec, bibendum viverra nulla. Ut
          feugiat suscipit cursus. Phasellus luctus in ipsum fringilla scelerisque. Donec vehicula sem non
          massa finibus porttitor.
        </p>
        <p class="text-left mt-3">
          nterdum et malesuada fames ac ante ipsum primis in faucibus. Morbi justo nunc, tincidunt quis
          ipsum a, tempus lacinia libero. Nulla laoreet, dolor sit amet vehicula pellentesque, lorem felis
          eleifend ipsum, ac aliquam lacus felis ac metus. Morbi posuere nec tellus vitae sollicitudin. Etiam
          fringilla nulla ac nulla interdum, eu sagittis enim accumsan. Mauris tincidunt libero at pulvinar
          condimentum. Nunc non magna pulvinar, aliquam enim sit amet, ultricies mauris. Vestibulum
          rhoncus, magna sed bibendum fermentum.
        </p>
      </div>
      <div class="container">
        <ProductCard/>
      </div>

      <div class="container">
        <h2 class="text-left font-weight-bold text-warning">How We Decided</h2>
        <p class="text-left mt-3">
          Donec volutpat vulputate est a convallis. Phasellus a orci mauris. Nulla tristique molestie nisi ut
          iaculis. Suspendisse rutrum est eu quam vehicula, ut vehicula magna blandit. Cras dapibus
          elementum neque, id tempus turpis convallis vitae. Nulla quis augue sit amet nibh consectetur
          bibendum.
        </p>
      </div>

      <div class="container">
        <h2 class="text-left font-weight-bold text-warning">Why You Should Trust Us</h2>
        <p class="text-left mt-3">
          Donec volutpat vulputate est a convallis. Phasellus a orci mauris. Nulla tristique molestie nisi ut
          iaculis. Suspendisse rutrum est eu quam vehicula, ut vehicula magna blandit. Cras dapibus
          elementum neque, id tempus turpis convallis vitae. Nulla quis augue sit amet nibh consectetur
          bibendum.
        </p>
      </div>

      <div class="container">
        <h2 class="text-left font-weight-bold text-warning">Runner Up Products</h2>
        <p class="text-left mt-3">
          We also liked these products maximus odio in molestie sodales. Nulla facilisi. Fusce ac malesuada
          mi. Nulla et eros bibendum, tempus velit a, fringilla ligula. Cras cursus feugiat mi, laoreet laoreet
          ante scelerisque et. Maecenas efficitur elit nec facilisis aliquam. Praesent gravida, mauris ut
          ullamcorper tristique, metus ligula efficitur purus, ac laoreet purus odio vel urna. Integer placerat eu
          nisi pellentesque egestas.
        </p>
        <hr>
      </div>
      <Reviews/>
    </div>
  </main>
</template>

<script>
import ProductCard from "./ProductCard.vue";
import Reviews from "./Reviews.vue";

export default {
  name: "MainContent",
  components: {
    ProductCard,
    Reviews
  }
};
</script>

<style>
</style>
