// import React, { Component } from "react";
// import Slider from "react-slick";
// // Import css files
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { Destination_data } from "./Destination__data";
// import "./Specialty.scss";

// export default class Destination__slider extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       infinite: false,
//       speed: 500,
//       slidesToShow: 3,
//       slidesToScroll: 3,
//       initialSlide: 0,
//       responsive: [
//         {
//           breakpoint: 1024,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 2,
//             infinite: true,
//             dots: true,
//           },
//         },
//         {
//           breakpoint: 600,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 2,
//             initialSlide: 2,
//           },
//         },
//         {
//           breakpoint: 480,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//           },
//         },
//       ],
//     };
//     return (
//       <div>
//         <Slider {...settings}>
//           {Destination_data.map((item) => (
//             <div className="card">
//               <div className="card-top">
//                 <img src={item.linkImg} />
//                 <h1>{item.title}</h1>
//               </div>
//               <div className="card-bottom">
//                 <h3>{item.price}</h3>
//                 <span className="category">{item.category}</span>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     );
//   }
// }
