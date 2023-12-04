// This is a testing file for a javascript online shop. I enjoyed doing unit testing.

describe("getProducs", () => {
  it("should make a fetch request to get the products from the product API", async () => {
    const url = `${process.env.REACT_APP_API_URL}/products`;
    window.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockProducts,
    });

    const products = await getProducts();

    expect(window.fetch).toHaveBeenCalledWith(url);
    expect(mockProducts).toEqual(products);
  });
});
