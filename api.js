function initMap() {  
    const uluru = {
        lat: 52.65396533743178,
        lng: -0.48024596700849204
    };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: uluru,
    }); 
    const marker = new google.maps.Marker({    
        position: uluru,
        map: map,
    });
}
