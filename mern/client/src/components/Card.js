import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Card(props){
  const { name, address, imagelink, hours } = props.item;

    return(
      <div className="card p-3" style={{ width: '20rem', margin: 'auto' }}>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{`${address.street}, ${address.city},`}</p>
      </div>
    </div>
    )
}