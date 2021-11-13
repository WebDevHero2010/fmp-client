import { Component } from "react";
import { jsPDF } from "jspdf";
import "jspdf-autotable";

class FacilityPDF extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handlePDF = (e) => {
    const doc = new jsPDF("landscape");
    var res = doc.autoTableHtmlToJson(document.getElementById("facilityTable"));
    var columns = [
      res.columns[0],
      res.columns[1],
      res.columns[2],
      res.columns[3],
      res.columns[4],
      res.columns[5],
      res.columns[6],
      res.columns[7],
      res.columns[8],
    ];
    doc.autoTable(columns, res.data);
    doc.save("Current Facility List.pdf");
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <button
              className="btn btn-float btn-danger my-1"
              type="button"
              onClick={this.handlePDF}
            >
              <i className="material-icons">picture_as_pdf</i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default FacilityPDF;
