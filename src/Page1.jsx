import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()];

  const history = useHistory();

  const onClickDetaileA = () => history.push("/page1/detaileA");

  return (
    <div>
      <h1>Page1です</h1>
      <Link to={{ pathname: "/page1/detaileA", state: arr }}>DetaileA</Link>
      <br />
      <Link to="/page1/detaileB">DetaileB</Link>
      <br />
      <button onClick={onClickDetaileA}>detaileA</button>
    </div>
  );
};
