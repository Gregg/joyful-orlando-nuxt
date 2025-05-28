<script setup lang="ts">
const { setTestDate } = useGiveaway();
const isDev = computed(() => process.client && process.env.NODE_ENV === 'development');
const testDateInput = ref('');

const updateTestDate = () => {
  if (testDateInput.value) {
    setTestDate(new Date(testDateInput.value));
  } else {
    setTestDate(null);
  }
};

const resetDate = () => {
  testDateInput.value = '';
  setTestDate(null);
};
</script>

<template>
  <div v-if="isDev" class="giveaway-tester">
    <div class="card p-3 mb-3">
      <h5 class="mb-3">Giveaway Date Tester</h5>
      <div class="d-flex gap-2 align-items-start">
        <input
          v-model="testDateInput"
          type="datetime-local"
          class="form-control"
          style="max-width: 250px"
        />
        <button
          class="btn btn-primary"
          @click="updateTestDate">
          Set Date
        </button>
        <button
          class="btn btn-secondary"
          @click="resetDate">
          Reset to Real Time
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.giveaway-tester {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
  max-width: 400px;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
