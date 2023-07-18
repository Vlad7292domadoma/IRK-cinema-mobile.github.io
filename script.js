if (JSON.parse(localStorage.getItem('vlad')) !== null) {
    films = JSON.parse(localStorage.getItem('vlad'))
}


else {
    var films = {
        "Непросмотренные фильмы": [],
        "Просмотренные фильмы": [],
    };
};


function makeTable() {

    if (films["Непросмотренные фильмы"].length != 0) {

        const divUnSeeFilmsText = document.createElement("div");
        divUnSeeFilmsText.className = "divUnSeeFilmsText"
        divUnSeeFilmsText.id = "divUnSeeFilmsText"
        divUnSeeFilmsText.textContent = "Непросмотренные фильмы:"

        const divUnSeeFilmsKarto4ki = document.createElement("div");
        divUnSeeFilmsKarto4ki.className = "divUnSeeFilmsKarto4ki"

        document.getElementsByClassName("contentdiv")[0].appendChild(divUnSeeFilmsText)
        document.getElementsByClassName("contentdiv")[0].appendChild(divUnSeeFilmsKarto4ki)

        for (let i = 0; i < films["Непросмотренные фильмы"].length; i++) {
            karto4ka = document.createElement("div")
            karto4ka.className = films["Непросмотренные фильмы"][i][0].replace(/\s/g, "") + "karto4ka"; 
            karto4ka.classList.add("karto4ka")
            document.getElementsByClassName("divUnSeeFilmsKarto4ki")[0].appendChild(karto4ka)

            divForText = document.createElement("div")
            divForText.className = "divForText" + films["Непросмотренные фильмы"][i][0].replace(/\s/g, "")
            divForText.classList.add("divForText")

            document.getElementsByClassName(films["Непросмотренные фильмы"][i][0].replace(/\s/g, "") + "karto4ka")[0].appendChild(divForText)

            divForFilmName = document.createElement("div")
            divForFilmName.className = "divForFilmName" + films["Непросмотренные фильмы"][i][0].replace(/\s/g, "")
            divForFilmName.classList.add("divForFilmName")

            document.getElementsByClassName("divForText" + films["Непросмотренные фильмы"][i][0].replace(/\s/g, ""))[0].appendChild(divForFilmName)

            divForFilmGenre = document.createElement("div")
            divForFilmGenre.className = "divForFilmGenre" + films["Непросмотренные фильмы"][i][0].replace(/\s/g, "")
            divForFilmGenre.classList.add("divForFilmGenre")

            document.getElementsByClassName("divForText" + films["Непросмотренные фильмы"][i][0].replace(/\s/g, ""))[0].appendChild(divForFilmGenre)

            divForFilmType = document.createElement("div")
            divForFilmType.className = "divForFilmType" + films["Непросмотренные фильмы"][i][0].replace(/\s/g, "")
            divForFilmType.classList.add("divForFilmType")

            document.getElementsByClassName("divForText" + films["Непросмотренные фильмы"][i][0].replace(/\s/g, ""))[0].appendChild(divForFilmType)

            divForFilmComm = document.createElement("div")
            divForFilmComm.className = "divForFilmComm" + films["Непросмотренные фильмы"][i][0].replace(/\s/g, "")
            divForFilmComm.textContent = 'Комментарий: '
            divForFilmComm.classList.add("divForFilmComm")

            document.getElementsByClassName("divForText" + films["Непросмотренные фильмы"][i][0].replace(/\s/g, ""))[0].appendChild(divForFilmComm)

            filmName = document.createElement("p")
            filmName.className = "filmName" + films["Непросмотренные фильмы"][i][0].replace(/\s/g, "")
            filmName.textContent = films["Непросмотренные фильмы"][i][0]
            document.getElementsByClassName("divForFilmName" + films["Непросмотренные фильмы"][i][0].replace(/\s/g, ""))[0].appendChild(filmName)

            filmGenre = document.createElement("p")
            filmGenre.className = "filmGenre" + films["Непросмотренные фильмы"][i][0].replace(/\s/g, "")
            filmGenre.classList.add('filmGenre')
            filmGenre.textContent = "Жанр: " + films["Непросмотренные фильмы"][i][1]
            document.getElementsByClassName("divForFilmGenre" + films["Непросмотренные фильмы"][i][0].replace(/\s/g, ""))[0].appendChild(filmGenre)

            filmType = document.createElement("p")
            filmType.className = "filmType" + films["Непросмотренные фильмы"][i][0].replace(/\s/g, "")
            filmType.classList.add('filmType')

            filmType.textContent ="Тип: " + films["Непросмотренные фильмы"][i][2]
            document.getElementsByClassName("divForFilmType" + films["Непросмотренные фильмы"][i][0].replace(/\s/g, ""))[0].appendChild(filmType)

            filmComm = document.createElement("td")
            filmComm.className = films["Непросмотренные фильмы"][i][0].replace(/\s/g, "")
            filmComm.classList.add("correctable")
            filmComm.id = films["Непросмотренные фильмы"][i][0]


            if (films["Непросмотренные фильмы"][i][3]) {
                filmComm.textContent = films["Непросмотренные фильмы"][i][3]
                document.getElementsByClassName("divForFilmComm" + films["Непросмотренные фильмы"][i][0].replace(/\s/g, ""))[0].appendChild(filmComm)
            }
            if (!films["Непросмотренные фильмы"][i][3]) {
                filmComm.textContent = '                                     '
                document.getElementsByClassName("divForFilmComm" + films["Непросмотренные фильмы"][i][0].replace(/\s/g, ""))[0].appendChild(filmComm)




            }
 









            divForBtn = document.createElement("div")
            divForBtn.className = "divForBtn" + films["Непросмотренные фильмы"][i][0].replace(/\s/g, "")
            divForBtn.classList.add("divForBtn")
            document.getElementsByClassName(films["Непросмотренные фильмы"][i][0].replace(/\s/g, "") + "karto4ka")[0].appendChild(divForBtn)

            tdbtnForMove = document.createElement("td")
            tdbtnForMove.className = films["Непросмотренные фильмы"][i][0].replace(/\s/g, "")
            tdbtnForMove.classList.add("btnTd")
            document.getElementsByClassName("divForBtn" + films["Непросмотренные фильмы"][i][0].replace(/\s/g, ""))[0].appendChild(tdbtnForMove)

            btnForMove = document.createElement("button")
            btnForMove.className = 'btnInTable'
            btnForMove.textContent = "↓";
            document.getElementsByClassName("divForBtn" + films["Непросмотренные фильмы"][i][0].replace(/\s/g, ""))[0].appendChild(btnForMove)
        }       

    }

    if (films["Просмотренные фильмы"].length != 0) {
        const divSeeFilmsText = document.createElement("div");
        divSeeFilmsText.className = "divSeeFilmsText"
        divSeeFilmsText.textContent = "Просмотренные фильмы:"

        const divSeeFilmsKarto4ki = document.createElement("div");
        divSeeFilmsKarto4ki.className = "divSeeFilmsKarto4ki"

        document.getElementsByClassName("contentdiv")[0].appendChild(divSeeFilmsText)
        document.getElementsByClassName("contentdiv")[0].appendChild(divSeeFilmsKarto4ki)













        for (let i = 0; i < films["Просмотренные фильмы"].length; i++) {
            karto4ka = document.createElement("div")
            karto4ka.className = films["Просмотренные фильмы"][i][0].replace(/\s/g, "") + "karto4ka";
            karto4ka.classList.add("karto4ka")
            document.getElementsByClassName("divSeeFilmsKarto4ki")[0].appendChild(karto4ka)

            divForText = document.createElement("div")
            divForText.className = "divForText" + films["Просмотренные фильмы"][i][0].replace(/\s/g, "")
            divForText.classList.add("divForText")

            document.getElementsByClassName(films["Просмотренные фильмы"][i][0].replace(/\s/g, "") + "karto4ka")[0].appendChild(divForText)

            divForFilmName = document.createElement("div")
            divForFilmName.className = "divForFilmName" + films["Просмотренные фильмы"][i][0].replace(/\s/g, "")
            divForFilmName.classList.add("divForFilmName")

            document.getElementsByClassName("divForText" + films["Просмотренные фильмы"][i][0].replace(/\s/g, ""))[0].appendChild(divForFilmName)

            divForFilmGenre = document.createElement("div")
            divForFilmGenre.className = "divForFilmGenre" + films["Просмотренные фильмы"][i][0].replace(/\s/g, "")
            divForFilmGenre.classList.add("divForFilmGenre")

            document.getElementsByClassName("divForText" + films["Просмотренные фильмы"][i][0].replace(/\s/g, ""))[0].appendChild(divForFilmGenre)

            divForFilmType = document.createElement("div")
            divForFilmType.className = "divForFilmType" + films["Просмотренные фильмы"][i][0].replace(/\s/g, "")
            divForFilmType.classList.add("divForFilmType")

            document.getElementsByClassName("divForText" + films["Просмотренные фильмы"][i][0].replace(/\s/g, ""))[0].appendChild(divForFilmType)

            divForFilmComm = document.createElement("div")
            divForFilmComm.className = "divForFilmComm" + films["Просмотренные фильмы"][i][0].replace(/\s/g, "")
            divForFilmComm.textContent = 'Комментарий: '
            divForFilmComm.classList.add("divForFilmComm")

            document.getElementsByClassName("divForText" + films["Просмотренные фильмы"][i][0].replace(/\s/g, ""))[0].appendChild(divForFilmComm)

            filmName = document.createElement("p")
            filmName.className = "filmName" + films["Просмотренные фильмы"][i][0].replace(/\s/g, "")
            filmName.textContent = films["Просмотренные фильмы"][i][0]
            document.getElementsByClassName("divForFilmName" + films["Просмотренные фильмы"][i][0].replace(/\s/g, ""))[0].appendChild(filmName)

            filmGenre = document.createElement("p")
            filmGenre.className = "filmGenre" + films["Просмотренные фильмы"][i][0].replace(/\s/g, "")
            filmGenre.classList.add('filmGenre')

            filmGenre.textContent = "Жанр: " + films["Просмотренные фильмы"][i][1]
            document.getElementsByClassName("divForFilmGenre" + films["Просмотренные фильмы"][i][0].replace(/\s/g, ""))[0].appendChild(filmGenre)

            filmType = document.createElement("p")
            filmType.className = "filmType" + films["Просмотренные фильмы"][i][0].replace(/\s/g, "")
            filmType.classList.add('filmType')

            filmType.textContent = "Тип: " + films["Просмотренные фильмы"][i][2]
            document.getElementsByClassName("divForFilmType" + films["Просмотренные фильмы"][i][0].replace(/\s/g, ""))[0].appendChild(filmType)

            filmComm = document.createElement("td")
            filmComm.className = films["Просмотренные фильмы"][i][0].replace(/\s/g, "")
            filmComm.classList.add("correctable")
            filmComm.id = films["Просмотренные фильмы"][i][0]
            
            
filmComm.textContent = films["Просмотренные фильмы"][i][3]
            document.getElementsByClassName("divForFilmComm" + films["Просмотренные фильмы"][i][0].replace(/\s/g, ""))[0].appendChild(filmComm)













            divForBtn = document.createElement("div")
            divForBtn.className = "divForBtn" + films["Просмотренные фильмы"][i][0].replace(/\s/g, "")
            divForBtn.classList.add("divForBtn")

            document.getElementsByClassName(films["Просмотренные фильмы"][i][0].replace(/\s/g, "") + "karto4ka")[0].appendChild(divForBtn)

            tdbtnForMove = document.createElement("td")
            tdbtnForMove.className = films["Просмотренные фильмы"][i][0].replace(/\s/g, "")
            tdbtnForMove.classList.add("btnTd")
            document.getElementsByClassName("divForBtn" + films["Просмотренные фильмы"][i][0].replace(/\s/g, ""))[0].appendChild(tdbtnForMove)

            btnForMove = document.createElement("button")
            btnForMove.textContent = "Х"
            btnForMove.className = 'btnInTable'

            document.getElementsByClassName("divForBtn" + films["Просмотренные фильмы"][i][0].replace(/\s/g, ""))[0].appendChild(btnForMove)
        }



    }


















 /*    let zagolovokUnSeeFilms = document.createElement('h3')
    zagolovokUnSeeFilms.className = "zagolovokUnSeeFilmsClass"
    zagolovokUnSeeFilms.textContent = "Непросмотренные фильмы"  
    
    document.querySelector("#divUnSeeFilmsText").appendChild(zagolovokUnSeeFilms)

  
    let row1 = document.createElement("tr");
    row1.className = "headtr"
    row1.innerHTML = `
            <td class="td1">Название</td>
            <td class="td2">Жанр</td> 
            <td class="td3">Тип</td>
            <td class="td4">Комментарий</td>
            <td class="td5"></td>
         `;
    document.querySelector("#divUnSeeFilmsTable").appendChild(row1);

    for (let i = 0; i < films["Непросмотренные фильмы"].length; i++) {
        let row = document.createElement("tr");
        
        row.className = "unSeeTr"

        if (i % 2 === 0) {
            row.classList.add("greyTr");
        }
        else {
            row.classList.add("whiteTr");
        }
        row.innerHTML = `
            <td class="td1 ">${films["Непросмотренные фильмы"][i][0]}</td>
            <td class="td2 ${films["Непросмотренные фильмы"][i][0]}">${films["Непросмотренные фильмы"][i][1]}</td> 
            <td class="td3 ${films["Непросмотренные фильмы"][i][0]}">${films["Непросмотренные фильмы"][i][2]}</td>
            <td class="correctable td4 ${films["Непросмотренные фильмы"][i][0]}" id="${films["Непросмотренные фильмы"][i][0]}">${films["Непросмотренные фильмы"][i][3]}</td>
            <td  class="btnTd td5 ${films["Непросмотренные фильмы"][i][0]}"><button class="tableBtn">↓</button></td>
         `;
        document.querySelector("#divUnSeeFilmsTable").appendChild(row);
    }
    let zagolovokSeeFilms = document.createElement('h3')
    zagolovokSeeFilms.className = "zagolovokSeeFilms"
    zagolovokSeeFilms.textContent = "Просмотренные фильмы"
    document.querySelector("#seeDiv").appendChild(zagolovokSeeFilms)
    
    let row = document.createElement("tr");
    row.className = "headtr "
    row.innerHTML = `
            <td class="td1">Название</td>
            <td class="td2">Жанр</td> 
            <td class="td3">Тип</td>
            <td class="td4">Комментарий</td>
            <td class="td5"></td>
         `;
   
    document.querySelector("#seeDiv").appendChild(row);
    for (let i = 0; i < films["Просмотренные фильмы"].length; i++) {
        let row = document.createElement("tr");
        row.className = "seeDiv"

        if (i % 2 === 0) {
            row.classList.add("greyTr");
        }
        else {
            row.classList.add("whiteTr");
        }
        row.innerHTML = `
            <td class="td1">${films["Просмотренные фильмы"][i][0]}</td>
            <td class="td2">${films["Просмотренные фильмы"][i][1]}</td> 
            <td class="td3">${films["Просмотренные фильмы"][i][2]}</td>
            <td class="correctable td4" id="${films["Просмотренные фильмы"][i][0]}">${films["Просмотренные фильмы"][i][3]}</td>
            <td class="btnTd td5"><button class="tableBtn">Х</button></td>
         `;
        document.querySelector("#seeDiv").appendChild(row);
    }

  











    




*/



}
 

