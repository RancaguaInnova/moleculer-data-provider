const update = (params, apiUrl, resource) => ({
  url: `${apiUrl}/${resource}/${params.id}`,
  options: {
    method: "PUT",
    body: JSON.stringify(params.data),
  }
})

export default update
