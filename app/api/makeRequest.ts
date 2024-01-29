import api from ".";

interface IApi {
  method: "GET" | "POST" | "PUT" | "DELETE";
  path: string;
  query?: any;
  body?: any;
}

export const makeRequest = async ({
  method,
  path,
  query = {},
  body = null,
}: IApi) => {
  try {
    let url = `${path}`;

    // GET 요청의 경우, 쿼리 매개변수를 URL에 추가
    if (method === "GET" && Object.keys(query).length) {
      const queryParams = new URLSearchParams(query).toString();
      url += `?${queryParams}`;
    }

    let response;

    switch (method) {
      case "GET":
        response = await api.get(url);
        break;
      case "POST":
        response = await api.post(url, body);
        break;
      case "PUT":
        response = await api.put(url, body);
        break;
      case "DELETE":
        response = await api.delete(url);
        break;
      default:
        throw new Error(`Unsupported method: ${method}`);
    }

    return response.data?.data;
  } catch (error) {
    throw error;
  }
};
