let images = ['img/profile-img.jpg']

const data = {
    users: [
        {
            id: 1,
            name: `Muhammad`,
            profilePhoto: images[0],
            lastActivityTime: 1216513,
            phone: 998977558595,
            messages: [
                {
                    text: `Salom, dm`,
                    owner: true
                },
                {
                    text: `Tinc, ozinci`,
                    owner: false
                }
            ]
        },
        {
            id: 2,
            name: `Yunus`,
            profilePhoto: ``,
            lastActivityTime: 1216513,
            phone: 998998511515,
            messages: [
                {
                    text: `Salom, dm`,
                    owner: false
                },
                {
                    text: `Tinc, ozinci`,
                    owner: true
                }
            ]
        }
    ]
}

/* CONTACTS */
let contactsList = document.querySelector('.contacts-ul')

users()
async function users() {
    let response = await fetch(`https://randomuser.me/api/?results=20&inc=gender,name,nat,picture,id,location,phone`)
    response = await response.json()
    response = response.results

    response.forEach(user => {
        let newLiElement = document.createElement('li')
        newLiElement.classList.add('contacts-li')

        let newImgElement = document.createElement('img')
        newImgElement.classList.add('contacts-profile-img')
        newImgElement.setAttribute('src', user.picture.large)

        let newDivElement = document.createElement('div')
        newDivElement.classList.add('contact-details')

        let newNameElement = document.createElement('p')
        newNameElement.classList.add('contact-name')
        newNameElement.textContent = `${user.name.first} ${user.name.last}`

        newDivElement.appendChild(newNameElement)
        newLiElement.appendChild(newImgElement)
        newLiElement.appendChild(newDivElement)
        contactsList.appendChild(newLiElement)

        let contactName = document.querySelector('.mh-contact-name')
        let contactStatus = document.querySelector('.mh-contact-status')
        let selectChat = document.querySelector('h2')
        let contactDetails = document.querySelector('.mh-contact-details')
        let modalProfileImg = document.querySelector('.profile-img')
        let modalUserName = document.querySelector('.username')
        let modalUserTitle = document.querySelector('.userinfo-details-username')
        let modalUserPhone = document.querySelector('.userinfo-details-phone')
        let modalUserBio = document.querySelector('.userinfo-details-bio')

        newLiElement.addEventListener('click', () => {
            contactName.textContent = `${user.name.first} ${user.name.last}`
            contactStatus.textContent = `last seen recently`
            selectChat.textContent = ''
            contactDetails.style.visibility = 'visible'
            modalProfileImg.setAttribute('src', user.picture.large)
            modalUserName.textContent = `${user.name.first} ${user.name.last}`
            modalUserTitle.textContent = `@${user.name.first}_${user.name.last.charAt(0)}`
            modalUserPhone.textContent = `${user.phone}`
            modalUserBio.textContent = `${user.location.city}, ${user.location.country}`
        });


        // let searchInput = document.querySelector('.search-input')

        // searchInput.addEventListener('keyup', (name) => {
        //     let username = user.name.first.toLowerCase()

        //     console.log(username.includes(name));

        // if (name.length >= 3) {
        //     let filtered = response.filter(user => {
        //         let username = user.name.first.toLowerCase()
        //         return user.name.first.includes(name)
        //     })
        //     return filtered
        // }

        // console.log(response);
        // })   

    });

    /* SEARCH */

    function filterChats(keyword) {
        keyword = keyword.toLowerCase();
        let sortedUsers = response.filter(function (element) {
            let username = element.name.first;
            let getUserName = username.toLowerCase();
            let filtered = getUserName.includes(keyword);
            return filtered
        })
        return sortedUsers
    }

    let searchInput = document.querySelector('.search-input')
    searchInput.addEventListener('keyup', user => {
        let showFilter = filterChats(searchInput.value);
        contactsList.textContent = ''
        console.log(showFilter);

        showFilter.forEach(user => {
            let newLiElement = document.createElement('li')
            newLiElement.classList.add('contacts-li')

            let newImgElement = document.createElement('img')
            newImgElement.classList.add('contacts-profile-img')
            newImgElement.setAttribute('src', user.picture.large)

            let newDivElement = document.createElement('div')
            newDivElement.classList.add('contact-details')

            let newNameElement = document.createElement('p')
            newNameElement.classList.add('contact-name')
            newNameElement.textContent = `${user.name.first} ${user.name.last}`

            newDivElement.appendChild(newNameElement)
            newLiElement.appendChild(newImgElement)
            newLiElement.appendChild(newDivElement)
            contactsList.appendChild(newLiElement)
        })
    });
};











