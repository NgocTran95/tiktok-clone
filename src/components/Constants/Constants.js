import { FeedbackIcon, KeyboardIcon, LanguageIcon, ProfileIcon, CoinIcon, SettingIcon, LogoutIcon } from '~/components/Icons'


// Header Menu

export let currentUser = true;

export const MENU_ITEMS = [
    {
        icon: <LanguageIcon />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt (Việt Nam)',
                },
                {
                    type: 'language',
                    code: 'it',
                    title: 'Italiano (Italy)',
                },
                {
                    type: 'language',
                    code: 'es',
                    title: 'Español',
                },
            ],
        },
    },
    {
        icon: <FeedbackIcon />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <KeyboardIcon />,
        title: 'Keyboard shortcuts',
    },
];

export const CURRENT_USER_ITEMS = [
    {
        icon: <ProfileIcon />,
        title: 'View profile',
    },
    {
        icon: <CoinIcon />,
        title: 'Get coins',
    },
    {
        icon: <SettingIcon />,
        title: 'Settings',
    },
    ...MENU_ITEMS,
    {
        icon: <LogoutIcon />,
        title: 'Log out',
        separate: true,
    },
];