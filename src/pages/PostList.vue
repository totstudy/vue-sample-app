<script setup>
import { computed, onMounted, ref } from "vue";
import PostItem from "../components/PostItem.vue";
import { useStore } from "vuex";

const store = useStore();

const postList = computed(() => store.state.posts);

</script>

<template>
  <p>
    <RouterLink to="/new" class="btn btn-success">追加</RouterLink>
  </p>
  <div>
    <PostItem
      v-for="post of postList"
      :key="post.id"
      :post="post"
    />
  </div>
</template>

<style></style>