// results: [
//     {
//         "gender": "female",
//         "name": {
//             "title": "Ms",
//             "first": "Emilia",
//             "last": "Rodriguez"
//         },
//         "location": {
//             "street": {
//                 "number": 7328,
//                 "name": "Calle de Ángel García"
//             },
//             "city": "Palma de Mallorca",
//             "state": "Aragón",
//             "country": "Spain",
//             "postcode": 55023,
//             "coordinates": {
//                 "latitude": "-23.1327",
//                 "longitude": "162.4138"
//             },
//             "timezone": {
//                 "offset": "0:00",
//                 "description": "Western Europe Time, London, Lisbon, Casablanca"
//             }
//         },
//         "phone": "940-824-638",
//         "id": {
//             "name": "DNI",
//             "value": "56852069-Q"
//         },
//         "picture": {
//             "large": "https://randomuser.me/api/portraits/women/62.jpg",
//             "medium": "https://randomuser.me/api/portraits/med/women/62.jpg",
//             "thumbnail": "https://randomuser.me/api/portraits/thumb/women/62.jpg"
//         },
//         "nat": "ES"
//     },
//     {
//         "gender": "female",
//         "name": {
//             "title": "Ms",
//             "first": "Marie",
//             "last": "Morgan"
//         },
//         "location": {
//             "street": {
//                 "number": 5846,
//                 "name": "The Grove"
//             },
//             "city": "Truro",
//             "state": "West Glamorgan",
//             "country": "United Kingdom",
//             "postcode": "CK3 1LR",
//             "coordinates": {
//                 "latitude": "68.1994",
//                 "longitude": "-131.8593"
//             },
//             "timezone": {
//                 "offset": "+4:30",
//                 "description": "Kabul"
//             }
//         },
//         "phone": "021 7018 7140",
//         "id": {
//             "name": "NINO",
//             "value": "MR 73 27 36 Z"
//         },
//         "picture": {
//             "large": "https://randomuser.me/api/portraits/women/62.jpg",
//             "medium": "https://randomuser.me/api/portraits/med/women/62.jpg",
//             "thumbnail": "https://randomuser.me/api/portraits/thumb/women/62.jpg"
//         },
//         "nat": "GB"
//     },
//     {
//         "gender": "male",
//         "name": {
//             "title": "Mr",
//             "first": "Roger",
//             "last": "Long"
//         },
//         "location": {
//             "street": {
//                 "number": 3264,
//                 "name": "Karen Dr"
//             },
//             "city": "Grand Rapids",
//             "state": "Virginia",
//             "country": "United States",
//             "postcode": 68864,
//             "coordinates": {
//                 "latitude": "84.8198",
//                 "longitude": "83.4343"
//             },
//             "timezone": {
//                 "offset": "+5:00",
//                 "description": "Ekaterinburg, Islamabad, Karachi, Tashkent"
//             }
//         },
//         "phone": "(669)-085-3573",
//         "id": {
//             "name": "SSN",
//             "value": "490-00-3639"
//         },
//         "picture": {
//             "large": "https://randomuser.me/api/portraits/men/66.jpg",
//             "medium": "https://randomuser.me/api/portraits/med/men/66.jpg",
//             "thumbnail": "https://randomuser.me/api/portraits/thumb/men/66.jpg"
//         },
//         "nat": "US"
//     },
//     {
//         "gender": "male",
//         "name": {
//             "title": "Mr",
//             "first": "Magdo",
//             "last": "Fogaça"
//         },
//         "location": {
//             "street": {
//                 "number": 6826,
//                 "name": "Rua Treze de Maio "
//             },
//             "city": "Bacabal",
//             "state": "Rio Grande do Norte",
//             "country": "Brazil",
//             "postcode": 83299,
//             "coordinates": {
//                 "latitude": "-3.2087",
//                 "longitude": "7.2703"
//             },
//             "timezone": {
//                 "offset": "-6:00",
//                 "description": "Central Time (US & Canada), Mexico City"
//             }
//         },
//         "phone": "(97) 8697-4626",
//         "id": {
//             "name": "",
//             "value": null
//         },
//         "picture": {
//             "large": "https://randomuser.me/api/portraits/men/9.jpg",
//             "medium": "https://randomuser.me/api/portraits/med/men/9.jpg",
//             "thumbnail": "https://randomuser.me/api/portraits/thumb/men/9.jpg"
//         },
//         "nat": "BR"
//     },
//     {
//         "gender": "male",
//         "name": {
//             "title": "Mr",
//             "first": "Jack",
//             "last": "Welch"
//         },
//         "location": {
//             "street": {
//                 "number": 613,
//                 "name": "Park Lane"
//             },
//             "city": "Durham",
//             "state": "Highlands and Islands",
//             "country": "United Kingdom",
//             "postcode": "K3O 9NA",
//             "coordinates": {
//                 "latitude": "-70.9046",
//                 "longitude": "34.6016"
//             },
//             "timezone": {
//                 "offset": "-3:00",
//                 "description": "Brazil, Buenos Aires, Georgetown"
//             }
//         },
//         "phone": "0111830 862 3646",
//         "id": {
//             "name": "NINO",
//             "value": "PL 04 53 92 N"
//         },
//         "picture": {
//             "large": "https://randomuser.me/api/portraits/men/89.jpg",
//             "medium": "https://randomuser.me/api/portraits/med/men/89.jpg",
//             "thumbnail": "https://randomuser.me/api/portraits/thumb/men/89.jpg"
//         },
//         "nat": "GB"
//     },
//     {
//         "gender": "male",
//         "name": {
//             "title": "Mr",
//             "first": "Douglas",
//             "last": "Jensen"
//         },
//         "location": {
//             "street": {
//                 "number": 6905,
//                 "name": "Bollinger Rd"
//             },
//             "city": "Darwin",
//             "state": "Western Australia",
//             "country": "Australia",
//             "postcode": 9850,
//             "coordinates": {
//                 "latitude": "-21.9874",
//                 "longitude": "10.4622"
//             },
//             "timezone": {
//                 "offset": "+8:00",
//                 "description": "Beijing, Perth, Singapore, Hong Kong"
//             }
//         },
//         "phone": "00-0318-8914",
//         "id": {
//             "name": "TFN",
//             "value": "483259603"
//         },
//         "picture": {
//             "large": "https://randomuser.me/api/portraits/men/90.jpg",
//             "medium": "https://randomuser.me/api/portraits/med/men/90.jpg",
//             "thumbnail": "https://randomuser.me/api/portraits/thumb/men/90.jpg"
//         },
//         "nat": "AU"
//     },
//     {
//         "gender": "female",
//         "name": {
//             "title": "Ms",
//             "first": "Afşar",
//             "last": "Hakyemez"
//         },
//         "location": {
//             "street": {
//                 "number": 2790,
//                 "name": "Abanoz Sk"
//             },
//             "city": "Yozgat",
//             "state": "Bartın",
//             "country": "Turkey",
//             "postcode": 98756,
//             "coordinates": {
//                 "latitude": "-11.9132",
//                 "longitude": "-78.1000"
//             },
//             "timezone": {
//                 "offset": "+5:00",
//                 "description": "Ekaterinburg, Islamabad, Karachi, Tashkent"
//             }
//         },
//         "phone": "(805)-487-0634",
//         "id": {
//             "name": "",
//             "value": null
//         },
//         "picture": {
//             "large": "https://randomuser.me/api/portraits/women/73.jpg",
//             "medium": "https://randomuser.me/api/portraits/med/women/73.jpg",
//             "thumbnail": "https://randomuser.me/api/portraits/thumb/women/73.jpg"
//         },
//         "nat": "TR"
//     },
//     {
//         "gender": "male",
//         "name": {
//             "title": "Mr",
//             "first": "Victor",
//             "last": "Ross"
//         },
//         "location": {
//             "street": {
//                 "number": 7869,
//                 "name": "Richmond Ave"
//             },
//             "city": "Inverness",
//             "state": "Nova Scotia",
//             "country": "Canada",
//             "postcode": "N6Q 2M2",
//             "coordinates": {
//                 "latitude": "53.5830",
//                 "longitude": "-103.7935"
//             },
//             "timezone": {
//                 "offset": "+3:00",
//                 "description": "Baghdad, Riyadh, Moscow, St. Petersburg"
//             }
//         },
//         "phone": "930-243-5333",
//         "id": {
//             "name": "",
//             "value": null
//         },
//         "picture": {
//             "large": "https://randomuser.me/api/portraits/men/19.jpg",
//             "medium": "https://randomuser.me/api/portraits/med/men/19.jpg",
//             "thumbnail": "https://randomuser.me/api/portraits/thumb/men/19.jpg"
//         },
//         "nat": "CA"
//     },
//     {
//         "gender": "female",
//         "name": {
//             "title": "Ms",
//             "first": "Patricia",
//             "last": "Herrero"
//         },
//         "location": {
//             "street": {
//                 "number": 5562,
//                 "name": "Calle del Barquillo"
//             },
//             "city": "Palma de Mallorca",
//             "state": "La Rioja",
//             "country": "Spain",
//             "postcode": 45456,
//             "coordinates": {
//                 "latitude": "-12.3934",
//                 "longitude": "-175.0101"
//             },
//             "timezone": {
//                 "offset": "+4:30",
//                 "description": "Kabul"
//             }
//         },
//         "phone": "992-565-094",
//         "id": {
//             "name": "DNI",
//             "value": "81476962-P"
//         },
//         "picture": {
//             "large": "https://randomuser.me/api/portraits/women/16.jpg",
//             "medium": "https://randomuser.me/api/portraits/med/women/16.jpg",
//             "thumbnail": "https://randomuser.me/api/portraits/thumb/women/16.jpg"
//         },
//         "nat": "ES"
//     },
//     {
//         "gender": "female",
//         "name": {
//             "title": "Ms",
//             "first": "Clara",
//             "last": "Pastor"
//         },
//         "location": {
//             "street": {
//                 "number": 1012,
//                 "name": "Calle de La Luna"
//             },
//             "city": "Castellón de la Plana",
//             "state": "Cantabria",
//             "country": "Spain",
//             "postcode": 26999,
//             "coordinates": {
//                 "latitude": "-89.2134",
//                 "longitude": "48.7701"
//             },
//             "timezone": {
//                 "offset": "+4:30",
//                 "description": "Kabul"
//             }
//         },
//         "phone": "947-186-780",
//         "id": {
//             "name": "DNI",
//             "value": "23378358-C"
//         },
//         "picture": {
//             "large": "https://randomuser.me/api/portraits/women/26.jpg",
//             "medium": "https://randomuser.me/api/portraits/med/women/26.jpg",
//             "thumbnail": "https://randomuser.me/api/portraits/thumb/women/26.jpg"
//         },
//         "nat": "ES"
//     },
//     {
//         "gender": "male",
//         "name": {
//             "title": "Mr",
//             "first": "Giorgio",
//             "last": "Leis"
//         },
//         "location": {
//             "street": {
//                 "number": 197,
//                 "name": "Finkenweg"
//             },
//             "city": "Hardegsen",
//             "state": "Hamburg",
//             "country": "Germany",
//             "postcode": 53592,
//             "coordinates": {
//                 "latitude": "20.0580",
//                 "longitude": "134.8316"
//             },
//             "timezone": {
//                 "offset": "-8:00",
//                 "description": "Pacific Time (US & Canada)"
//             }
//         },
//         "phone": "0143-3485937",
//         "id": {
//             "name": "",
//             "value": null
//         },
//         "picture": {
//             "large": "https://randomuser.me/api/portraits/men/13.jpg",
//             "medium": "https://randomuser.me/api/portraits/med/men/13.jpg",
//             "thumbnail": "https://randomuser.me/api/portraits/thumb/men/13.jpg"
//         },
//         "nat": "DE"
//     },
//     {
//         "gender": "female",
//         "name": {
//             "title": "Miss",
//             "first": "Sam",
//             "last": "Wallace"
//         },
//         "location": {
//             "street": {
//                 "number": 9021,
//                 "name": "Galway Road"
//             },
//             "city": "Ballybofey-Stranorlar",
//             "state": "Fingal",
//             "country": "Ireland",
//             "postcode": 62724,
//             "coordinates": {
//                 "latitude": "-7.5689",
//                 "longitude": "12.6929"
//             },
//             "timezone": {
//                 "offset": "-3:30",
//                 "description": "Newfoundland"
//             }
//         },
//         "phone": "041-243-4965",
//         "id": {
//             "name": "PPS",
//             "value": "7446189T"
//         },
//         "picture": {
//             "large": "https://randomuser.me/api/portraits/women/2.jpg",
//             "medium": "https://randomuser.me/api/portraits/med/women/2.jpg",
//             "thumbnail": "https://randomuser.me/api/portraits/thumb/women/2.jpg"
//         },
//         "nat": "IE"
//     },
//     {
//         "gender": "male",
//         "name": {
//             "title": "Mr",
//             "first": "Duane",
//             "last": "Williams"
//         },
//         "location": {
//             "street": {
//                 "number": 645,
//                 "name": "Plum St"
//             },
//             "city": "Henderson",
//             "state": "Kansas",
//             "country": "United States",
//             "postcode": 68815,
//             "coordinates": {
//                 "latitude": "-16.0813",
//                 "longitude": "103.5305"
//             },
//             "timezone": {
//                 "offset": "-11:00",
//                 "description": "Midway Island, Samoa"
//             }
//         },
//         "phone": "(066)-393-2200",
//         "id": {
//             "name": "SSN",
//             "value": "826-02-7402"
//         },
//         "picture": {
//             "large": "https://randomuser.me/api/portraits/men/34.jpg",
//             "medium": "https://randomuser.me/api/portraits/med/men/34.jpg",
//             "thumbnail": "https://randomuser.me/api/portraits/thumb/men/34.jpg"
//         },
//         "nat": "US"
//     },
//     {
//         "gender": "male",
//         "name": {
//             "title": "Mr",
//             "first": "Sergio",
//             "last": "Pastor"
//         },
//         "location": {
//             "street": {
//                 "number": 798,
//                 "name": "Avenida de Andalucía"
//             },
//             "city": "Santiago de Compostela",
//             "state": "Melilla",
//             "country": "Spain",
//             "postcode": 61928,
//             "coordinates": {
//                 "latitude": "41.4122",
//                 "longitude": "67.5576"
//             },
//             "timezone": {
//                 "offset": "-5:00",
//                 "description": "Eastern Time (US & Canada), Bogota, Lima"
//             }
//         },
//         "phone": "915-701-280",
//         "id": {
//             "name": "DNI",
//             "value": "63676423-G"
//         },
//         "picture": {
//             "large": "https://randomuser.me/api/portraits/men/59.jpg",
//             "medium": "https://randomuser.me/api/portraits/med/men/59.jpg",
//             "thumbnail": "https://randomuser.me/api/portraits/thumb/men/59.jpg"
//         },
//         "nat": "ES"
//     },
//     {
//         "gender": "male",
//         "name": {
//             "title": "Mr",
//             "first": "دانیال",
//             "last": "نجاتی"
//         },
//         "location": {
//             "street": {
//                 "number": 8713,
//                 "name": "نوفل لوشاتو"
//             },
//             "city": "ملارد",
//             "state": "سمنان",
//             "country": "Iran",
//             "postcode": 50066,
//             "coordinates": {
//                 "latitude": "-60.4170",
//                 "longitude": "44.1453"
//             },
//             "timezone": {
//                 "offset": "-2:00",
//                 "description": "Mid-Atlantic"
//             }
//         },
//         "phone": "083-45062371",
//         "id": {
//             "name": "",
//             "value": null
//         },
//         "picture": {
//             "large": "https://randomuser.me/api/portraits/men/32.jpg",
//             "medium": "https://randomuser.me/api/portraits/med/men/32.jpg",
//             "thumbnail": "https://randomuser.me/api/portraits/thumb/men/32.jpg"
//         },
//         "nat": "IR"
//     },
//     {
//         "gender": "female",
//         "name": {
//             "title": "Ms",
//             "first": "Waltrud",
//             "last": "Kappler"
//         },
//         "location": {
//             "street": {
//                 "number": 6806,
//                 "name": "Beethovenstraße"
//             },
//             "city": "Schriesheim",
//             "state": "Nordrhein-Westfalen",
//             "country": "Germany",
//             "postcode": 89509,
//             "coordinates": {
//                 "latitude": "-62.9728",
//                 "longitude": "-69.8936"
//             },
//             "timezone": {
//                 "offset": "+1:00",
//                 "description": "Brussels, Copenhagen, Madrid, Paris"
//             }
//         },
//         "phone": "0652-4962886",
//         "id": {
//             "name": "",
//             "value": null
//         },
//         "picture": {
//             "large": "https://randomuser.me/api/portraits/women/21.jpg",
//             "medium": "https://randomuser.me/api/portraits/med/women/21.jpg",
//             "thumbnail": "https://randomuser.me/api/portraits/thumb/women/21.jpg"
//         },
//         "nat": "DE"
//     },
//     {
//         "gender": "female",
//         "name": {
//             "title": "Mrs",
//             "first": "یسنا",
//             "last": "جعفری"
//         },
//         "location": {
//             "street": {
//                 "number": 8866,
//                 "name": "میدان فلسطین"
//             },
//             "city": "قزوین",
//             "state": "تهران",
//             "country": "Iran",
//             "postcode": 28089,
//             "coordinates": {
//                 "latitude": "87.8963",
//                 "longitude": "-86.3027"
//             },
//             "timezone": {
//                 "offset": "-9:00",
//                 "description": "Alaska"
//             }
//         },
//         "phone": "051-07649618",
//         "id": {
//             "name": "",
//             "value": null
//         },
//         "picture": {
//             "large": "https://randomuser.me/api/portraits/women/11.jpg",
//             "medium": "https://randomuser.me/api/portraits/med/women/11.jpg",
//             "thumbnail": "https://randomuser.me/api/portraits/thumb/women/11.jpg"
//         },
//         "nat": "IR"
//     },
//     {
//         "gender": "female",
//         "name": {
//             "title": "Ms",
//             "first": "Catherine",
//             "last": "Phillips"
//         },
//         "location": {
//             "street": {
//                 "number": 3379,
//                 "name": "Pearse Street"
//             },
//             "city": "Roscommon",
//             "state": "Dublin City",
//             "country": "Ireland",
//             "postcode": 13490,
//             "coordinates": {
//                 "latitude": "68.7260",
//                 "longitude": "158.7898"
//             },
//             "timezone": {
//                 "offset": "+4:30",
//                 "description": "Kabul"
//             }
//         },
//         "phone": "041-009-0528",
//         "id": {
//             "name": "PPS",
//             "value": "2714179T"
//         },
//         "picture": {
//             "large": "https://randomuser.me/api/portraits/women/71.jpg",
//             "medium": "https://randomuser.me/api/portraits/med/women/71.jpg",
//             "thumbnail": "https://randomuser.me/api/portraits/thumb/women/71.jpg"
//         },
//         "nat": "IE"
//     },
//     {
//         "gender": "male",
//         "name": {
//             "title": "Mr",
//             "first": "Aaron",
//             "last": "Li"
//         },
//         "location": {
//             "street": {
//                 "number": 208,
//                 "name": "Northgate"
//             },
//             "city": "Lower Hutt",
//             "state": "Otago",
//             "country": "New Zealand",
//             "postcode": 68768,
//             "coordinates": {
//                 "latitude": "26.9588",
//                 "longitude": "60.5141"
//             },
//             "timezone": {
//                 "offset": "+7:00",
//                 "description": "Bangkok, Hanoi, Jakarta"
//             }
//         },
//         "phone": "(457)-112-6922",
//         "id": {
//             "name": "",
//             "value": null
//         },
//         "picture": {
//             "large": "https://randomuser.me/api/portraits/men/29.jpg",
//             "medium": "https://randomuser.me/api/portraits/med/men/29.jpg",
//             "thumbnail": "https://randomuser.me/api/portraits/thumb/men/29.jpg"
//         },
//         "nat": "NZ"
//     },
//     {
//         "gender": "female",
//         "name": {
//             "title": "Miss",
//             "first": "Tracy",
//             "last": "Kelley"
//         },
//         "location": {
//             "street": {
//                 "number": 2200,
//                 "name": "The Green"
//             },
//             "city": "Monaghan",
//             "state": "Wicklow",
//             "country": "Ireland",
//             "postcode": 19796,
//             "coordinates": {
//                 "latitude": "-67.6045",
//                 "longitude": "-33.1600"
//             },
//             "timezone": {
//                 "offset": "0:00",
//                 "description": "Western Europe Time, London, Lisbon, Casablanca"
//             }
//         },
//         "phone": "061-045-0380",
//         "id": {
//             "name": "PPS",
//             "value": "9733658T"
//         },
//         "picture": {
//             "large": "https://randomuser.me/api/portraits/women/10.jpg",
//             "medium": "https://randomuser.me/api/portraits/med/women/10.jpg",
//             "thumbnail": "https://randomuser.me/api/portraits/thumb/women/10.jpg"
//         },
//         "nat": "IE"
//     }
// ]