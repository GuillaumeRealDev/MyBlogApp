import axios from 'axios'

export const playerStore = defineStore('players', () => {})

export default class playerStore {
   
    async getPlayerById(id: string) {
    await axios.get(`/api/player/${id}`)
  }
}
