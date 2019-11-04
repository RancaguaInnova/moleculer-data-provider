import create from "./index"

describe("Makes a post request to an API to insert a Document", () => {
  test("Returns an object with the full API url and request options", () => {
    const mockCreate = jest.fn(create)
    const request = mockCreate({data: {firstName: "Test", lastName: "User" }}, "http://localhost:3500", "users")
    expect(request).toStrictEqual({
      url: expect.any(String),
      options: expect.any(Object),
    })
  })
})