let btnMove = function () {
    var result = Array.from(document.querySelectorAll('button'));   
    for (let i = 0; i < result.length; i++) {
        if (result[i].id == "findbtn") {
            result.splice(i, 1)
        }
    }
    for (let i = 0; i < result.length; i++) {
        if (result[i].id == "addBtn") {
            result.splice(i, 1)
        }
    }
    var seeFilmsBtn = result.splice(result.length - films["Просмотренные фильмы"].length, films["Просмотренные фильмы"].length)
    window.result = result
    window.seeFilmsBtn = seeFilmsBtn
    for (let i = 0; i < result.length; i++) {
        result[i].onclick = function () {
            films["Просмотренные фильмы"].push(films["Непросмотренные фильмы"][i])
            films["Непросмотренные фильмы"].splice(i, 1)
            localStorage.setItem('vlad', JSON.stringify(films))
            location.reload()
        }
    }
    for (let i = 0; i < seeFilmsBtn.length; i++) {
        seeFilmsBtn[i].onclick = function () {
            films["Просмотренные фильмы"].splice(i, 1)
            localStorage.setItem('vlad', JSON.stringify(films))
            location.reload()
        }
    }
};



let writeCorrectTd = function () {
    let correctTdText = localStorage.getItem("correctTdText")
    let correctTdID = localStorage.getItem("correctTdID")

    for (i = 0; i < films["Непросмотренные фильмы"].length; i++) {
        if (films["Непросмотренные фильмы"][i][0] == correctTdID) {
            films["Непросмотренные фильмы"][i][3] = correctTdText
        }
    }
    for (i = 0; i < films["Просмотренные фильмы"].length; i++) {
        if (films["Просмотренные фильмы"][i][0] == correctTdID) {
            films["Просмотренные фильмы"][i][3] = correctTdText
        }
    }
    localStorage.setItem('vlad', JSON.stringify(films))
    location.reload()
}


