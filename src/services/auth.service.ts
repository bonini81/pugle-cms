import axios from "axios";

const urlBase = "https://dev.edge-dob.com";

// const url = `https://dev.edge-dob.com/wp-json/jwt-auth/v1/token?username=${username}&password=${password}`;
const headers = {
  "Content-Type": "application/json",
};
 async function postAuthWordpressLogin(username: string, password: string) {
  const url = `${urlBase}/wp-json/jwt-auth/v1/token?${username}&password=${password}`;
  const response = await axios.post(url, { headers });
  // const data = await response.data;
}

export default {
  postAuthWordpressLogin,
}

/**
 * POST request
 * @param {string} url Url to request
 * @param {*} data Request Data
 * @param {number} timeout Timeout for request
 * @returns {object} result or exception of request
 */
/** 
async function postData<T>(
    url: string,
    data: any,
    timeout: number
  ): Promise<T> {
    try {
      const response = await axios.post<T>(url, data, { timeout });
      return processResponse<T>(response);
    } catch (error: any) {
      throw processError(error);
    }
  }
  */