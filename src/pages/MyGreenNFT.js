import React from 'react'
import { useNavigate } from 'react-router-dom';

function MyGreenNFT({ form }) {
  // console.log(form)
  const navigate = useNavigate();
  
    return (
      <div className="flex justify-center items-center my-20">
        <div className="flex flex-col gap-3 border-2 border-gray-200 shadow-md p-4 min-w-[30vw] font-semibold">
          <div>Project ID : {form && form.claim.inputs[0].value}</div>
          <div>Claim ID : {form && form.audit.inputs[0].value}</div>
          <div>Green NFT : {form && form.auditor.inputs[0].value}</div>

          <div>Issued by Auditor: {form && form.register.inputs[0].value}</div>

          <div>
            Issued to Project Owner: {form && form.register.inputs[0].value}
          </div>

          <div>Issued at TimeStamp : {""}</div>
          <div>Verification Period is started from : {""}</div>
          <div>Verification Period is ended until : {""}</div>
          <div>Audited Report : {""}</div>
          <div>CO2 Emissions : {}</div>
          <div>CO2 Reductions :{form && form.claim.inputs[1].value}</div>
          <div>Issued Carbon Credits : {"25"}</div>
          <div
            onClick={() => {
              navigate("/marketplace");
            }}
            className="bg-blue-700 flex p-2 rounded-md text-white hover:cursor-pointer w-full justify-center items-center "
          >
            Put On Sale
          </div>
        </div>
      </div>
    );
}

export default MyGreenNFT