document.getElementsByClassName("correctable")
let commChangeFn = function () {
    var tds = document.getElementsByClassName("correctable")
    for (var i = 0; i < tds.length; i++) {
        tds[i].addEventListener('click', function func() {
            var input = document.createElement('input');
            input.value = this.innerHTML;
            this.innerHTML = '';
            this.appendChild(input);
            input.focus()
            var td = this;
            input.addEventListener('blur', function () {
                td.innerHTML = this.value;
                let correctTdID = td.id
                let correctTdText = this.value
                localStorage.setItem("correctTdText", correctTdText)
                localStorage.setItem("correctTdID", correctTdID)
                writeCorrectTd()
            });
            this.removeEventListener('click', func);           
        });
        var newCorrectable = document.getElementsByClassName("correctable")
        localStorage.setItem('vlad3', JSON.stringify(newCorrectable))
        JSON.parse(localStorage.getItem('vlad3'))
    }

    
};
     

let addNewFilm = function () {
    let massiveNewFilm = [document.querySelector("#inputnm").value,
    document.querySelector("#inputgnr").value,
    document.querySelector("#inputtype").value,
    document.querySelector("#inputcomm").value,
    ];
    films["Непросмотренные фильмы"].push(massiveNewFilm);
    localStorage.setItem('vlad', JSON.stringify(films))
    document.querySelector("#inputnm").value = "";
    document.querySelector("#inputgnr").value = "";
    document.querySelector("#inputtype").value = "";
    document.querySelector("#inputcomm").value = "";
    commChangeFn();
    btnMove();
    makeTable();
    localStorage.setItem('vlad', JSON.stringify(films))
    location.reload()
}


