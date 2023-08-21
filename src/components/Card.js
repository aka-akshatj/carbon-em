import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Card({ props }) {
  const navigate = useNavigate();
  // useEffect(() => {
  //   // console.log(props.inputs);
  //   if (props && props.inputs && props.inputs.length) {
  //     console.log(props, "hello");
  //     props.inputs[0].setValue("hello");
  //   }
  //   //  if(props.inputs) props.inputs[0].setValue("hello")
  // }, [props]);
  const { heading, inputs, button } = props;

  return (
    <div className="flex flex-col gap-6 w-[25vw] p-3 shadow-lg">
      <div className="flex text-2xl font-semibold">{props && props.heading && props.heading}</div>

      <div className="flex flex-col gap-2 w-full font-semibold text-sm ">
        {props && props.inputs
          ? props.inputs &&
            props.inputs.map((data, index) => {
              return (
                <div key={index} className="flex flex-col gap-2">
                  {/* {console.log(index)} */}
                  {data.label}
                  {/* {console.log(data.setValue)} */}
                  
                    <input
                      className=" p-2 w-full rounded-sm text-sm shadow-sm  border-2 border-gray-200 "
                      name="projectname"
                      value={ data.type==="file"?null:data.value}
                    onChange={(e) => {
                      if (data.type=== "file"){
                        data.setValue(e.target.files[0])
                      }
                      else
                    {
                      data.setValue(e.target.value)
                  }
                    } }
                      placeholder={data.placeholder}
                      type={data.type || "text"}
                      
                    />
              
                </div>
              );
            })
          : null}
        <div
          onClick={() => {
            navigate(props.href);
          }}
          className="w-full bg-blue-700 p-3 rounded-md text-white"
        >
          {props && props.button && props.button}
        </div>
      </div>
    </div>
  );
}

export default Card;
