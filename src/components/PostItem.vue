<script setup>
import {useStore} from 'vuex'
const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});


const store = useStore();
const emit = defineEmits(["delete"]);

function onDeleteClick(post) {
  if (!window.confirm("削除してもよろしいでしょうか？")) {
    return;
  }

  store.dispatch('deletePost', post.id)
}
</script>

<template>
  <div class="card mb-4">
    <div class="card-body">
      <h5 class="card-title">{{ post.title }}</h5>
      <p class="card-text">{{ post.body }}</p>
      <div class="text-end">
        <RouterLink :to="`/edit/${post.id}`" class="btn btn-primary me-2"
          >編集</RouterLink
        >
        <button @click="onDeleteClick(post)" class="btn btn-danger">
          削除
        </button>
      </div>
    </div>
  </div>
</template>

<style></style>