let zametkiBlock = function () {
    const tempp = document.getElementById("areawithText")
    tempp.addEventListener('blur', function () {
        let zametki = document.getElementById('areawithText').value
        localStorage.setItem('vlad1', JSON.stringify(zametki))
        location.reload()
    });
    if (JSON.parse(localStorage.getItem('vlad1')) !== null) {
        document.getElementById('areawithText').value = JSON.parse(localStorage.getItem('vlad1'))
    }
}


let fndInputFunction = function () {
    if (document.getElementById("findnm").value.length ==2 ) {
        console.log(document.getElementById("findnm").value)
        addOptionsToDatabase()
    }
    if (document.getElementById("findnm").value.length == 1) {
        document.getElementById("datalistfilms").innerHTML = ''
    }
    if (document.getElementById("findnm").value.length == 0) {
        document.getElementById("datalistfilms").innerHTML = ''
    }

}


let addOptionsToDatabase = function () {
    document.getElementById("datalistfilms").innerHTML = ''
    let allFilmName = []
    for (let i = 0; i < allFilmArray.length; i++) {
        allFilmName.push(allFilmArray[i][0])
    }
    
    for (let i = 0; i < allFilmName.length; i++) {
        let temp = document.createElement('option')
        temp.value = allFilmName[i]
        document.querySelector("#datalistfilms").appendChild(temp)
    }
 

}

