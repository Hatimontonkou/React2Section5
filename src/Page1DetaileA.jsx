import { useLocation } from "react-router-dom";

export const Page1DetaileA = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <div>
      <h1>Page1DetaileAです</h1>
    </div>
  );
};
