import { stringify } from "query-string"
import transformSort from "../../helpers/transformSort"

const getManyReference = (params, apiUrl, resource) => {
  const { page, perPage } = params.pagination
  const { field, order } = params.sort
  const query = {
    sort: transformSort(field, order),
    pageSize: JSON.stringify(perPage),
    page: JSON.stringify(page),
    query: JSON.stringify({
      ...params.filter,
      [params.target]: params.id
    })
  }
  return `${apiUrl}/${resource}?${stringify(query)}`
}

export default getManyReference
