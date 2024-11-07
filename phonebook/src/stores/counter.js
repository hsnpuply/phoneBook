import { defineStore } from 'pinia';

export const useContactsStorage = defineStore('contacts', () => {
   const state = () => ({
    ourContacts: [
      
      {
        id: 1,
        vip: true,
        fullName: "Hasan Barati",
        phoneNumber: "09928717698",
        date: "2024-11-03",
        vip:true
      },

      {
        id: 12,
        vip: true,
        fullName: "Ali ",
        phoneNumber: "09928717698",
        date: "2024-11-03",
        vip:true
      },

      {
        id: 2,
        vip: true,
        fullName: "Hosein Barati",
        phoneNumber: "09928717698",
        date: "2024-11-03",
        vip:false
      },
      {
        id: 3,
        vip: true,
        fullName: "Morteza Madadi",
        phoneNumber: "09928717698",
        date: "2024-11-03",
        vip:true
      },
      {
        id: 4,
        vip: true,
        fullName: "Seyed Reza Hoseini",
        phoneNumber: "09928717698",
        date: "2024-11-03",
        vip:false
      },
    ],
  });

  const getters = {
  }

  const actions = {
    async getAsyncContacts() {

      return this.ourContacts 
    },

  };

  // return { state, getters, actions };
  return { state, getters, actions };

});