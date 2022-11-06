//cargo en un arreglo las imagenes de las banderas
let banderas = ["ad.svg", "ae.svg", "af.svg", "ag.svg", "ai.svg", "al.svg", "am.svg", "ao.svg", "ar.svg", "as.svg", "at.svg", "au.svg", "aw.svg", "az.svg", "ba.svg", "bb.svg", "bd.svg", "be.svg", "bf.svg", "bg.svg", "bh.svg", "bi.svg", "bj.svg", "bm.svg", "bn.svg", "bo.svg", "br.svg", "bs.svg", "bt.svg", "bv.svg", "bw.svg", "by.svg", "bz.svg", "ca.svg", "cd.svg", "cg.svg", "ch.svg", "ci.svg", "ck.svg", "cl.svg", "cm.svg", "cn.svg", "co.svg", "cr.svg", "cu.svg", "cv.svg", "cw.svg", "cy.svg", "cz.svg", "de.svg", "dj.svg", "dk.svg", "dm.svg", "do.svg", "dz.svg", "ec.svg", "ee.svg", "eg.svg", "er.svg", "es.svg", "et.svg", "fi.svg", "fj.svg", "fk.svg", "fo.svg", "fr.svg", "ga.svg", "gb.svg", "gb-eng.svg", "gb-nir.svg", "gb-sct.svg", "gb-wls.svg", "gd.svg", "ge.svg", "gf.svg", "gh.svg", "gi.svg", "gm.svg", "gn.svg", "gq.svg", "gr.svg", "gt.svg", "gw.svg", "gy.svg", "hm.svg", "hn.svg", "hr.svg", "ht.svg", "hu.svg", "id.svg", "ie.svg", "il.svg", "in.svg", "iq.svg", "ir.svg", "is.svg", "it.svg", "jm.svg", "jo.svg", "jp.svg", "ke.svg", "kg.svg", "kh.svg", "ki.svg", "km.svg", "kn.svg", "kp.svg", "kr.svg", "kw.svg", "ky.svg", "kz.svg", "la.svg", "lb.svg", "lc.svg", "li.svg", "lk.svg", "lr.svg", "ls.svg", "lt.svg", "lu.svg", "lv.svg", "ly.svg", "ma.svg", "md.svg", "me.svg", "mg.svg", "mh.svg", "mk.svg", "ml.svg", "mm.svg", "mn.svg", "mq.svg", "mr.svg", "ms.svg", "mt.svg", "mu.svg", "mv.svg", "mw.svg", "mx.svg", "my.svg", "mz.svg", "na.svg", "nc.svg", "ne.svg", "ng.svg", "ni.svg", "nl.svg", "no.svg", "np.svg", "nr.svg", "nz.svg", "om.svg", "pa.svg", "pe.svg", "pg.svg", "ph.svg", "pk.svg", "pl.svg", "pr.svg", "ps.svg", "pt.svg", "pw.svg", "py.svg", "qa.svg", "ro.svg", "rs.svg", "ru.svg", "rw.svg", "sa.svg", "sb.svg", "sc.svg", "sd.svg", "se.svg", "sg.svg", "si.svg", "sk.svg", "sl.svg", "sm.svg", "sn.svg", "so.svg", "sr.svg", "ss.svg", "st.svg", "sv.svg", "sy.svg", "sz.svg", "tc.svg", "td.svg", "tg.svg", "th.svg", "tj.svg", "tl.svg", "tm.svg", "tn.svg", "to.svg", "tr.svg", "tt.svg", "tv.svg", "tw.svg", "tz.svg", "ua.svg", "ug.svg", "us.svg", "uy.svg", "uz.svg", "vc.svg", "ve.svg", "vn.svg", "vu.svg", "ws.svg", "xk.svg", "ye.svg", "za.svg", "zm.svg", "zw.svg"]

// Arreglo que guardara la opcion correcta
let correcta = [2,1,2,0,1,2,0,1,0,0,0,1,2,1,2,0,0,1,1,1,2,0,2,1,1,0,2,2,1,0,0,1,2,2,0,1,1,0,2,1,2,0,0,1,2,2,0,0,1,1,2,2,1,0,0,0,2,1,1,2,0,2,1,2,0,1,0,0,2,2,1,1,0,1,2,2,0,1,0,2,0,0,2,1,1,2,0,1,1,2,0,1,2,1,2,0,0,1,2,0,1,1,0,2,2,0,0,1,0,2,2,0,0,2,1,1,0,1,2,2,0,1,0,1,2,0,2,1,2,0,0,1,2,1,1,2,0,1,0,2,1,0,2,2,1,0,0,2,0,1,1,2,1,0,2,1,0,0,2,1,1,0,0,2,0,1,1,2,2,0,1,2,1,0,2,1,1,2,0,0,1,1,2,0,2,1,1,0,0,2,1,2,1,0,0,1,0,2,2,1,1,2,0,2,2,0,1,2,0,1,1,0,2,2,1];

