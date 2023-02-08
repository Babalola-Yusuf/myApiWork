fetch('https://jsonplaceholder.typicode.com/users') .then(response => response.json()) .then(json =>{
    console.log(json);
    displayData(json);
} 
    )
    
    let i = 0;// initializing the index
    
    prev=()=>{
    while (i>0) {
        i--;
       return displayData();
    }/*else {
        alert ('Thats the end!');
    }*/
}

next =()=>{
    while (i<5) {
        i++;
      return displayData();
    }/*else {
        alert('Thats the end!')
    }*/
    
}

    
    // a function to display the converted json from the api
    
    displayData =(json) =>{      
    var obj = json[i];
    /*name*/
      const name = document.getElementById('name');
      const apiName = obj.name;
     name.innerHTML= apiName;
   // username  
     const username = document.getElementById('uname');
     const apiUsername =obj.username;
     username.innerHTML = apiUsername;
     // id
     const id = document.getElementById('id');
     const apiId =obj.id;
        id.innerHTML = apiId;
        //city
    const city = document.getElementById('city');
     const apiCity =obj.address.city;
        city.innerHTML = apiCity;
        }

