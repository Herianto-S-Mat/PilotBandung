const baseUrl = 'https://bluegill-top-dog.ngrok-free.app/v1'
export const layanan =  fetch(`${baseUrl}/Jasa/Get_List_Jasa`, {
    method: 'GET', 
    headers: {
        'Content-Type': 'application/json'
    },
    mode: 'cors' 
})
.then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); 
})
.then(data => {
    return data
})
.catch(error => {
    console.error('Error fetching data:', error);
});