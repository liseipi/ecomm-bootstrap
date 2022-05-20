<template>
  <div class="mx-auto p-5">
    <button type="button" class="btn btn-secondary" @click="$router.push('/a')">A Theme</button>
    <button type="button" class="btn btn-secondary" @click="$router.push('/b')">B Theme</button>
    <button type="button" class="btn btn-secondary" @click="$router.push('/c')">C Theme</button>
  </div>
</template>

<script>
export default {
  name: "nav"
}
</script>
