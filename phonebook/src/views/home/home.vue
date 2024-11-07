<template >
   <h1 class="text-2xl font-bold text-center py-5">Contacts List</h1>



   <p>{{ stars }}</p>

   <button @click="stars++" class="mb-4 rounded-xl bg-transparent border-2 border-black px-5">Click for get more stars</button>
   <div class="contactsList">
      <ul v-for="(item,index) in allContacts" :key="index">
         <li>
         <div class="contacts flex items-center justify-between border-b-black border-b-4 py-5 hover:bg-green-400 cursor-pointer">
            <div class="information">
            <p><span>full Name :</span> {{ allContacts[index].fullName }}</p>
            <p><span>phoneNumber :</span>{{ allContacts[index].phoneNumber }}</p>
            <p><span>Date :</span>{{ allContacts[index].date }}</p>
            <p v-if="allContacts[index].vip" :class="allContacts[index].vip ? 'bg-yellow-500 text-black font-bold py-2 max-w-46 text-center rounded-lg ' : ''">
               <span>Status :</span> {{ allContacts[index].vip ? 'Vip Contact ' : ''}}</p>
            </div>

            <div class="actionButtons font-mono bg-gray-400 flex items-center gap-4 px-8">
               <button class="font-bold bg-yellow-500 px-8 py-2 ">Update</button>
               <button class="font-bold bg-red-500 px-8 py-2 ">Delete</button>
            </div>
          </div>
      </li>

      </ul>
   </div>
</template>
<script setup>
import {ref} from 'vue';
const stars=ref(0)


import { useContactsStorage } from '../../stores/counter.js';


const contactsStore = useContactsStorage();
// const allContacts = contactsStore.state().ourContacts;
const allContacts = contactsStore.state().ourContacts;


</script>

<style >
    
</style>