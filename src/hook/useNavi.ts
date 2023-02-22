import { useNavigate } from "react-router-dom";

const useNavi = () => {
  const navigate = useNavigate();
  const setPage = (path: string) => {
    navigate(path);
  };
  return setPage;
};

export default useNavi;
