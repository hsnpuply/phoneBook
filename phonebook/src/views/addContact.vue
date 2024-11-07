<template >
    <h2 class="text-2xl font-bold text-green-400 text-center py-8">Add Your Contact</h2>

    <form  @submit.prevent="checkForms" action="" class="flex flex-col gap-3 items-center  bg-gray-400 pt-4   ">
        <label for="fullname" class="text-xl font-serif" >Full Name</label>

        <input type="text" name="fullname" placeholder="For Example : حــسن بــراتی" :ref="fullName" required
         class="text-xl placeholder:text-green-500/80 w-1/5 px-4 py-2 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600">
         
        <label for="phone" class="text-xl font-serif" >Phone</label>

        <input type="tel" name="phone" placeholder="e.g 09928717698" :ref="phoneNumber"   required
        class="text-xl  w-1/5 px-4 py-2 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"  >
        
        <label for="birthdate">Birth Date</label>
        <input type="date" :ref="date" name="birthdate"  required
            class="text-xl w-1/5 px-4 py-2 rounded-md border border-gray-300 bg-gray-100 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600">
        <div class="checkBox flex items-center gap-4 justify-center group py-4">
            <input type="checkbox"  name="VIP" :ref="isVip"  class=" scale-[1.6]"/>
            <label for="VIP" class="text-xl  group-hover:text-red-500 duration-300">VIP Contact</label>
        </div>
        <button class="px-4 py-2 mb-8 bg-green-500 border-2 hover:border-white border-black text-2xl w-1/3 rounded-2xl font-serif text-white hover:bg-gray-800">Save</button>
    </form>






</template>
<script setup>


import {ref} from 'vue';




const fullName=ref('')
const isVip=ref(true)
const date=ref('')
const phoneNumber=ref('')


    


</script>

<style scoped>

</style>