// Unsplash API
const count  =10;
const apiKey = "Dq6_p3RGbsmjzOWNzxuN4p907ZmUfMmmsy_ioWZotGY";
const secretKey = "8nkblcYzuCbCCLN9Jzu7Pbth_TfIZ_ExdCaIq_ykkAM";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// get photos from unspalsh api

async function getPhotos()
{
    try{
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    }
    catch{

    }   
}
getPhotos();