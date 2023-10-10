<template>
  <vContainer>
    <VBtn color="success" @click="sanctum()">sanctum</VBtn>
    <VBtn color="success" @click="login">Login</VBtn>
  </vContainer>
</template>

<script setup>
import axios from 'axios';
axios.defaults.withCredentials = true;

    function login(){
      axios.post('http://localhost:8000/login',{
        email:'test@example.com',
        password:'passwords'
      }).then(response => {
        console.log(response)
      });
    }
    function sanctum(){
      axios.get('http://localhost:8000/sanctum/csrf-cookie').then(response => {
        console.log(response)
      });
    }
</script>