makeTable();
btnMove();
commChangeFn();

let allFilmArray = [].concat(films["Непросмотренные фильмы"], films["Просмотренные фильмы"])
let allFilmArray2 = [].concat(...allFilmArray)
document.querySelector('#addBtn').onclick = function () {
    if (allFilmArray2.includes(document.querySelector("#inputnm").value) && document.querySelector("#inputnm").value) {
        alert("Такой фильм уже есть в базе")
        document.querySelector("#inputnm").value = "";
        document.querySelector("#inputgnr").value = "";
        document.querySelector("#inputtype").value = "";
        document.querySelector("#inputcomm").value = "";
    }
    else if (!document.querySelector("#inputnm").value) {
        alert("Введите название фильма")
    }
    else {
        addNewFilm()
    }
}


document.querySelector('#findbtn').onclick = function () {
    var tmpValue = document.querySelector("#findgenre").value;
    var tmpValue2 = document.querySelector("#findtype").value;
    var tmpValue1 = document.querySelector("#findnm").value;
    var findInfoArray = [tmpValue1, tmpValue, tmpValue2]
    let allFilmName = [];
    let unSeeFilmsName = [];
    let unSeeFilms = films["Непросмотренные фильмы"]
    let seeFilms = films["Просмотренные фильмы"]
    let seeFilmsName = [];
    for (let i = 0; i < allFilmArray.length; i++) {
        allFilmName.push(allFilmArray[i][0])
    }
    for (let i = 0; i < unSeeFilms.length; i++) {
        unSeeFilmsName.push(unSeeFilms[i][0])
    }
    for (let i = 0; i < seeFilms.length; i++) {
        seeFilmsName.push(seeFilms[i][0])
    }
    if (unSeeFilmsName.includes(document.querySelector("#findnm").value)) {
        for (let i = 0; i < Array.from(films["Непросмотренные фильмы"]).length; i++) { 
            if (Array.from(films["Непросмотренные фильмы"])[i][0] == tmpValue1) {
                alert(`Фильм "${tmpValue1}" не просмотрен.
Он переместится в начало списка для редактирования.`) 
                films["Непросмотренные фильмы"].unshift(...films["Непросмотренные фильмы"].splice(i, 1))
                localStorage.setItem('vlad', JSON.stringify(films))
                location.reload()
        }
            }
    }        
    else if (seeFilmsName.includes(document.querySelector("#findnm").value)) {
                for (let i = 0; i < Array.from(films["Просмотренные фильмы"]).length; i++) {
                 if (Array.from(films["Просмотренные фильмы"])[i][0] == tmpValue1) {
                alert(`Фильм "${tmpValue1}" просмотрен.
Он переместится в начало списка для редактирования.`)
                films["Просмотренные фильмы"].unshift(...films["Просмотренные фильмы"].splice(i, 1))
                localStorage.setItem('vlad', JSON.stringify(films))
                location.reload()
            }
        }
    }        
    else if (!tmpValue1 && !tmpValue2 && tmpValue) {
        let tempGenre = []
        for (let i = 0; i < films["Непросмотренные фильмы"].length; i++) {
            Array.from(films["Непросмотренные фильмы"][i]).includes(`${tmpValue}`) ?
                films["Непросмотренные фильмы"].unshift(...(films["Непросмотренные фильмы"].splice(i, 1)))
                : tempGenre.push(films["Непросмотренные фильмы"][i])
        };
        if (tempGenre.length == films["Непросмотренные фильмы"].length) {
            alert("Поиск не дал результатов")
        };
        localStorage.setItem('vlad', JSON.stringify(films))
        location.reload()
    }        
    else if (!tmpValue1 && tmpValue2 && !tmpValue) {
        let tempType = []
        for (let i = 0; i < films["Непросмотренные фильмы"].length; i++) {
          Array.from(films["Непросмотренные фильмы"][i]).includes(`${tmpValue2}`) ?
                films["Непросмотренные фильмы"].unshift(...(films["Непросмотренные фильмы"].splice(i, 1)))
              : tempType.push(films["Непросмотренные фильмы"][i])
        }
        if (tempType.length == films["Непросмотренные фильмы"].length) {
            alert("Поиск не дал результатов")
        };
        localStorage.setItem('vlad', JSON.stringify(films))
        location.reload()
    }
    else if (!tmpValue1 && tmpValue2 && tmpValue) {
        let tempGenreWithType = []

        for (let i = 0; i < films["Непросмотренные фильмы"].length; i++) {
            Array.from(films["Непросмотренные фильмы"][i]).includes(`${tmpValue}`) &&
                Array.from(films["Непросмотренные фильмы"][i]).includes(`${tmpValue2}`) ? 
                films["Непросмотренные фильмы"].unshift(...(films["Непросмотренные фильмы"].splice(i, 1))) :
                tempGenreWithType.push(i)
        }           
        if (tempGenreWithType.length == films["Непросмотренные фильмы"].length) {
            alert("Поиск не дал результатов")
        }   
        localStorage.setItem('vlad', JSON.stringify(films))
        location.reload()
    }      
    else if (!tmpValue && !tmpValue2 && !tmpValue1) {
        alert("Введите параметры поиска")
    }        
    else {
        alert("Поиск не дал результатов")
        location.reload()
}
}


