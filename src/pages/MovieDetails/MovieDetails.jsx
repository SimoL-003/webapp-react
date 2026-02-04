import { useParams } from "react-router-dom";

export default function MovieDetailsPage() {
  const { id } = useParams();

  return <h1>Dettaglio film {id}</h1>;
}
