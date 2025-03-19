import "./Svg.css"
export default function Svg() {
    return (
        <div className="container mt-5 mb-0">
            <p className="fs-5 para ms-3 mb-0">Task Overview</p>
            <div className="mt-3 mb-2">
                <button type="button" className="btn status-btn me-1 "></button>
                <span className="me-2 mt-2">Active</span>
                <button type="button" className="btn status-btn2 me-1 "></button>
                <span className="mt-2">Completed</span>
            </div>
            <div className="container mt-0 mb-0">
                <svg className="svg-circle w-100 " viewBox="0 0 100 100" height="240" width="400" xmlns="http://www.w3.org/2000/svg">
                    <circle r="45" cx="50" cy="50" fill="green" />
                </svg>
            </div>

        </div>
    )
}
