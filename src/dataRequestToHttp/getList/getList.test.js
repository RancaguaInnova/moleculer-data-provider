import getList from "./index"

describe("Creates a GET request object for an API to get a list of Documents", () => {
  test("Return an object with the full API url and request options", () => {
    const mockGetList = jest.fn(getList)
    const params = {
      pagination: {
        page: 1,
        perPage: 25,
      },
      sort: {
        field: "firstName",
        order: "desc",
      },
      filter: { email: "johndoe@email.com" }
    }
    const request = mockGetList(params, "https://services.smartrancagua.com", "users")
    expect(request).toMatch(/(http|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:/~+#-]*[\w@?^=%&amp;/~+#-])?/)
  })
})
