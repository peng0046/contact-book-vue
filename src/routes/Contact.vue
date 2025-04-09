<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { contactData, loadContactData, saveContactData } from "../data";

const route = useRoute();
const router = useRouter();
const contact = ref(null);
const isEditing = ref(false);

// Load contact data based on route parameter
onMounted(() => {
  loadContactData(); // Load data from localStorage
  const contactId = parseInt(route.params.id);
  contact.value = contactData.value.find((contact) => contact.id === contactId);
});

// Update contact information
const updateContact = () => {
  const contactIndex = contactData.value.findIndex(
    (c) => c.id === contact.value.id
  );
  if (contactIndex !== -1) {
    contactData.value[contactIndex] = { ...contact.value }; // Update contact information
    saveContactData(); // Save updated data to localStorage
    isEditing.value = false; // Exit edit mode
  }
};

// Delete contact
const deleteContact = () => {
  const confirmed = window.confirm(
    "Are you sure you want to delete this contact?"
  );
  if (!confirmed) return;

  const contactIndex = contactData.value.findIndex(
    (c) => c.id === contact.value.id
  );
  if (contactIndex !== -1) {
    contactData.value.splice(contactIndex, 1); // Delete contact
    saveContactData(); // Update localStorage
    router.push("/"); // Navigate back to contact list after deletion
  }
};

// Go back button
const goBack = () => {
  router.push("/");
};
</script>

<template>
  <div class="container">
    <button type="button" @click="goBack" class="back-button">
      Back to Contact Book
    </button>
    <h1>Contact Details</h1>

    <!-- Display contact information -->
    <div v-if="contact">
      <div v-if="!isEditing">
        <p>
          <strong>Name:</strong> {{ contact.firstName }} {{ contact.lastName }}
        </p>
        <p><strong>Email:</strong> {{ contact.email }}</p>
        <button @click="isEditing = true" class="edit-button">Edit</button>
        <button @click="deleteContact" class="delete-button">Delete</button>
      </div>

      <!-- Edit contact form -->
      <div v-else>
        <form @submit.prevent="updateContact" class="edit-form">
          <div>
            <label for="firstName">First Name</label>
            <input
              v-model="contact.firstName"
              id="firstName"
              type="text"
              required
            />
          </div>
          <div>
            <label for="lastName">Last Name</label>
            <input
              v-model="contact.lastName"
              id="lastName"
              type="text"
              required
            />
          </div>
          <div>
            <label for="email">Email</label>
            <input v-model="contact.email" id="email" type="email" required />
          </div>
          <div class="form-buttons">
            <button type="submit" class="save-button">Save Changes</button>
            <button
              type="button"
              @click="isEditing = false"
              class="cancel-button"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>

    <div v-else>
      <p>Contact not found!</p>
    </div>
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
  margin-right: 1rem;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background: #0056b3;
}

.delete-button {
  background: #dc3545;
  color: white;
}

.delete-button:hover {
  background: #c82333;
}

.cancel-button {
  background: #ccc;
  color: black;
}

.cancel-button:hover {
  background: #aaa;
}
</style>
