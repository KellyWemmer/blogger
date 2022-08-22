<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <AccountForm/>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity';
import { AppState } from '../AppState';
export default {
  name: "Account",
  setup() {
    return {
      account: computed(() => AppState.account)
    }
  }
}
</script>

<style scoped>
</style>