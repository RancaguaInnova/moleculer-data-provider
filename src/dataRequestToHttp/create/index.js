const create = (params, apiUrl, resource) => ({
  url: `${apiUrl}/${resource}`,
  options: {
    method: "POST",
    body: JSON.stringify(params.data)
  }
})

export default create
