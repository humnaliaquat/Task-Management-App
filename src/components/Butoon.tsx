import "./Button.css";
export default function Butoon(props: any) {
  return (
    <>
      <nav className="navbar ms-5 me-5 mt-3 nav-bar">
        <div className="container-fluid">
          <a className="navbar-brand fs-2 fw-bold logo">{props.logo}</a>
            <button className="btn  add-task" type="submit">
              Add New Task
            </button>
        </div>
      </nav>
    </>
  );
}
