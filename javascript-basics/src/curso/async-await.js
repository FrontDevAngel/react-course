const getImagen = async() =>{
    try{
        const apikey = 'vs10XaNkEkbqfrYJh2dEWHTY12KG9ovk';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`);
        const { data } = await resp.json();
    
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        console.error(error)
    }
}

getImagen();