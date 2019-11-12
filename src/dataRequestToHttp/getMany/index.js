import { stringify } from "query-string"

const getMany = (params, apiUrl, resource) => {
  const query = {
    query: JSON.stringify({ id: { $in: params.ids } })
  }
  return `${apiUrl}/${resource}?${stringify(query)}`
}

export default getMany
