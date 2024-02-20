import * as React from "react";
import TextField from "@mui/material/TextField";

function Firststep() {
  return (
    <div className="max-h-screen w-full">
      <div
        className="flex justify-center items-center flex-col m-20 border-2"
        id="main-div"
      >
        <div className="flex justify-center border-2 ">
          <div className="h-1 w-10 bg-black m-2"></div>
          <div className="h-1 w-10 bg-black m-2"></div>
          <div className="h-1 w-10 bg-black m-2"></div>
        </div>

        <div>
          <div>
            <h4>Lets Start with your Name!</h4>
          </div>

          <div>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
          </div>

          <button className="py-2 px-10 border-2">Next</button>
        </div>
      </div>
    </div>
  );
}

export default Firststep;
