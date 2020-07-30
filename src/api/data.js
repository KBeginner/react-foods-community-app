import food1 from '../fonts/foods/番茄炒蛋.jpg'
import food2 from '../fonts/foods/阳春面.jpg'
import food3 from '../fonts/foods/红烧肉.jpg'
import food4 from '../fonts/foods/青椒炒蛋.jpg'
import food5 from '../fonts/foods/手抓饼.jpg'
import food6 from '../fonts/foods/牛肉面.jpg'
import user from '../fonts/users/photo.jpg'

export default {
    notes:[
        {
            noteId: 1,
            title: '番茄炒蛋',
            content: '先把蛋炒熟，再炒番茄，然后混合翻炒。',
            photoList: [food1],
            userId: 1,
            userName: 'wiill',
            uerPic: user,
            loves: 8889,
            comments: 1312,
        },
        {
            noteId: 2,
            title: '阳春面',
            content: '烧开水，煮面，调料，拌面。',
            photoList: [food2],
            userId: 2,
            userName: 'jack',
            uerPic: user,
            loves: 689,
            comments:1312,
        },
        {
            noteId: 3,
            title: '红烧肉',
            content: '烧开水，煮面，调料，拌面。',
            photoList: [food3],
            userId: 3,
            userName: 'tom',
            uerPic: user,
            loves: 689,
            comments: 1312,
        },
        {
            noteId: 4,
            title: '青椒炒蛋',
            content: '烧开水，煮面，调料，拌面。',
            photoList: [food4],
            userId: 1,
            userName: 'monmon',
            uerPic: user,
            loves: 6889,
            comments: 1312,
        },
        {
            noteId: 5,
            title: '手抓饼',
            content: '烧开水，煮面，调料，拌面。',
            photoList: [food5],
            userId: 7,
            userName: 'jobs',
            uerPic: user,
            loves: 68889,
            comments: 1312,
        },
        {
            noteId: 6,
            title: '牛肉面',
            content: '烧开水，煮面，调料，拌面。',
            photoList: [food6],
            userId: 1,
            userName: 'bill',
            uerPic: user,
            loves: 688809,
            comments: 1312,
        }
    ],
    user: {
        userId: 1,
        userName: 'wiill',
        followed: 234,
        fans:  1287718,
        loves: 68889,
        noteList:[
            {
                noteId: 6,
                title: '牛肉面',
                content: '烧开水，煮面，调料，拌面。',
                photoList: [food6],
            },
            {
                noteId: 4,
                title: '青椒炒蛋',
                content: '烧开水，煮面，调料，拌面。',
                photoList: [food4],
            }
        ],
        loveList:[
            {
                noteId: 4,
                title: '青椒炒蛋',
                content: '烧开水，煮面，调料，拌面。',
                photoList: [food4],
            }
        ]
    }
}