import { useParams } from "react-router-dom";

export default function CustomerDetail() {
  const { id } = useParams();

  return (
    <div>
      <h2>Detail Customer</h2>
      <p>ID Customer: {id}</p>
    </div>
  );
}