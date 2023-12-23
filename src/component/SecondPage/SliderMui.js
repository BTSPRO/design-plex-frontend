// import React from "react";
// import { Box, Slider } from "@mui/material";
// import "../SecondPage/MainComponent.css";

// function valuetext(value) {
//   return `$${value}`;
// }

// const SliderMui = () => {
//   const [value, setValue] = React.useState([50, 10000]);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   const formatPrice = (value) => {
//     return `$${value}`;
//   };

//   return (
//     <div className="slider-container">
//       <div className="price-input">
//         <label>What's your budget?</label>
//         <br />
//         <input
//           type="text"
//           style={{ width: "21rem", color: "#ACACAC", padding: "1rem" }}
//           placeholder={`Price Guide ${formatPrice(value[0])} - ${formatPrice(
//             value[1]
//           )}`}
//         />
//       </div>
//       <div className="slider">
//         <Box sx={{ width: 300 }}>
//           <Slider
//             getAriaLabel={() => "Temperature range"}
//             value={value}
//             onChange={handleChange}
//             valueLabelDisplay="auto"
//             getAriaValueText={valuetext}
//             min={50}
//             max={10000}
//           />
//         </Box>
//       </div>
//     </div>
//   );
// };

// export default SliderMui;
// import React from "react";
// import { Box, Slider } from "@mui/material";
// import "../SecondPage/MainComponent.css";

// function valuetext(value) {
//   return `$${value}`;
// }

// const SliderMui = () => {
//   const [value, setValue] = React.useState([50, 10000]);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   const formatPrice = (value) => {
//     return `$${value}`;
//   };

//   return (
//     <div className="slider-container">
//       <div className="price-input">
//         <label>What's your budget?</label>
//         <br />
//         <div className="input-container">
//           <input
//             type="text"
//             className="input-field"
//             placeholder={`Min ${formatPrice(value[0])}`}
//           />
//           <input
//             type="text"
//             className="input-field"
//             placeholder={`Max ${formatPrice(value[1])}`}
//           />
//         </div>
//       </div>
//       <div className="slider">
//         <Box sx={{ width: 300 }}>
//           <Slider
//             getAriaLabel={() => "Temperature range"}
//             value={value}
//             onChange={handleChange}
//             valueLabelDisplay="auto"
//             getAriaValueText={valuetext}
//             min={50}
//             max={10000}
//           />
//         </Box>
//       </div>
//     </div>
//   );
// };

// export default SliderMui;

import React from "react";
import { Box, Slider } from "@mui/material";
import "../SecondPage/MainComponent.css";

function valuetext(value) {
  return `$${value}`;
}

const SliderMui = () => {
  const [value, setValue] = React.useState([50, 10000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const formatPrice = (value) => {
    return `$${value}`;
  };

  return (
    <div className="slider-container">
      <div className="price-input">
        <label>What's your budget?</label>
        <br />
        <div className="input-container">
          <input
            type="text"
            className="input-field"
            placeholder={`Min ${formatPrice(value[0])}`}
          />
          <input
            type="text"
            className="input-field"
            placeholder={`Max ${formatPrice(value[1])}`}
          />
        </div>
      </div>
      <div className="slider">
        <Box sx={{ width: 300 }}>
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            min={50}
            max={10000}
          />
        </Box>
      </div>
    </div>
  );
};

export default SliderMui;
