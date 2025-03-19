import Svg from "./Svg";
import "./Activity.css";
export default function Activity() {
  return (
    <div className="grid text-center gird-container me-4 ms-4 mt-4">
      <div className="g-col-3 g-start-2 gird-one me-3"><Svg/></div>
      <div className="g-col-4 g-start-6 grid-two ms-3">.g-col-4 .g-start-6</div>
    </div>
  );
}
