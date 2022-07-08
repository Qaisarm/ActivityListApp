import './App.css';
import { useState, useEffect } from 'react';
import PopUp from './components/PopUp';
function App() {
  const [data, setData] = useState([]);
  const [dataId, setDataID] = useState([]);
  const [APIData, setAPIData] = useState([]);

  const [btnPopUp, setBtnPopUp] = useState(false);
  
 

  useEffect(() => {
    const getItems = async () => {
      const response = await fetch('https://localhost:7031/ActivityList');
       const deserializedJSON = await response.json();
       setAPIData(deserializedJSON);
       }
       getItems();
}, [])

  const [listdata, setListData] = useState([]);
  const sendData = async (e) => {
      e.preventDefault();
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
        method: 'POST',
        mode: 'cors',
        headers: myHeaders,
        body: body,
        redirect: 'follow'
      };
      const response = await fetch('https://localhost:7031/ActivityList', requestOptions)
      const deserializedJSON = await response.json();
      console.log(deserializedJSON)
      setListData(deserializedJSON);
    }
    
    const getIDQ = (id) => {
      let expression = id.toString();
    
    }
    
const DeleteItem = async (id) => {

  var deleteId = id.toString();
  var myHeaders = new Headers();
myHeaders.append("Authorization", "Basic Og==");
var url = "https://localhost:7031/ActivityList/"+deleteId;
var requestOptions = {
method: 'DELETE',
headers: myHeaders,
redirect: 'follow'
};

fetch(url, requestOptions)
.then(response => response.text())
.then(result => console.log(result))
.catch(error => console.log('error', error));
}
const setTestData = (APIData) => {
  console.log(APIData);
}


  return (
    <div className="App">
        <div> <h2> Add Activity List Items</h2>
         <form onSubmit={sendData}>
          <input placeholder='Write Name...' type="application" name='title' />
          <input placeholder='Write Category...' type="application" name='category' />
          <input placeholder='Write Date Opened...' type="application" name='dateOpened' />
          <input placeholder='Write Expiry Date...' type="application" name='expiryDate' />
          <button>Submit</button>
        </form>
    </div>
  <br></br>

      {
          <div>
          <table>
            <thead>
        <tr>
          <th>Tilte</th>
          <th>Category</th>
          <th>Date Opened</th>
          <th>Expiry Date</th>
          <th> </th>
        </tr>
        </thead>
        <tbody>
        {APIData.map((val, key) => {
          return (

            <tr key={key}>
              <td>{val.title}</td>
              <td>{val.category}</td>
              <td>{val.dateOpened}</td>
              <td>{val.expiryDate}</td>
              <td><button onClick={() => DeleteItem(val.id)}> Delete</button>
               <button onClick={()=>{setBtnPopUp(true)
              setDataID = val.id;}}>Update popup</button></td>
              </tr>
          )
        })}
        </tbody>
      </table>
      </div>
      }
     
       <PopUp trigger= {btnPopUp} setTrigger = {setBtnPopUp} expression = {setDataID}/>
    </div>
    
  );
}

export default App;