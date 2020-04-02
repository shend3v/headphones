<template>
    <b-navbar toggleable="lg" type="light" variant="warning" sticky class="shadow">
      <b-navbar-brand href="#" class="font-weight-bold">SiteName</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item class="nav--link">Health</b-nav-item>
          <b-nav-item class="nav--link">Fitness</b-nav-item>
          <b-nav-item class="nav--link">Sports</b-nav-item>
          <b-nav-item class="nav--link">Diet</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  name: "Navbar"
};
</script>

<style scoped>
.nav--link a {
  font-size: 1.0825rem;
}
</style>
