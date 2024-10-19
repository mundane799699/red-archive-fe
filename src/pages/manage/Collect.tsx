import { useRequest } from "ahooks";
import { FC, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Typography, Table, Image, Pagination, Button } from "antd";
import styles from "./Collect.module.scss";
import { DEFAULT_PAGE_SIZE, LIST_USER_ID_PARAM_KEY } from "../../constant";
import { getCollectListService } from "../../services/collect";
import CollectListSearch from "../../components/CollectListSearch";
import axios from "axios";

const { Title } = Typography;

const Collect: FC = () => {
  const [searchParams] = useSearchParams();
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const [queryParam, setQueryParam] = useState({
    userId: searchParams.get(LIST_USER_ID_PARAM_KEY) || "",
    title: "",
    author: "",
    current: 1,
    pageSize: DEFAULT_PAGE_SIZE,
  });

  const { run: query } = useRequest(
    async () => {
      const { userId, title, author, current, pageSize } = queryParam;
      if (!userId) return {};
      const data = await getCollectListService({
        userId,
        displayTitle: title,
        ownerNickname: author,
        pageNum: current,
        pageSize,
      });
      return data;
    },
    {
      refreshDeps: [queryParam],
      onSuccess(data) {
        const { list = [], total = 0 } = data;
        setTotal(total);
        setList(list);
      },
    }
  );

  const dataSource = list.map((item: any) => {
    const { noteId } = item;
    return {
      ...item,
      key: noteId,
    };
  });

  const tableColumns = [
    {
      title: "封面图",
      dataIndex: "coverUrl",
      render: (url: string, record: any) => {
        return (
          <a
            href={`https://www.xiaohongshu.com/explore/${record.noteId}`}
            target="_blank"
          >
            <Image src={url} width={200} />
          </a>
        );
      },
      with: 300,
    },
    {
      title: "笔记标题",
      dataIndex: "displayTitle",
      render: (title: string, record: any) => {
        return (
          <a
            href={`https://www.xiaohongshu.com/explore/${record.noteId}`}
            target="_blank"
          >
            {title}
          </a>
        );
      },
    },
    {
      title: "笔记内容",
      dataIndex: "noteDesc",
    },
    {
      title: "笔记作者",
      dataIndex: "ownerNickname",
      width: 100,
      render: (nickname: string, record: any) => {
        return (
          <a
            href={`https://www.xiaohongshu.com/user/profile/${record.ownerId}`}
            target="_blank"
          >
            {nickname}
          </a>
        );
      },
    },
    {
      title: "类型",
      dataIndex: "type",
      width: 100,
    },
    {
      title: "点赞数",
      dataIndex: "likedCount",
      width: 100,
    },
    {
      title: "笔记状态",
      dataIndex: "status",
      width: 100,
      render: (status: number) => {
        if (status === 0) {
          return "有效";
        } else if (status === 1) {
          return "已失效";
        }
        return "";
      },
    },
    {
      title: "操作",
      render: (record: any) => {
        return (
          <Button type="primary" onClick={() => downloadMd(record.noteId)}>
            下载md
          </Button>
        );
      },
      width: 100,
    },
  ];

  function handlePageChange(page: number, pageSize: number) {
    setQueryParam({ ...queryParam, current: page, pageSize });
  }

  async function downloadMd(noteId: string) {
    try {
      const data = { noteId };
      const response = await axios.post(
        "/mail/redbook/note/exportNoteMd",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
          responseType: "blob",
        }
      );
      const contentDisposition = response.headers["content-disposition"];
      const filenameMatch = decodeURIComponent(
        contentDisposition.match(/filename\=(.*)/)[1]
      );
      const filename = filenameMatch || "file.md";
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const a = document.createElement("a");
      a.href = url;
      a.setAttribute("download", filename);
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (error) {
      console.error("Error downloading md file:", error);
    }
  }

  return (
    <>
      <div className={styles.header}>
        <Title level={3}>我的收藏</Title>
      </div>
      <div className={styles.search}>
        <CollectListSearch
          queryParam={queryParam}
          setQueryParam={setQueryParam}
        />
      </div>
      <div className={styles.content}>
        <Table
          dataSource={dataSource}
          columns={tableColumns}
          pagination={false}
        ></Table>
      </div>
      <div className={styles.footer}>
        <Pagination
          current={queryParam.current}
          pageSize={queryParam.pageSize}
          total={total}
          onChange={handlePageChange}
        />
      </div>
    </>
  );
};
export default Collect;
