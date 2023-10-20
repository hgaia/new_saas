<template>
  <vContainer>
    <v-text-field v-model="email"/>
    <v-text-field v-model="password"/>
    <VBtn color="success" @click="login()">Login</VBtn>
    <VBtn color="success" @click="sanctum()">sanctum</VBtn>
  </vContainer>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';

  const email = ref();
  const password = ref();

    function login(){
      axios.post('api/login',{
        email:'test@example.com',
        password:'password'
      }).then(response => {
        console.log(response)
      });
    }
    function sanctum(){
      axios.get('sanctum/csrf-cookie').then(response => {
        console.log(response)
      });
    }
    function getUser(){
      axios.get('api/user').then(response => {
        console.log(response)
      });
    }
</script>
