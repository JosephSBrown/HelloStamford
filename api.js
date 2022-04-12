function initMap() {  
    const uluru = {
        lat: 52.65396533743178,
        lng: -0.48024596700849204
    };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: uluru,
    }); 
    const marker = new google.maps.Marker({    
        position: uluru,
        map: map,
    });
}

<div id="map">
           <script src="https://maps.googleapis.com/maps/api/js?&callback=initMap&libraries=&=weekly" async></script>
       </div>
       <div>
           <a class="twitter-timeline" data-lang="ja" data-theme="dark" href="https://twitter.com/Joseph_Brown_?ref_src=twsrc%5Etfw">Tweets by Joseph_Brown_</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
       </div>
