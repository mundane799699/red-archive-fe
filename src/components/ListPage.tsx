import React, { FC, useEffect, useState } from "react";
import { Pagination } from "antd";
import { DEFAULT_PAGE_SIZE, LIST_PAGE_NUM_PARAM_KEY, LIST_PAGE_SIZE_PARAM_KEY } from "../constant";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

type PropsType = {
  total: number;
};
const ListPage: FC<PropsType> = (props: PropsType) => {
  const { total } = props;
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE);
  // 从url参数中找到page和pageSize，并且同步到Pagination组件中
  const [searchParams] = useSearchParams();
  useEffect(() => {
    const page = parseInt(searchParams.get(LIST_PAGE_NUM_PARAM_KEY) || "1");
    const pageSize = parseInt(searchParams.get(LIST_PAGE_SIZE_PARAM_KEY) || "10");
    setPageSize(pageSize);
    setCurrent(page);
  }, [searchParams]);
  const nav = useNavigate();
  const { pathname } = useLocation();
  function handlePageChange(page: number, pageSize: number) {
    // 改变url参数
    searchParams.set(LIST_PAGE_NUM_PARAM_KEY, page.toString());
    searchParams.set(LIST_PAGE_SIZE_PARAM_KEY, pageSize.toString());
    nav({
      pathname,
      search: searchParams.toString(),
    });
  }
  return (
    <Pagination current={current} pageSize={pageSize} total={total} onChange={handlePageChange} />
  );
};

export default ListPage;
