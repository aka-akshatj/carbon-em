import React, { useState } from "react";
import Card from "../components/Card";

function Register({ form }) {
  const [projectname, setProjectName] = useState("");
  const [co2, setCo2] = useState("");
  return (
    <div className="flex my-20 justify-center items-center  flex-col gap-10">
      {/* <div className="font-bold text-2xl  w-full">Register a Project </div>
        <div className="flex flex-col gap-2 w-full font-semibold text-sm ">
          Project Name
          <input
            className=" p-2 w-full rounded-sm text-sm shadow-sm  border-2 border-gray-200 "
            name="projectname"
            placeholder="e.g) The National Planting Organization"
            type="text"
            required={true}
          />
        </div>
        <div className="flex flex-col gap-2 w-full font-semibold text-sm">
          CO2 Emissions
          <input
            className=" p-2 w-full rounded-sm text-sm shadow-sm  border-2 border-gray-200 "
            name="projectname"
            placeholder="e.g) 50"
            type="text"
            required={true}
          />
          <div className="w-full flex justify-center items-center bg-indigo-700 text-white  p-3">
            Register a Project
          </div>
        </div> */}
      <Card props={form.register}></Card>

      <Card props={form.auditor}></Card>
    </div>
  );
}

export default Register;
