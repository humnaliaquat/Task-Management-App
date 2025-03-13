function ListGroup() {
    const items = ["Lahore", "Karachi", "Multan", "CD"];
    
  return (
    <>
      <ul className="list-group">
        <h1>List</h1>
        {items.length === 0 && <p>No items</p>}
       {items.map((item)=>( <li className ="list-group-item" key={item}>{item}</li>))}
      </ul>
    </>
  );
}
export default ListGroup;
