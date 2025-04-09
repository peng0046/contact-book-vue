<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { contactData, saveContactData } from "../data";

const firstName = ref("");
const lastName = ref("");
const email = ref("");
const router = useRouter();

const addContact = () => {
  if (firstName.value !== "" && lastName.value !== "" && email.value !== "") {
    const newContact = {
      id: Date.now(),
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
    };

    // Update in-memory contact data
    contactData.value.push(newContact);

    // Save the updated contact data to localStorage
    saveContactData();

    // Navigate back to the home page
    router.push("/");
  } else {
    alert("Please complete the form.");
  }
};

const goBack = () => {
  router.push("/");
};
</script>

<template>
  <div class="container">
    <button type="button" @click="goBack" class="back-button">
      Back to Contact Book
    </button>
    <h2>Add Contact</h2>

    <div>
      <input
        v-model="firstName"
        type="text"
        placeholder="Please enter your First Name"
        required
      />
    </div>

    <div>
      <input
        v-model="lastName"
        type="text"
        placeholder="Please enter your Last Name"
        required
      />
    </div>

    <div>
      <input
        v-model="email"
        type="email"
        placeholder="Please enter your Email Address"
        required
      />
    </div>

    <button @click="addContact" type="button">Add Contact</button>
  </div>
</template>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

h2 {
  text-align: center;
}

input {
  display: block;
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

button {
  padding: 8px 12px;
  border: none;
  background: #007bff;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background: #0056b3;
}
</style>
