<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const route = useRoute();
const router = useRouter();

const model = ref({
  id: "",
  title: "",
  body: "",
});

onMounted(async () => {
  if (!route.params.id) {
    return;
  }
  model.value = await store.dispatch("getSinglePost", route.params.id);
});

function onSubmit() {
  store.dispatch("savePost", model.value).then(() => {
    router.push("/");
  });
}
</script>

<template>
  <div>
    <p>
      <RouterLink to="/" class="btn btn-outline-secondary">
        一覧に戻る
      </RouterLink>
    </p>
    <form @submit.prevent="onSubmit">
      <h1>{{ model.id ? "編集" : "追加" }}</h1>
      <div class="mb-3">
        <input
          type="text"
          class="form-control"
          v-model="model.title"
          placeholder="タイトル"
        />
      </div>
      <div class="mb-3">
        <textarea
          type="text"
          class="form-control"
          v-model="model.body"
          placeholder="内容"
        ></textarea>
      </div>
      <p>
        <button
          :disabled="!model.title || !model.body"
          class="btn btn-success"
          type="submit"
        >
          確定
        </button>
      </p>
    </form>
  </div>
</template>

<style></style>
