import React, {useState}from 'react'

export const CreatelistPage = () => {
    const [data, setData] = useState([]);
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
        setData(deserializedJSON);
      }
  return (
    <div> <h2> Add Activity List Items</h2>
         <form onSubmit={sendData}>
          <input placeholder='Write Name...' type="application" name='title' />
          <input placeholder='Write Category...' type="application" name='category' />
          <input placeholder='Write Date Opened...' type="application" name='dateOpened' />
          <input placeholder='Write Expiry Date...' type="application" name='expiryDate' />
          <button>Submit</button>
        </form>
    </div>

  )
}
