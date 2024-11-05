<script setup>
import "@passageidentity/passage-elements/passage-auth";
</script>

<template>
  <h1>Login</h1>
  <div class="authContainer">
    <passage-auth app-id="V0alwA7XSzKK5hRenPSvbiYf"></passage-auth>
  </div>
</template>

<style>
body {
  font-family: "Arial", sans-serif;
  background-color: #f4f4f9;
  margin: 0;
  padding: 20px;
  color: #333;
}

h1 {
  font-size: 2rem;
  color: #4a90e2;
  margin-bottom: 20px;
  text-align: center;
}

.authContainer {
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  margin: 20px auto;
  text-align: center;
}

passage-auth {
  display: block;
  margin-top: 20px;
  --primary-color: #4a90e2;
  --text-color: #333;
  --button-background-color: #4a90e2;
  --button-text-color: white;
}

@media (max-width: 600px) {
  .authContainer {
    padding: 20px;
    max-width: 90%;
  }
}
</style>
