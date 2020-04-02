<template>
  <div class="mt-3 mb-3">
    <b-card no-body class="overflow-hidden">
      <b-row no-gutters>
        <b-col md="2">
          <b-card-img :src="img" class="rounded-0"></b-card-img>
        </b-col>
        <b-col md="10">
          <b-card-body>
            <h4 class="text-left">
              <a href="#">{{title}}</a>
            </h4>
            <b-card-text class="text-left">{{desc}}</b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "ReviewCard",
  props: ["img", "title", "desc"]
};
</script>

<style>
</style>
