import axios from "axios";
import { message } from "antd";

const instance = axios.create({
  timeout: 10 * 1000,
});

// response 拦截：统一处理errno和msg
instance.interceptors.response.use(
  res => {
    const resData = (res.data || {}) as ResType;
    const { code, data, msg = "出错啦" } = resData;
    if (code !== 200) {
      message.error(msg);
      throw new Error(msg);
    }
    return data as any;
  },
  err => {
    console.log("请求发生错误", err);
    return err;
  }
);

export default instance;

export type ResType = {
  code: number;
  data?: ResDataType;
  msg?: string;
};

export type ResDataType = {
  [key: string]: any;
};
