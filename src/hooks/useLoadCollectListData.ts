import { useSearchParams } from "react-router-dom";
import { useRequest } from "ahooks";
import { getCollectListService } from "../services/collect";
import {
  LIST_USER_ID_PARAM_KEY,
  LIST_DISPLAY_TITLE_PARAM_KEY,
  LIST_OWNER_NICKNAME_PARAM_KEY,
  LIST_PAGE_NUM_PARAM_KEY,
  LIST_PAGE_SIZE_PARAM_KEY,
} from "../constant";

function useLoadCollectListData() {
  console.log("useLoadCollectListData");
  const [searchParams] = useSearchParams();
  const { data, loading, error, refresh } = useRequest(
    async () => {
      const userId = searchParams.get(LIST_USER_ID_PARAM_KEY) || "";
      const displayTitle = searchParams.get(LIST_DISPLAY_TITLE_PARAM_KEY) || "";
      const ownerNickname = searchParams.get(LIST_OWNER_NICKNAME_PARAM_KEY) || "";
      const pageNum = parseInt(searchParams.get(LIST_PAGE_NUM_PARAM_KEY) || "1");
      const pageSize = parseInt(searchParams.get(LIST_PAGE_SIZE_PARAM_KEY) || "10");
      const data = await getCollectListService({
        userId,
        displayTitle,
        ownerNickname,
        pageNum,
        pageSize,
      });
      return data;
    },
    {
      refreshDeps: [searchParams], // 刷新的依赖项
    }
  );
  return { data, loading, error, refresh };
}

export default useLoadCollectListData;
