import { useParams } from "react-router-dom";

export const UrIParameter = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>UrIParameterページです</h1>
      <p>パラメーターは{id}です</p>
    </div>
  );
};
