import { useLocation, useHistory } from "react-router-dom";

export const Page1DetaileA = () => {
  const { state } = useLocation();
  console.log(state);

  const history = useHistory();

  const onClickBack = () => history.goBack();

  return (
    <div>
      <h1>Page1DetaileAです</h1>
      <button onClick={onClickBack}>back</button>
    </div>
  );
};