//arreglo que guardara los paises a mostrar en cada jugada
let opciones = [];

//cargo en el arreglo "opciones" las opciones a mostrara en cada jugada
opciones.push(["RUMANIA", "PANAMA", "ANDORRA"]);
opciones.push(["JORDANIA", "EMIRATOS ARABES", "COLOMBIA"]);
opciones.push(["ITALIA", "VIETNAM", "AFGANISTAN"]);
opciones.push(["ANTIGUA Y BARBUDA", "ANGOLA", "SUDAFRICA"]);
opciones.push(["EL SALVADOR", "ANGUILA", "NUEVA ZELANDA"]);
opciones.push(["BRUNEI", "ARGENTINA", "ALBANIA"]);
opciones.push(["ARMENIA", "JAMAICA", "CHAD"]);
opciones.push(["BANGLADESH", "ANGOLA", "ISLAS FEROE"]);
opciones.push(["ARGENTINA", "URUGUAY", "ESPAÑA"]);
opciones.push(["SAMOA AMERICANA", "TAHITI", "CUBA"]);
opciones.push(["AUSTRIA", "PERU", "CANADA"]);
opciones.push(["FILIPINAS", "AUSTRALIA", "IRAN"]);
opciones.push(["COSTA RICA", "SEYCHELLES", "ARUBA"]);
opciones.push(["UZBEKISTAN", "AZERBAIYAN", "QATAR"]);
opciones.push(["UGANDA", "BIELORRUSIA", "BOSNIA Y HERZEGOVINA"]);
opciones.push(["BARBADOS", "NICARAGUA", "FRANCIA"]);
opciones.push(["BANGLADESH", "JAPON", "TIMOR ORIENTAL"]);
opciones.push(["CAMBOYA", "BELGICA", "ALEMANIA"]);
opciones.push(["RUMANIA", "BURKINA FASO", "GHANA"]);
opciones.push(["MEXICO", "BULGARIA", "NORUEGA"]);
opciones.push(["QATAR", "CANADA", "BAHREIN"]);
opciones.push(["BURUNDI", "MARRUECOS", "ARABIA SAUDITA"]);
opciones.push(["PORTUGAL", "CHAD", "BENIN"]);
opciones.push(["PUERTO RICO", "BERMUDAS", "INGLATERRA"]);
opciones.push(["HONDURAS", "BRUNEI", "LAOS"]);
opciones.push(["BOLIVIA", "CHILE", "NIGERIA"]);
opciones.push(["UCRANIA", "PARAGUAY", "BRASIL"]);
opciones.push(["TANZANIA", "TRINIDAD Y TOBAGO", "BAHAMAS"]);
opciones.push(["MONGOLIA", "BUTAN", "ERITREA"]);
opciones.push(["NORUEGA", "FINLANDIA", "ARGELIA"]);
opciones.push(["BOTSWANA", "GUATEMALA", "NIGER"]);
opciones.push(["NEPAL", "BIELORRUSIA", "MALTA"]);
opciones.push(["ISLANDIA", "ESTADOS UNIDOS", "BELICE"]);
opciones.push(["CROACIA", "AUSTRIA", "CANADA"]);
opciones.push(["REP. DEM. DEL CONGO", "FIYI", "EGIPTO"]);
opciones.push(["IRLANDA", "REP. DEL CONGO", "YIBUTI"]);
opciones.push(["VENEZUELA", "SUIZA", "SUECIA"]);
opciones.push(["COSTA DE MARFIL", "IRLANDA DEL NORTE", "ECUADOR"]);
opciones.push(["SRI LANKA", "SANTO TOME Y PRINCIPE", "ISLAS COOK"]);
opciones.push(["COREA DEL NORTE", "CHILE", "BOLIVIA"]);
opciones.push(["REP. DOMINICANA", "MOZAMBIQUE", "CAMERUN"]);
opciones.push(["CHINA", "RUSIA", "MALASIA"]);
opciones.push(["COLOMBIA", "ECUADOR", "LETONIA"]);
opciones.push(["SINGAPUR", "COSTA RICA", "TAILANDIA"]);
opciones.push(["ISRAEL", "JORDANIA", "CUBA"]);
opciones.push(["SURINAM", "MONTENEGRO", "CABO VERDE"]);
opciones.push(["CURAZAO", "SUDAN", "GABON"]);
opciones.push(["CHIPRE", "TURQUIA", "GUYANA"]);
opciones.push(["GEORGIA", "REP. CHECA", "YEMEN"]);
opciones.push(["PALAOS", "ALEMANIA", "TUVALU"]);
opciones.push(["ISLAS MARSHAL", "TAIWAN", "YIBUTI"]);
opciones.push(["RUMANIA", "ISLAS SALOMON", "DINAMARCA"]);
opciones.push(["ISLAS VIRGENES", "DOMINICA", "SANTA LUCIA"]);
opciones.push(["REPUBLICA DOMINICANA", "TAILANDIA", "SAN MARINO"]);
opciones.push(["ARGELIA", "SUDAN DEL SUR", "PANAMA"]);
opciones.push(["ECUADOR", "HONDURAS", "LITUANIA"]);
opciones.push(["PAISES BAJOS", "LETONIA", "ESTONIA"]);
opciones.push(["FRANCIA", "EGIPTO", "GUINEA"]);
opciones.push(["COREA DEL SUR", "ERITREA", "ZAMBIA"]);
opciones.push(["MALI", "LETONIA", "ESPAÑA"]);
opciones.push(["ETIOPIA", "KENIA", "IRAK"]);
opciones.push(["NAURU", "BELICE", "FINLANDIA"]);
opciones.push(["JAPON", "FIYI", "TIMOR ORIENTAL"]);
opciones.push(["NUEVA ZELANDA", "LESOTO", "ISLAS MALVINAS"]);
opciones.push(["ISLAS FEROE", "PANAMA", "ANDORRA"]);
opciones.push(["POLINESIA FRANCESA", "FRANCIA", "ISLAS GUADALUPE"]);
opciones.push(["GABON", "LIBANO", "MADAGASCAR"]);
opciones.push(["REINO UNIDO", "PUERTO RICO", "ESCOCIA"]);
opciones.push(["MALTA", "BRASIL", "INGLATERRA"]);
opciones.push(["BURKINA FASO", "NAMIBIA", "IRLANDA DEL NORTE"]);
opciones.push(["PAPUA NUEVA GUINEA", "ESCOCIA", "NICARAGUA"]);
opciones.push(["MACEDONIA", "GALES", "TOGO"]);
opciones.push(["GRANADA", "GUYANA FRANCESA", "ANDORRA"]);
opciones.push(["KIRIBATI", "GEORGIA", "PARAGUAY"]);
opciones.push(["SANTO TOME Y PRINCIPE", "TAYIKISTAN", "GUYANA FRANCESA"]);
opciones.push(["HAITI", "BENIN", "GHANA"]);
opciones.push(["GIBRALTAR", "ANDORRA", "MALAWI"]);
opciones.push(["CHIPRE", "GAMBIA", "HONDURAS"]);
opciones.push(["GUINEA", "COSTA DE MARFIL", "CROACIA"]);
opciones.push(["PORTUGAL", "JORDANIA", "GUINEA ECUATORIAL"]);
opciones.push(["GRECIA", "TIMOR ORIENTAL", "URUGUAY"]);
opciones.push(["GUATEMALA", "ESLOVAQUIA", "EL SALVADOR"]);
opciones.push(["UZBEKISTAN", "SIRIA", "GUINEA-BISAU"]);
opciones.push(["TONGA", "GUYANA", "JAMAICA"]);
opciones.push(["ISLANDIA", "AUSTRALIA", "PERU"]);
opciones.push(["GRECIA", "EL SALVADOR", "HONDURAS"]);
opciones.push(["CROACIA", "RUANDA", "UGANDA"]);
opciones.push(["PANAMA", "HAITI", "CHINA"]);
opciones.push(["BULGARIA", "HUNGRIA", "MEXICO"]);
opciones.push(["MYANMAR", "ESLOVENIA", "INDONESIA"]);
opciones.push(["IRLANDA", "ECUADOR", "ITALIA"]);
opciones.push(["MALASIA", "ISRAEL", "FINLANDIA"]);
opciones.push(["CUBA", "OMAN", "INDIA"]);
opciones.push(["LIBERIA", "IRAK", "SIERRA LEONA"]);
opciones.push(["SENEGAL", "SERBIA", "IRAN"]);
opciones.push(["ISLANDIA", "VANUATU", "NORUEGA"]);
opciones.push(["ITALIA", "FILIPINAS", "MEXICO"]);
opciones.push(["TUNEZ", "JAMAICA", "SUIZA"]);
opciones.push(["DINAMARCA", "REP. DOMINICANA", "JORDANIA"]);
opciones.push(["JAPON", "TAIWAN", "YEMEN"]);
opciones.push(["SEYCHELLES", "KENIA", "COLOMBIA"]);
opciones.push(["BOLIVIA", "KIRGUISTAN", "TURKMENISTAN"]);
opciones.push(["CAMBOYA", "BAHREIN", "SOMALIA"]);
opciones.push(["COSTA RICA", "VANUATU", "KIRIBATI"]);
opciones.push(["BANGLADESH", "KUWAIT", "COMORAS"]);
opciones.push(["SAN CRISTOBAL Y NIEVES", "POLONIA", "AZERBAIYAN"]);
opciones.push(["COREA DEL NORTE", "CHINA", "NUEVA ZELANDA"]);
opciones.push(["SUAZILANDIA", "COREA DEL SUR", "JAPON"]);
opciones.push(["KUWAIT", "BOTSWANA", "SIRIA"]);
opciones.push(["BAHAMAS", "SANTA LUCIA", "ISLAS CAIMAN"]);
opciones.push(["ERITREA", "NEPAL", "KAZAJISTAN"]);
opciones.push(["LAOS", "VIETNAM", "BELICE"]);
opciones.push(["LIBANO", "LIBERIA", "PUERTO RICO"]);
opciones.push(["AUSTRIA", "ANTIGUA Y BARBUDA", "SANTA LUCIA"]);
opciones.push(["EMIRATOS ARABES U.", "LIECHTENSTEIN", "LUXEMBURGO"]);
opciones.push(["CHIPRE", "SRI LANKA", "MADAGASCAR"]);
opciones.push(["LIBERIA", "ESTADOS UNIDOS", "CHAD"]);
opciones.push(["CAMERUN", "LESOTO", "SIERRA LEONA"]);
opciones.push(["UGANDA", "LETONIA", "LITUANIA"]);
opciones.push(["MARRUECOS", "PAISES BAJOS", "LUXEMBURGO"]);
opciones.push(["LETONIA", "SAN MARINO", "MACEDONIA"]);
opciones.push(["TURQUIA", "LIBIA", "ESPAÑA"]);
opciones.push(["MARRUECOS", "RUSIA", "VIETNAM"]);
opciones.push(["MALI", "MOLDAVIA", "RUMANIA"]);
opciones.push(["INGLATERRA", "ESLOVENIA", "MONTENEGRO"]);
opciones.push(["MADAGASCAR", "BENIN", "PERU"]);
opciones.push(["MAURITANIA", "SINGAPUR", "ISLAS MARSHALL"]);
opciones.push(["ALEMANIA", "MACEDONIA", "ISRAEL"]);
opciones.push(["BARBADOS", "DOMINICA", "MALI"]);
opciones.push(["MYANMAR", "REP. CHECA", "SUDAN"]);
opciones.push(["MONGOLIA", "SAMOA", "NIGER"]);
opciones.push(["TIMOR ORIENTAL", "MARTINICA", "ETIOPIA"]);
opciones.push(["VENEZUELA", "NICARAGUA", "MAURITANIA"]);
opciones.push(["NUEVA ZELANDA", "MONTSERRAT", "REINO UNIDO"]);
opciones.push(["INDONESIA", "MALTA", "TANZANIA"]);
opciones.push(["BURUNDI", "ARABIA SAUDITA", "MAURICIO"]);
opciones.push(["MALDIVAS", "ARUBA", "COLOMBIA"]);
opciones.push(["MONTENEGRO", "MALAUI", "NAMIBIA"]);
opciones.push(["MEXICO", "URUGUAY", "ITALIA"]);
opciones.push(["ESTADOS UNIDOS", "LIBERIA", "MALASIA"]);
opciones.push(["ESCOCIA", "MOZAMBIQUE", "ZAMBIA"]);
opciones.push(["NAMIBIA", "CANADA", "LITUANIA"]);
opciones.push(["LUXEMBURGO", "ANDORRA", "NUEVA CALEDONIA"]);
opciones.push(["NIGERIA", "PALAOS", "NIGER"]);
opciones.push(["ISLAS SALOMON", "NIGERIA", "ARMENIA"]);
opciones.push(["NICARAGUA", "HONDURAS", "EL SALVADOR"]);
opciones.push(["PAISES BAJOS", "PARAGUAY", "LUXEMBURGO"]);
opciones.push(["SUECIA", "CHILE", "NORUEGA"]);
opciones.push(["NEPAL", "TURKMENISTAN", "BUTAN"]); ////***** */  0 
opciones.push(["BELGICA", "NAURU", "FIYI"]);
opciones.push(["SANTO TOME Y PRINCIPE", "NUEVA ZELANDA", "AUSTRALIA"]);
opciones.push(["BAHREIN", "BUTAN", "OMAN"]);
opciones.push(["COSTA RICA", "PANAMA", "TAILANDIA"]);
opciones.push(["PERU", "CANADA", "MEXICO"]);
opciones.push(["GUINEA", "GUINEA ECUATORIAL", "PAPUA NUEVA GUINEA"]);
opciones.push(["BRASIL", "FILIPINAS", "REP. CHECA"]);
opciones.push(["PAKISTAN", "UZBEKISTAN", "SUDAFRICA"]);
opciones.push(["POLONIA", "COSTA DE MARFIL", "INDONESIA"]);
opciones.push(["MALASIA", "REPUBLICA DOMINICANA", "PUERTO RICO"]);
opciones.push(["RUANDA", "PALESTINA", "JORDANIA"]);
opciones.push(["BOLIVIA", "PORTUGAL", "ESPAÑA"]);
opciones.push(["PALAOS", "ANDORRA", "TONGA"]);
opciones.push(["PARAGUAY", "PAISES BAJOS", "URUGUAY"]);
opciones.push(["PANAMA", "BAHREIN", "CATAR"]);
opciones.push(["RUMANIA", "LITUANIA", "SURINAM"]);
opciones.push(["CROACIA", "SERBIA", "HAITI"]);
opciones.push(["ALEMANIA", "RUSIA", "ESTADOS UNIDOS"]);
opciones.push(["SUIZA", "GABON", "RUANDA"]);
opciones.push(["NIGERIA", "YEMEN", "ARABIA SAUDITA"]);
opciones.push(["ISLAS SALOMON", "AUSTRALIA", "MARTINICA"]);
opciones.push(["KUWAIT", "SEYCHELLES", "SRI LANKA"]);
opciones.push(["SIRIA", "FRANCIA", "PALESTINA"]);
opciones.push(["ANDORRA", "SUECIA", "TAIWAN"]);
opciones.push(["SINGAPUR", "FILIPINAS", "INDONESIA"]);
opciones.push(["REP. DEM. DEL CONGO", "HONDURAS", "ESLOVENIA"]);
opciones.push(["LETONIA", "ESLOVAQUIA", "LUXEMBURGO"]);
opciones.push(["BIELORRUSIA", "SIERRA LEONA", "GUINEA-BISAU"]);
opciones.push(["LIECHTENSTEIN", "ECUADOR", "SAN MARINO"]);
opciones.push(["SENEGAL", "ARGENTINA", "CAMERUN"]);
opciones.push(["SOMALIA", "JAPON", "GHANA"]);
opciones.push(["VENEZUELA", "SURINAM", "GUYANA FRANCESA"]);
opciones.push(["VANUATU", "SUDAN DEL SUR", "SUDAN"]);
opciones.push(["PANAMA", "RUSIA", "SANTO TOME Y PRINCIPE"]);
opciones.push(["EL SALVADOR", "NICARAGUA", "COSTA RICA"]);
opciones.push(["JAMAICA", "IRAK", "SIRIA"]);
opciones.push(["CHILE", "SUAZILANDIA", "LESOTO"]);
opciones.push(["AUSTRALIA", "ISLAS TURCAS Y CAICOS", "GUADALUPE"]);
opciones.push(["CHAD", "BELGICA", "MAURITANIA"]);
opciones.push(["TOGO", "BRUNEI", "TONGA"]);
opciones.push(["MYANMAR", "COSTA RICA", "TAILANDIA"]);
opciones.push(["BULGARIA", "TAYIKISTAN", "IRAN"]);
opciones.push(["GAMBIA", "ZIMBABUE", "TIMOR ORIENTAL"]);
opciones.push(["ANGOLA", "TURKMENISTAN", "TRINIDAD Y TOBAGO"]);
opciones.push(["TUNEZ", "PAKISTAN", "TURQUIA"]);
opciones.push(["TONGA", "MALTA", "SUIZA"]);
opciones.push(["CANADA", "TURQUIA", "ARGELIA"]);
opciones.push(["TRINIDAD Y TOBAGO", "NEPAL", "MARRUECOS"]);
opciones.push(["KIRIBATI", "VIETNAM", "TUVALU"]);
opciones.push(["CHINA", "TONGA", "TAIWAN"]);
opciones.push(["TAHITI", "TANZANIA", "MONGOLIA"]);
opciones.push(["FILIPINAS", "UCRANIA", "SUECIA"]);
opciones.push(["PANAMA", "RUMANIA", "UGANDA"]);
opciones.push(["ESTADOS UNIDOS", "URUGUAY", "LIBERIA"]);
opciones.push(["GRECIA", "PARAGUAY", "URUGUAY"]);
opciones.push(["TURKMENISTAN", "TAYIKISTAN", "UZBEKISTAN"]);
opciones.push(["SAN VICENTE Y LAS GRANADINAS", "YIBUTI", "BANGLADESH"]);
opciones.push(["JORDANIA", "VENEZUELA", "ARMENIA"]);
opciones.push(["MARRUECOS", "HONDURAS", "VIETNAM"]);
opciones.push(["VANUATU", "YIBUTI", "MONTSERRAT"]);
opciones.push(["CHILE", "SAMOA", "FILIPINAS"]);
opciones.push(["ITALIA", "KOSOVO", "LETONIA"]);
opciones.push(["YEMEN", "EGIPTO", "GUATEMALA"]);
opciones.push(["ESTADOS UNIDOS", "MADAGASCAR", "SUDAFRICA"]);
opciones.push(["CABO VERDE", "KENIA", "ZAMBIA"]);
opciones.push(["UGANDA", "ZIMBABUE", "CROACIA"]);

