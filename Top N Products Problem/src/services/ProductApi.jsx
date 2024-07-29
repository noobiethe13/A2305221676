const BASE_URL = "http://20.244.56.144/test";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzIyMjQzMDQxLCJpYXQiOjE3MjIyNDI3NDEsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImY3ZWMxZmRkLTU0Y2UtNDIxMy1iNmQ2LWY1Y2I0NGUzODhkNSIsInN1YiI6ImRlYmF5YW5kYXMxMjExQGdtYWlsLmNvbSJ9LCJjb21wYW55TmFtZSI6IkFNSVRZIFVOSVZFUlNJVFkgTk9JREEiLCJjbGllbnRJRCI6ImY3ZWMxZmRkLTU0Y2UtNDIxMy1iNmQ2LWY1Y2I0NGUzODhkNSIsImNsaWVudFNlY3JldCI6InBFbFZ3d2l2dVp2TUl5SWgiLCJvd25lck5hbWUiOiJEZWJheWFuIERhcyIsIm93bmVyRW1haWwiOiJkZWJheWFuZGFzMTIxMUBnbWFpbC5jb20iLCJyb2xsTm8iOiJBMjMwNTIyMTY3NiJ9.395pGwCVZyS0wQ5ExGt7hLIrJ148469ztyAyx_BBwc4";

export const fetchProducts = async (
  companyName,
  categoryName,
  topN,
  minPrice,
  maxPrice
) => {
  try {
    const url = `${BASE_URL}/companies/${companyName}/categories/${categoryName}/products?top=${topN}&minPrice=${minPrice}&maxPrice=${maxPrice}`;

    console.log("Request URL:", url);

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error response:", errorData);
      throw new Error(
        errorData.message || "An error occurred while fetching products"
      );
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
