import { stringify } from "query-string"
import transformSort from "../../helpers/transformSort"

const getList = (params, apiUrl, resource ) => {
  const { page, perPage } = params.pagination
  const { field, order } = params.sort

  const query = {
    sort: transformSort(field, order),
    pageSize: JSON.stringify(perPage),
    page: JSON.stringify(page),
    filter: JSON.stringify(params.filter)
  }
  return `${apiUrl}/${resource}?${stringify(query)}`
}

export default getList
