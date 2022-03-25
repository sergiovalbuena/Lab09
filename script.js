//let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const fetchData = (url_api) => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', url_api, true);
        xhttp.onreadystatechange = (()=>{
            if(xhttp.readyState === 4){
                (xhttp.status === 200)
                 ? resolve(JSON.parse(xhttp.responseText))
                 : reject(new Error('Error ', url_api))

            }
        });
        xhttp.send();
    });
}

const API = 'https://deepblue.camosun.bc.ca/~c0180354/ics128/lab09/lab09_superheroes';

document.getElementById("demo").innerHTML = `
<tr>
<th>Superhero</th>
<th>Publisher</th>
<th>Alter Ego</th>
<th>First Appearance</th>
<th>Characters</th>
</tr>
`;

function loadDoc(){
    const anotherFunction = async (url_api) => {
        try {
            const data = await fetchData(url_api)
            //console.log(data); //prints all 
            //console.log(data[1]); //print reference number on the []

            //console.log(data); //print reference number on the []
            
            console.log(data); //print reference number on the []
            //console.log('ONE');
            //let name1 = data.superhero
            //console.log(name1); 
            
            for (let i = 0; i < data.length; i++) {
                const superhero = data[i].superhero;
                const publisher = data[i].publisher;
                const alterEgo = data[i].alter_ego;
                const firstAppearance = data[i].first_appearance;
                const characters = data[i].characters;
            
                document.getElementById("demo").innerHTML += 
                `
                <tr>
                    <td>${superhero} </td>
                    <td>${publisher}</td>
                    <td>${alterEgo}</td>
                    <td>${firstAppearance}</td>
                    <td>${characters}</td>
                </tr>
                `;

                if(publisher === 'Marvel Comics'){
                    console.log('AFGDDAS');
                }else if(publisher === 'DC Comics'){
                    console.log('aefaefaf');
                }else{
                    console.log('no publisher found');
                }

                
                
            }


        } catch(error){
            console.error(error)
        }
    }



    //console.log('Before');
    anotherFunction(API);
    //console.log('After');

}

var e = document.getElementById("supers");
var strUser = e.options[e.selectedIndex].value;

if(strUser === 'all') {
    console.log('aqui lo tienes pa q lo goces '+strUser);
} else if(strUser === 'marvel'){
console.log('MARVEL!!! '+strUser);
}




function loadM(){
    document.getElementById("demo").innerHTML = "" 
    const anotherFunction = async (url_api) => {
        try {
            const data = await fetchData(url_api)

                for (let i = 0; i < data.length; i++) {                
                    const publisher = data[i].publisher;
                if(publisher === 'Marvel Comics'){
                    const superhero = data[i].superhero;
                    const publisher = data[i].publisher;
                    const alterEgo = data[i].alter_ego;
                    const firstAppearance = data[i].first_appearance;
                    const characters = data[i].characters;

                    document.getElementById("demo").innerHTML += 
                    `
                    <tr>
                        <td>${superhero} </td>
                        <td>${publisher}</td>
                        <td>${alterEgo}</td>
                        <td>${firstAppearance}</td>
                        <td>${characters}</td>
                    </tr>
                    `;  
            }else if(publisher === 'DC Comics'){
                console.log('aefaefaf');
            }else{
                console.log('no publisher found');
            }
        }




        } catch(error){
            console.error(error)
        }
    }



    //console.log('Before');
    anotherFunction(API);
    //console.log('After');

}

