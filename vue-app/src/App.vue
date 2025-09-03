<script setup>
import MainButton from './components/MainButton.vue';
const name = "makhdi"
</script>

<template>
  <MainButton></MainButton>
  <br><MainButton></MainButton>
  <br><MainButton/>
  <h1><center>Hello World</center></h1>
  <hr><p>{{ name }}</p>
  <OptionsComponent />
  <CompositionComponent />
  <ContactForm />
</template>

<style scoped></style>