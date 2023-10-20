<template>
  <vContainer>
    Dashboard
  </vContainer>
</template>

<script setup>
import axios from 'axios';
axios.defaults.withCredentials = true;

    function login(){
      axios.post('http://localhost:8000/api/login',{
        email:'test@example.com',
        password:'password'
      }).then(response => {
        console.log(response)
      });
    }
    function sanctum(){
      axios.get('http://localhost:8000/sanctum/csrf-cookie').then(response => {
        console.log(response)
      });
    }
    function getUser(){
      axios.get('http://localhost:8000/api/user').then(response => {
        console.log(response)
      });
    }
</script>
