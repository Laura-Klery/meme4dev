import { defineStore } from 'pinia'

export const useAuthenticateStore = defineStore('authenticate',  {
  state: () => ({
    authenticated: false
  }),
})
