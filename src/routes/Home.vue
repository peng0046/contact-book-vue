<script setup>
import { ref, computed } from "vue";
import { contactData } from "../data";  
import { useRouter } from "vue-router";

const searchTerm = ref("");
const router = useRouter();

const filteredContacts = computed(() => {
  const searchTermLower = searchTerm.value.toLowerCase();
  const filtered = contactData.value.filter((contact) => {
    const fullName = `${contact.firstName} ${contact.lastName}`.toLowerCase();
    return fullName.includes(searchTermLower);
  });

  return filtered.sort((a, b) => a.lastName.localeCompare(b.lastName));
});

const goToAddContact = () => {
  router.push("/add");
};
</script>

<template>
  <div class="container">
    <h1>Contact Book</h1>
    <input v-model="searchTerm" type="text" placeholder="Search by name..." class="search-input" />
    <button @click="goToAddContact">Add Contact</button>
    <ul>
      <li v-for="contact in filteredContacts" :key="contact.id">
        <router-link :to="`/contact/${contact.id}`">
          {{ contact.firstName }} {{ contact.lastName }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
}

.search-input {
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
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

ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 10px;
  border-bottom: 1px solid #eee;
  cursor: pointer;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #f0f0f0;
}
</style>