// Variable que guarda la posicion actual
let posActual = 0;

// Variable que guarda la cantidad acertadas hasta el momento
let cantidadAcertadas = 0;

function comenzarJuego() {
    //reseteamos las variables
    posActual = 0;
    cantidadAcertadas = 0;
    //activamos las pantallas necesarias
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    cargarBandera();
}

//funcion que carga la siguiente bandera y sus opciones
function cargarBandera() {
    //controlo si se acabaron las banderas
    if (banderas.length <= posActual) {
        terminarJuego();
    }
    else{ // cargo las opciones
        // Limpiamos las clases que se asignaron
        limpiarOpciones();

        document.getElementById("imgBandera").src = "img/Banderas/" + banderas[posActual];
        document.getElementById("n0").innerHTML = opciones[posActual][0];
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        document.getElementById("n2").innerHTML = opciones[posActual][2];
    }
}

function limpiarOpciones() {
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";

    document.getElementById("L0").className = "letra";
    document.getElementById("L1").className = "letra";
    document.getElementById("L2").className = "letra";
}

function comprobarRespuesta(opElegida) {
    if (opElegida == correcta[posActual]) { // Acertó
        // Agregamos las clases para colocar el color verde a la opcion elegida
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
        document.getElementById("L" + opElegida).className = "letra letraAcertada";
        cantidadAcertadas++;
    }else{ // No acertó
        // Agregamos las clases para colocar el color rojo a la opcion elegida
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
        document.getElementById("L" + opElegida).className = "letra letraNoAcertada";

        // opcion que era correcta
        document.getElementById("n" + correcta[posActual]).className = "nombre nombreAcertada";
        document.getElementById("L" + correcta[posActual]).className = "letra letraAcertada";
    }
    posActual++;
    // Esperamos
    setTimeout(cargarBandera,1300);
}

function terminarJuego() {
    // Ocultamos las pantallas y mostramos la pantalla final
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
    // Agregamos los resultados
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = banderas.length - cantidadAcertadas;
}

function volverInicio() {
    // Ocultamos las pantallas y activamos la inicial
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
    document.getElementById("pantalla-juego").style.display = "none";
}