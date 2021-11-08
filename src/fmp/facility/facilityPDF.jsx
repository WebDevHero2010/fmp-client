import { Component } from "react";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import "../App.css";

class FacilityPDF extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handlePDF = (e) => {
    const doc = new jsPDF("landscape");
    doc.autoTable({
      html: "#facilityTable",
      bodyStyles: { minCellHeight: 15 },
      didDrawCell: function (data) {
        if (data.column.index === 7 && data.cell.section === "body") {
          var td = data.cell.raw;
          var img = td.getElementsByTagName("img")[0];
          doc.addImage(
            img.src,
            "JPEG",
            data.cell.x + 2,
            data.cell.y + 2,
            10,
            10
          );
        }
      },
    });
    doc.save("Current Facility List.pdf");
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col" sm={{ size: "auto", offset: 9 }}>
            <button className="btn btn-info" type="button">
              Export Facility List
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default FacilityPDF;

// const FacilityPDF = (props) => {
//   //Parses User's Table & Generates PDF Report of User's current Inventory
//   const handlePDF = (e) => {
//     const doc = new jsPDF("landscape");
//     doc.autoTable({
//       html: "#facilityTable",
//       bodyStyles: { minCellHeight: 15 },
//       didDrawCell: function (data) {
//         if (data.column.index === 7 && data.cell.section === "body") {
//           var td = data.cell.raw;
//           var img = td.getElementsByTagName("img")[0];
//           doc.addImage(
//             img.src,
//             "JPEG",
//             data.cell.x + 2,
//             data.cell.y + 2,
//             10,
//             10
//           );
//         }
//       },
//     });
//     doc.save("Current Facility List.pdf");
//   };

//   return (
//     <div className="container-fluid">
//       <div className="row">
//         <div className="col" sm={{ size: "auto", offset: 9 }}>
//           <button className="btn btn-info" type="button">
//             Export Current Facility List
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FacilityPDF;
