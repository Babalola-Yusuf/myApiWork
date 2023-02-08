
    fetch('https://jsonplaceholder.typicode.com/users') .then(response => response.json()) .then(json =>{

    console.log(json);

return   displayData(json);

} 

    )

    

    let i = 0;// initializing the index

     

    let picChange = () =>{

        document.getElementById("robo").src =`https://robohash.org/${i}`;

    } 

     

     // previous button   

    prev=()=>{

    fetch('https://jsonplaceholder.typicode.com/users') .then(response => response.json()) .then(json =>{

    console.log(json);

return   displayData(json);

    

} 

    )

    if (i>0) {

        i--;

        picChange();

       displayData(json);

       

    }else {

        alert ('Thats the end!');

    }

}

//next button

next =()=>{

fetch('https://jsonplaceholder.typicode.com/users') .then(response => response.json()) .then(json =>{

    console.log(json);

  displayData(json);

        

} 

    )

    if (i<9) {

        i++;

        picChange();

       displayData();

    }else {

    alert('Thats the end!')

    }

    

    }

    

    // a function to display the converted json from the api on the html page

    

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
