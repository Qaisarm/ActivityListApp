import React, {useState} from 'react'
import './PopUp.css';
function PopUp(props) {
    console.log("Try : "    + props.expression.toString());
    const [udateData, setUpdateData] = useState([]);
const updateItemData = async (e,id) => {
  var updateId = id.toString();
  console.log(updateId);
var url = "https://localhost:7031/ActivityList/"+updateId;
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const body = JSON.stringify({
    Title:e.target["title"].value,
    Category:e.target["category"].value,
    DateOpened:e.target["dateOpened"].value,
    ExpiryDate:e.target["expiryDate"].value
  })
  console.log(body)
  const requestOptions = {
    method: 'PUT',
    mode: 'cors',
    headers: myHeaders,
    body: body,
    redirect: 'follow'
  };
  const response = await fetch(url, requestOptions)
  const deserializedJSON = await response.json();
  console.log(deserializedJSON)
  setUpdateData(deserializedJSON);
}
  return (props.trigger) ? (
    <div className='popup'>
        <div className='popup-inner'>
        <div> <h2> update List Items</h2>
   
   <form >
    <input placeholder='Write Name...' type="application" name='title' />
    <input placeholder='Write Category...' type="application" name='category' />
    <input placeholder='Write Date Opened...' type="application" name='dateOpened' />
    <input placeholder='Write Expiry Date...' type="application" name='expiryDate' />
    <button>Update</button>
  </form>
</div>
      <button className='close-button' onClick= {()=> props.setTrigger(false)}> Update</button>
      {props.children}
      </div>
    </div>
  ):"";
}

export default PopUp