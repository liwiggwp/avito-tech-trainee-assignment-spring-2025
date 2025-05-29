import React from "react";
import { useParams } from "react-router-dom";

export default function BoardPage() {
  const { id } = useParams();
  return (
    <>
      <div>BoardPage {id}</div>
    </>
  );
}
