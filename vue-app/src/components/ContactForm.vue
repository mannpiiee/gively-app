<script setup>
const model = defineModel({
type:Object,
required: true,
})
</script>

<template>
    <h1>Contact Us</h1>
    <form>
       <div>
          <label for="name">Nama
            <input type="text" id="name" v-model="model.name">
          </label>
       </div>
       <div>
          <label for="type">type
            <select id="type" name="type" v-model="model.type">
                <option value="Regular">Regular</option>
                <option value="VIP">VIP</option>
            </select>
          </label>
        </div>
    </form>
</template>

<style scoped>

</style>