const btnUp = {
    el: document.querySelector('.btn-up'),
    show() {
        // удалим у кнопки класс btn-up_hide
        this.el.classList.remove('btn-up_hide');
    },
    hide() {
        // добавим к кнопке класс btn-up_hide
        this.el.classList.add('btn-up_hide');
    },
    addEventListener() {
        // при прокрутке содержимого страницы
        window.addEventListener('scroll', () => {
            // определяем величину прокрутки
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
            scrollY > 100 ? this.show() : this.hide();
        });
        // при нажатии на кнопку .btn-up
        document.querySelector('.btn-up').onclick = () => {
            // переместим в начало страницы
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
    }
}


btnUp.addEventListener();

document.getElementsByClassName('saveFilmsBtn')[0].onclick = function () {
    var csvData = 'data:application/txt;charset=utf-8,' + encodeURIComponent(JSON.stringify(films));
    this.href = csvData;
    this.target = '_blank';
    this.download = 'IRK cinema films.txt';
};


document.getElementsByClassName('importFilmsBtn')[0].onclick = function () {    
    films = JSON.parse(prompt("Скопируйте список фильмов и вставьте в это поле:"))
    if (films) {    
        localStorage.setItem('vlad', JSON.stringify(films))
    }
    location.reload()
};















const divElements = document.querySelectorAll('p');
divElements.forEach((p) => {
    p.style.marginTop = 0;
    p.style.marginBottom = 0;

});






















window.addEventListener('scroll', function () {
    var div = document.getElementById('divPerehodKProsmotrennym');
    if (window.scrollY > 100) {
        div.style.display = 'none';
    } else {
        div.style.display = 'block';
    }
});
