const deleteRequest = (params, apiUrl, resource) => ({
  url: `${apiUrl}/${resource}/${params.id}`,
  options: {
    method: "DELETE"
  },
})

export default deleteRequest
