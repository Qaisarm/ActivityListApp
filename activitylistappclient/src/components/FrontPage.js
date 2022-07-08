import React, {useState}from 'react'

function FrontPage() {
    const [data, setData] = useState([]);
    const getQuote = async () => {
      const response = await fetch('https://localhost:7031/ActivityList');
      const deserializedJSON = await response.json();
      setData(deserializedJSON);
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

  const updateData = async (e,id) => {
    e.preventDefault();
    var updateId = id.toString();
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
    setData(deserializedJSON);
  }

    return (
      <div className="App">
        <button onClick={getQuote}>Get Data from WebApi</button>
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
          {data.map((val, key) => {
            return (
              
              <tr key={key}>
                <td>{val.title}</td>
                <td>{val.category}</td>
                <td>{val.dateOpened}</td>
                <td>{val.expiryDate}</td>
                <td><button onClick={() => DeleteItem(val.id)}> Delete</button> <button>Update</button></td>
                </tr>
                
             
            )
          })}
          </tbody>
        </table>
        </div>
        }
       
      </div>
    );
}

export default FrontPage