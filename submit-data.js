function submit_data(){
    const data = {
        name: document.getElementById('name').value, 
        address: document.getElementById('address').value,
    }
    fetch('https://i0h1jzrb79.execute-api.us-east-1.amazonaws.com/v1',
    {
        method: 'POST',
        headers: {'Content-Type': 'application/json',},
        body: JSON.stringify(data),
    })
    .then((response) => response.json())
    
    .then((data) => {
        console.log('Success:', data);
        alert("Successfully submitted!");
        document.getElementById('survey-form').reset();
        window.location.reload()

    })
    
    .catch((error) => {
        console.error('Error:', error);
    });
}
const api_url =
      "https://i0h1jzrb79.execute-api.us-east-1.amazonaws.com/v2";
 
async function getapi(url) {
 
    const response = await fetch(url);
    var data = await response.json();
    data=data["Items"];
    console.log(data);
    if (response) {
        hideloader();
    }
    show(data);
}
getapi(api_url);

function hideloader() {
    document.getElementById('loading').style.display = 'none';
}

function show(data) {
    let tab =
        `<tr>
          <th>Name</th>
          <th>Address</th>
          <th>Delete</th>
         </tr>`;
    
    data = data.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
      });
    
    for (let r of data) {
        tab += `<tr>
    <td>${r.name} </td>
    <td>${r.address}</td> 
    <td> <a style="text-decoration:none; color:red" href="javascript: delete_data('${r.name}')">&#x1F5D1;</a></td>       
</tr>`;
    }
    document.getElementById("getDetails").innerHTML = tab;
}

function delete_data(del){
    const data = {
        name:del
    }
    fetch('https://i0h1jzrb79.execute-api.us-east-1.amazonaws.com/v2',
    {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json',},
        body: JSON.stringify(data),
    })
    
    .then((data) => {
        console.log('Success:', data);
        alert("Deleted Successfully!");
        document.getElementById('survey-form').reset();
        window.location.reload()

    })
}