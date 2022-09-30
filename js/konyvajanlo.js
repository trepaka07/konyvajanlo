function listazas(){
    for (konyv of konyvek) {
        document.write(""+
            "<div class='konyv'>"+
                "<div>"+
                    "<img src='./img/" + konyv.kep + "'>"+
                    "<h1>" + konyv.iro + "</h1>"+
                    "<h2>" + konyv.cim + "</h2>"+
                    "<h3>" + konyv.kiado + ", " + konyv.kiadas + "</h3>"+
                "</div>"+
                "<p>" + konyv.leiras + "</p>"+
            "</div>"
        )
    }
}