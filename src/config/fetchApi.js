import axios from "axios";

const Url = "http://localhost:8080/";
/// Api configration file with all method's (Post, Put, Patch, Get, Delete)
const fetchapi = async (serviceType) => {
  if (serviceType.method === "post") {
    return axios
      .post(`${Url}${serviceType.reqUrl}`, serviceType.data, {
        headers: serviceType.token
          ? {
              "Content-Type": "application/json",
              token: serviceType.token, //the token is a variable which holds the token
            }
          : {},
      })
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((err) => {
        console.log(err,"error");
      });
  }

  if (serviceType.method === "get") {
    return axios
      .get(
        `${Url}${serviceType.reqUrl}${
          serviceType.param ? `?param=` + serviceType.param : ""
        }`,
        {
          headers: serviceType.token
            ? {
                "Content-Type": "application/json",
                token: serviceType.token, //the token is a variable which holds the token
              }
            : {},
        }
      )
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err.response);
      });
  }
};
export default fetchapi;
