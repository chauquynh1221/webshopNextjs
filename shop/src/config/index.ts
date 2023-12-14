export const PRODUCT_CATEGORY = [
    {
        lable : 'UI',
        value : 'UI' as const,
        featured : [
            {
                name : 'Editor picks',
                href : '#',
                imageSrc: '/nav/ui-icon/mixed.jpg',
            },
            {
                name : 'New Available',
                href : '#',
                imageSrc: '/nav/ui-icon/blue.jpg',
            },
            {
                name : 'BestSellers',
                href : '#',
                imageSrc: '/nav/ui-icon/purple.jpg',
            },
        ],
    },
    {
        lable : 'Icon',
        value : 'icon' as const,
        featured : [
            {
                name : 'Favorites Icon Picks',
                href : '#',
                imageSrc: '/nav/ui-icon/picks.jpg',
            },
            {
                name : 'New Available',
                href : '#',
                imageSrc: '/nav/ui-icon/new.jpg',
            },
            {
                name : 'BestSelling Icons',
                href : '#',
                imageSrc: '/nav/ui-icon/bestsellers.jpg',
            },
        ],
    },
]