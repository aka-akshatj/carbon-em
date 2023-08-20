import React from "react";
import Card from "../components/Card";

function Marketplace({ form }) {
  return (
    <div className="flex my-20 justify-center items-center">
      <Card props={form.marketplace}></Card>
    </div>
  );
}

export default Marketplace;
