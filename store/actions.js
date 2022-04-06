export default {
  async getData({ commit }) {
    const response = await fetch('https://rickandmortyapi.com/api/character')
    const data = await response.json()
    try {
      commit('SET_DATA', data.results)
    } catch (error) {
      return error
    }
  },
}
