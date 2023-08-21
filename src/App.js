import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Claim from "./pages/Claim";
import MyGreenNFT from "./pages/MyGreenNFT";
import Marketplace from "./pages/Marketplace";
import Register from "./pages/Register";
import Audit from "./pages/Audit";
import { useEffect, useState } from "react";

function App() {
  const [projectname, setProjectName] = useState("");
  const [CO2, setCO2] = useState("");
  const [auditorAddress, setAuditorAddress] = useState("");
  const [projctID, setProjectID] = useState("");
  const [CO2Reductions, setCO2Reductions] = useState("");
  const [startingDate, setStartingDate] = useState("");
  const [endingDate, setEndingDate] = useState("");
  const [claimID, setClaimID] = useState("");
  const [greenNFT, setGreenNFT] = useState("");
  const [order, setOrder] = useState("");
  const [document, setDocument] = useState("");
  const [reference, setReference] = useState("");

  const form = {
    register: {
      heading: "Register a project",
      button: "Register a project",
      href: "/claim",
      inputs: [
        {
          label: "Project Name",
          placeholder: "e.g) The National Planting Organization",
          value: projectname,
          setValue: setProjectName,
        },
        {
          label: "CO2 Emissions",
          placeholder: "e.g) 50",
          value: CO2,
          setValue: setCO2,
          type: "number",
        },
      ],
    },
    auditor: {
      heading: "Register an auditor",
      button: "Register an auditor",
      href: "/claim",
      inputs: [
        {
          label: "Auditor Address",
          placeholder: "e.g) 0x0264518b20e1042264F0B55687cEAA4",
          value: auditorAddress,
          setValue: setAuditorAddress,
        },
      ],
    },
    claim: {
      heading: "Claim a CO2 reduction ",
      button: "Claim",
      href: "/audit",
      inputs: [
        {
          label: "Project ID",
          placeholder: "e.g) 1",
          value: projctID,
          setValue: setProjectID,
          type: "number",
        },
        {
          label: "CO2 Reductions",
          placeholder: "e.g) 25",
          value: CO2Reductions,
          setValue: setCO2Reductions,
          type: "number",
        },
        {
          label: "Starting date of monitoring period",
          placeholder: "e.g) 2021/10/01",
          value: startingDate,
          setValue: setStartingDate,
          type: "date",
        },
        {
          label: "Ending Date",
          placeholder: "e.g) 2021/10/01",
          value: endingDate,
          setValue: setEndingDate,
          type: "date",
        },
        {
          label: "Reference Document",
          value: document,
          setValue: setDocument,
          type: "file",
        },
      ],
    },
    audit: {
      heading: "Audit a CO2 reduction ",
      button: "Audit",
      href: "/certification",
      inputs: [
        {
          label: "Claim ID",
          value: claimID,
          placeholder: "e.g) 2021/10/01",
          setValue: setClaimID,
          type: "number",
        },
        {
          label: "Reference Document",
          value: reference,
          placeholder: "e.g) 2021/10/01",
          setValue: setReference,
          type: "file",
        },
      ],
    },
    marketplace: {
      heading: "Buy Carbon Credits ",
      button: "Buy Carbon Credits",
      href: "/marketplace",
      inputs: [
        {
          label: "Green NFT's address",
          placeholder: "e.g) 0x0264518b20e1042264F0B55687cEAA4",
          value: greenNFT,
          setValue: setGreenNFT,
        },
        {
          label: "Order of carbon credits",
          placeholder: "e.g) 10",
          value: order,
          setValue: setOrder,
          type: "number",
        },
      ],
    },
  };

  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/register" element={<Register form={form} />} />
          <Route path="/marketplace" element={<Marketplace form={form} />} />
          <Route path="/certification" element={<MyGreenNFT form={form} />} />
          <Route path="/claim" element={<Claim form={form}></Claim>} />
          <Route path="/audit" element={<Audit form={form}></Audit>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
