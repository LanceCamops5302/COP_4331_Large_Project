import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import './code.css';
import { useParams, useNavigate } from "react-router";


const Record = (props) => {
  return (
    <div className="card-body">
          {console.log(props.record)}
          {props.tableSetter(props.record, props.i)}

    </div>
  );
};





export default function RecordList() {
  const [records, setRecords] = useState([]);
  const params = useParams();
  const navigate = useNavigate();
  // This method fetches the records from the database.
  useEffect(() => {
    async function getRecords() {
      const id = params.id.toString();
      const response = await fetch(`http://localhost:5000/clips/${params.id.toString()}`);

      if (!response.ok) {
        const message = `An error occured: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      setRecords(records);
    }

    getRecords();

    return;
  }, [records.length]);

  // This method will delete a record
  async function deleteRecord(id) {
    await fetch(`http://localhost:5000/${id}`, {
      method: "DELETE"
    });

    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
  }

  // This method will map out the records on the table
  function recordList() {
    return records.map((record, index) => {
      return (
        <Record
          record={record}
          key={record._id}
          i={index % 2 === 0 ? "right" : "left"}
          j={index % 2 === 0 ? "left" : "right"}
          tableSetter={(record, i) => tableSetter(record, i)}
        />
      );

    });
  }






  function tableSetter(props, lr)
  {
    console.log("Setter")
    console.log(lr)
      return (setText(props, lr))

  }



  function setImg(props, lr) {

    console.log("img Set");
    return (null
          
    );
  }


  function setText(props, lr) {
 
    console.log("setText")
    return (
      <div className= "row">
      <div className="col-md-4">
      <img src={props.imagelink} width="1200px" height="700px" className={"park-img-" + lr}></img>
      </div>

      <div className="col-md-8">
      <h1>{props.url}</h1>
      
      {props.address.street}<br />
      {props.address.city}<br />
      {props.address.state}<br />
      {props.address.zipcode}


      <Link className="btn btn-link" to={`/edit/${props._id}`}>Clips</Link>


      <h1 >Times</h1>
      <div className="time-content">
      Monday: {props.hours.monday}<br />
      Tuesday: {props.hours.tuesday}<br />
      Wednesday: {props.hours.wednesday}<br />
      Thursday: {props.hours.thursday}<br />
      Friday: {props.hours.friday}<br />
      Saturday: {props.hours.saturday}<br />
      Sunday: {props.hours.sunday}<br />
      </div>
      </div>
      </div>
    );
  }

  // This following section will display the table with the records of individuals.
  return (
    <div>
      <h2 style={{textAlign: "center", color: "white"}}>Skate Park Flexin</h2>
      <div style={{backgroundColor: "#D9D9D9", marginTop: "50px",}}>
      <h3></h3>
      {recordList()}
    </div>
    </div>
  );
}
