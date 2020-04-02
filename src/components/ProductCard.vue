<template>
  <div class="mt-5 mb-5">
    <b-card>
      <b-row no-gutters>
        <b-col md="4" style="position: relative;">
          <h4 class="cta-label">Top Pick</h4>
          <b-card-img src="https://i.imgur.com/xstvHgl.jpg" class="rounded-0"></b-card-img>
        </b-col>
        <b-col md="1"></b-col>
        <b-col md="7">
          <h3 class="mt-2">
            <a href="#">Beats by Dre PowerBeats</a>
          </h3>
          <b-card-sub-title class="mb-2">Apple/Beats</b-card-sub-title>

          <div>
            Price:
            <span class="price">$299.95</span>

            <b-list-group class="mt-3 mb-4">
              <b-list-group-item>
                <span class="font-weight-bold">Pros:</span> Great battery life, incredible sound, comfortable
              </b-list-group-item>
              <b-list-group-item><span class="font-weight-bold">Cons:</span> Expensive, warranty, limited color choices</b-list-group-item>
            </b-list-group>
          </div>
          <b-card-text>
            We absolutely loved the new
            <a href="#">Beats by Dre PowerBeats</a> from
            Apple. They’re expensive, but worth every penny. When we
            tested them against other headphones in this price range, they
            really shined, and they’re great for exercise because they stay
            put and are water and sweat resistant.
          </b-card-text>

          <b-btn variant="warning" class="cta-btn">
            <a href="#">Buy from Amazon: $299.95</a>
          </b-btn>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "ProductCard"
};
</script>

<style scoped>
.cta-label {
  position: absolute;
  left: -30px;
  top: -28px;
  background: red;
  color: white;
  padding: 10px;
}

.cta-label::after {
  content: " ";
  display: block;
  position: absolute;
  left: -10px;
  bottom: -7px;
  border-color: rgba(0, 0, 0, 0) #f00 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);
  border-style: inset solid inset inset;
  border-width: 0 10px 7px;
}

.cta-btn a {
  color: black;
  text-decoration: none;
}

.price {
  font-weight: bold;
  color: #f00;
}
</style>
