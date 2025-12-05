import { useViewBoxData } from "./viewBoxListData";
import { rgbToHex } from "../../utils/colorFormatter";
import { formatCurrencyINR } from "../../utils/currencyFormatter";
import EmptyBox from "../../assets/icons/emptyBox.png";
import "./index.css";

const ViewBoxList = () => {
  const { boxes } = useViewBoxData();

  return (
    <div className="box-list-container">
      <div className="list-card">
        <h2>Shipping Box List</h2>

        {boxes.length === 0 ? (
          <div className="empty-state">
            <img src={EmptyBox} alt="Empty Box" className="empty-box-icon" />
            <p>No boxes added yet</p>
            <p className="empty-subtitle">
              Add your first shipping box to get started!
            </p>
          </div>
        ) : (
          <div className="table-container">
            <table className="box-table">
              <thead>
                <tr>
                  <th>Receiver Name</th>
                  <th>Weight (kg)</th>
                  <th>Box Color</th>
                  <th>Destination Country</th>
                  <th>Shipping Cost</th>
                </tr>
              </thead>
              <tbody>
                {boxes.map((box, key) => (
                  <tr key={key}>
                    <td data-label="Receiver Name">{box.receiverName}</td>
                    <td data-label="Weight">{box.weight} kg</td>
                    <td data-label="Box Color">
                      <div className="color-display">
                        <div
                          className="color-box"
                          style={{ backgroundColor: rgbToHex(box.boxColor) }}
                          title={`RGB: ${box.boxColor}`}
                        ></div>
                        <span className="color-text">{box.boxColor}</span>
                      </div>
                    </td>
                    <td data-label="Destination">{box.country}</td>
                    <td data-label="Shipping Cost" className="cost-cell">
                      {formatCurrencyINR(box.shippingCost)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {boxes.length > 0 && (
          <div className="summary">
            <p>
              Total Boxes: <strong>{boxes.length}</strong>
            </p>
            <p>
              Total Shipping Cost:{" "}
              <strong>
                {formatCurrencyINR(
                  boxes.reduce((sum, box) => sum + box.shippingCost, 0)
                )}
              </strong>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewBoxList;
