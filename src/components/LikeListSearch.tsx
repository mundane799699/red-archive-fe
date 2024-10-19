import React, { ChangeEvent, FC, useEffect, useRef, useState } from "react";
import { Button, Input, InputRef, message, Modal } from "antd";
import styles from "./ListSearch.module.scss";
import axios from "axios";
import { DeleteOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { useRequest } from "ahooks";
import { deleteLikeService, parseDetailService, queryTaskProgress } from "../services/like";

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
  const [userId, setUserId] = useState(queryParam.userId);
  const [title, setTitle] = useState(queryParam.title);
  const [author, setAuthor] = useState(queryParam.author);
  const { loading: deleteLoading, run: deleteCollect } = useRequest(
    async () => await deleteLikeService(userId),
    {
      manual: true,
      onSuccess: () => {
        message.success("删除成功");
        setQueryParam({ ...queryParam, userId, title, author, current: 1 });
      },
    }
  );

  const { loading: parseLoading, run: parseDetail } = useRequest(
    async () => await parseDetailService(userId),
    {
      manual: true,
      onSuccess: () => {
        message.success("开始采集");
      },
    }
  );

  const { run: queryDetail } = useRequest(async () => await queryTaskProgress(userId), {
    manual: true,
    onSuccess: data => {
      message.info(data);
    },
  });

  async function exportExcel() {
    try {
      const data = { userId, displayTitle: title, ownerNickname: author };
      const response = await axios.post("/mail/redbook/like/exportexcel", data, {
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
      const data = { userId, displayTitle: title, ownerNickname: author };
      const response = await axios.post("/mail/redbook/like/exportHtml", data, {
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

  function del() {
    confirm({
      title: `确定要删除用户${userId}的所有数据吗？`,
      okText: "确定",
      cancelText: "取消",
      icon: <ExclamationCircleOutlined />,
      onOk: deleteCollect,
    });
  }

  function startParseTask() {
    confirm({
      title: `确定开始采集用户${userId}的笔记详情吗？`,
      okText: "确定",
      cancelText: "取消",
      icon: <ExclamationCircleOutlined />,
      onOk: parseDetail,
    });
  }

  return (
    <div>
      <div className={styles.top}>
        <Input
          autoComplete="on"
          onChange={e => {
            setUserId(e.target.value);
          }}
          value={userId}
          style={{ width: 250 }}
          className={styles.userId}
          placeholder="请输入用户ID(必填)"
        />
        <Input
          onChange={e => {
            setTitle(e.target.value);
          }}
          value={title}
          style={{ width: 200 }}
          className={styles.title}
          placeholder="请输入笔记标题"
        />
        <Input
          onChange={e => {
            setAuthor(e.target.value);
          }}
          value={author}
          style={{ width: 200 }}
          className={styles.author}
          placeholder="请输入笔记作者"
        />
        <Button
          type="primary"
          onClick={() => {
            setQueryParam({ ...queryParam, userId, title, author, current: 1 });
          }}
        >
          搜索
        </Button>
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
            icon={<DeleteOutlined />}
            onClick={del}
            disabled={deleteLoading}
          >
            删除
          </Button>
        </div>
        <div className={styles.right}>
          <Button
            className={styles.start}
            type="primary"
            disabled={parseLoading}
            onClick={startParseTask}
          >
            采集详情
          </Button>
          <Button className={styles.showProgress} type="primary" onClick={queryDetail}>
            查询采集进度
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ListSearch;
