import deleteRequest from "./index"

describe("Creates a DELETE request object for an API to delete a Document", () => {
  test("Returns an object with the full API url and request options", () => {
    const mockDelete = jest.fn(deleteRequest)
    const request = mockDelete({id: "asdfas" }, "http://localhost:3500", "users")
    expect(request).toStrictEqual({
      url: expect.any(String),
      options: expect.any(Object),
    })
  })
})
