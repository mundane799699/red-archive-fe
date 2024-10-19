import React, { FC, useEffect } from "react";
import { Button, Form, Input, message, Modal, Tooltip } from "antd";
import styles from "./ListSearch.module.scss";
import axios from "axios";
import { DeleteOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { useRequest } from "ahooks";
import {
  deleteCollectService,
  parseDetailService,
  forceParseDetailService,
  queryTaskProgress,
} from "../services/collect";

const { confirm } = Modal;

type PropsType = {
  queryParam: { userId: string; title: string; author: string; current: number; pageSize: number };
  setQueryParam: (params: {
    userId: string;
    title: string;
    author: string;
    current: number;
    pageSize: number;
  }) => void;
};

const ListSearch: FC<PropsType> = (props: PropsType) => {
  const { queryParam, setQueryParam } = props;

  const [form] = Form.useForm();
  useEffect(() => {
    const { queryParam } = props;
    const { userId, title, author } = queryParam;
    form.setFieldsValue({
      userId,
      title,
      author,
    });
  }, [form]);

  const { loading: deleteLoading, run: deleteCollect } = useRequest(
    async () => await deleteCollectService(form.getFieldValue("userId")),
    {
      manual: true,
      onSuccess: () => {
        message.success("删除成功");
        setQueryParam({ ...form.getFieldsValue(), current: 1 });
      },
    }
  );

  const { loading: parseLoading, run: parseDetail } = useRequest(
    async () => await parseDetailService(form.getFieldValue("userId")),
    {
      manual: true,
      onSuccess: () => {
        message.success("开始采集");
      },
    }
  );

  const { loading: forceParseLoading, run: forceParseDetail } = useRequest(
    async () => await forceParseDetailService(form.getFieldValue("userId")),
    {
      manual: true,
      onSuccess: () => {
        message.success("开始强制采集");
      },
    }
  );

  const { run: queryDetail } = useRequest(
    async () => await queryTaskProgress(form.getFieldValue("userId")),
    {
      manual: true,
      onSuccess: data => {
        message.info(data);
      },
    }
  );

  async function exportExcel() {
    try {
      const { userId, title, author } = form.getFieldsValue();
      const data = {
        userId,
        displayTitle: title,
        ownerNickname: author,
      };
      const response = await axios.post("/mail/redbook/collect/exportexcel", data, {
        headers: {
          "Content-Type": "application/json",
        },
        responseType: "blob",
      });
      const contentDisposition = response.headers["content-disposition"];
      const filenameMatch = decodeURIComponent(contentDisposition.match(/filename\=(.*)/)[1]);
      const filename = filenameMatch || "file.xlsx";
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const a = document.createElement("a");
      a.href = url;
      a.setAttribute("download", filename);
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (error) {
      console.error("Error downloading Excel file:", error);
    }
  }

  async function exportHtml() {
    try {
      const { userId, title, author } = form.getFieldsValue();
      const data = {
        userId,
        displayTitle: title,
        ownerNickname: author,
      };
      const response = await axios.post("/mail/redbook/collect/exportHtml", data, {
        headers: {
          "Content-Type": "application/json",
        },
        responseType: "blob",
      });
      const contentDisposition = response.headers["content-disposition"];
      const filenameMatch = decodeURIComponent(contentDisposition.match(/filename\=(.*)/)[1]);
      const filename = filenameMatch || "file.html";
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const a = document.createElement("a");
      a.href = url;
      a.setAttribute("download", filename);
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (error) {
      console.error("Error downloading html file:", error);
    }
  }

  const { loading: downloadZipLoading, run: downloadZip } = useRequest(
    async () => {
      const { userId, title, author } = form.getFieldsValue();
      const data = {
        userId: userId,
        displayTitle: title,
        ownerNickname: author,
      };
      const response = await axios.post("/mail/redbook/collect/downloadzip", data, {
        headers: {
          "Content-Type": "application/json",
        },
        responseType: "blob",
      });
      return response;
    },
    {
      manual: true,
      onSuccess(response) {
        const contentDisposition = response.headers["content-disposition"];
        const filenameMatch = decodeURIComponent(contentDisposition.match(/filename\=(.*)/)[1]);
        const filename = filenameMatch || "file.zip";
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const a = document.createElement("a");
        a.href = url;
        a.setAttribute("download", filename);
        document.body.appendChild(a);
        a.click();
        a.remove();
      },
    }
  );

  function del() {
    const userId = form.getFieldValue("userId");
    confirm({
      title: `确定要删除用户${userId}的所有数据吗？`,
      okText: "确定",
      cancelText: "取消",
      icon: <ExclamationCircleOutlined />,
      onOk: deleteCollect,
    });
  }

  function startParseTask() {
    const userId = form.getFieldValue("userId");
    confirm({
      title: `确定开始采集用户${userId}的笔记详情吗？`,
      okText: "确定",
      cancelText: "取消",
      icon: <ExclamationCircleOutlined />,
      onOk: parseDetail,
    });
  }

  function startForceParseTask() {
    const userId = form.getFieldValue("userId");
    confirm({
      title: `确定开始强制采集用户${userId}的笔记详情吗？`,
      okText: "确定",
      cancelText: "取消",
      icon: <ExclamationCircleOutlined />,
      onOk: forceParseDetail,
    });
  }

  const onFinish = (values: any) => {
    const { userId, title, author } = values || {};
    setQueryParam({ ...queryParam, userId, title, author, current: 1 });
  };

  return (
    <div>
      <div className={styles.top}>
        <Form layout="inline" form={form} onFinish={onFinish}>
          <Form.Item
            label="用户ID"
            name="userId"
            rules={[{ required: true, message: "请输入用户名" }]}
          >
            <Input
              style={{ width: 250 }}
              className={styles.userId}
              placeholder="请输入用户ID(必填)"
            />
          </Form.Item>
          <Form.Item label="笔记标题" name="title">
            <Input style={{ width: 200 }} className={styles.title} placeholder="请输入笔记标题" />
          </Form.Item>
          <Form.Item label="笔记作者" name="author">
            <Input style={{ width: 200 }} className={styles.author} placeholder="请输入笔记作者" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              搜索
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className={styles.bottom}>
        <div className={styles.left}>
          <Button className={styles.export} type="primary" onClick={exportExcel}>
            导出excel
          </Button>
          <Button className={styles.export} type="primary" onClick={exportHtml}>
            导出html
          </Button>
          <Button
            className={styles.export}
            type="primary"
            onClick={downloadZip}
            loading={downloadZipLoading}
            disabled={downloadZipLoading}
          >
            下载zip(md文件)
          </Button>
          <Button
            className={styles.export}
            type="primary"
            icon={<DeleteOutlined />}
            onClick={del}
            disabled={deleteLoading}
          >
            删除
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ListSearch;
