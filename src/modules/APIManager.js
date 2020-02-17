let URL = `http://localhost:3000/event`
export default {
  async get(params) {
    if (params) return (URL += `/${params}`)
    const e = await fetch(URL)
    return await e.json()
  },
  async save(entry, id) {
    if (id) return (URL += `/${id}`)
    const e = await fetch(URL, {
      method: id ? "PUT" : "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(entry)
    })
    return await e.json()
  },
  async delete(id) {
    const e = await fetch(`${URL}/${id}`, {
      method: "DELETE"
    })
    return await e.json()
  }
}
