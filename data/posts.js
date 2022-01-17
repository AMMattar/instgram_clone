import USERS from "./users";

export const POSTS = [
    {
        imageUrl: 'https://c4.wallpaperflare.com/wallpaper/852/660/1016/good-nature-backgrounds-1920x1200-wallpaper-preview.jpg',
        user: USERS[0].user,
        likes: 7963,
        caption: 'Here we go #new_Challenge',
        profile_pic: USERS[0].image,
        comments: [
            {
                user: 'Root',
                comment: 'Wow you actually did it. great work!'
            },
            {
                user: 'Slowly.try',
                comment: 'such a fire project! keep up the good work'
            },
        ],
    },
    {
        imageUrl: 'https://pbs.twimg.com/media/Db5Z5TUU8AAcIGL.jpg',
        user: USERS[1].user,
        likes: 3569,
        caption: 'Here we go the second one! #new_Challenge',
        profile_pic: USERS[1].image,
        comments: [
            {
                user: 'Root',
                comment: 'Wow you actually did it. great work!'
            },
            {
                user: 'Slowly.try',
                comment: 'such a fire project! keep up the good work'
            },
        ],
    },
]
