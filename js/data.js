const data = {
    users: [
        {
            id: 1,
            name: `Muhammad`,
            profilePhoto: ``,
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

let photo = document.querySelector('profile-img.jpg').src