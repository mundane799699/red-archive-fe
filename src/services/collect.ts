import axios, { ResDataType } from "./ajax";
type SearchOption = {
  userId: string;
  displayTitle: string;
  ownerNickname: string;
  pageNum: number;
  pageSize: number;
};
export async function getCollectListService(opt: Partial<SearchOption> = {}): Promise<ResDataType> {
  const url = `/mail/redbook/collect/query`;
  const data = (await axios.get(url, { params: opt })) as ResDataType;
  return data;
}

export async function deleteCollectService(userId: string): Promise<void> {
  const url = `/mail/redbook/collect/deleteByUserId`;
  await axios.post(
    url,
    { userId },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

export async function parseDetailService(userId: string): Promise<void> {
  const url = "/mail/redbook/collect/parseDetail";
  const data = { userId };
  await axios.post(url, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function forceParseDetailService(userId: string): Promise<void> {
  const url = "/mail/redbook/collect/forceParseDetail";
  const data = { userId };
  await axios.post(url, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function queryTaskProgress(userId: string): Promise<string> {
  const url = "/mail/redbook/collect/queryParseDetail";
  const data = (await axios.get(url, { params: { userId } })) as string;
  return data;
}
