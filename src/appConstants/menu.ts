export type MenuItemType = {
    key: string;
    label: string;
    isTitle?: boolean;
    icon?: string;
    url?: string;
    badge?: {
        variant: string;
        text: string;
    };
    parentKey?: string;
    target?: string;
    children?: MenuItemType[];
};

const MENU_ITEMS: MenuItemType[] = [
    { 
        key: 'manage-Team', 
        label: 'Manage Team', 
        isTitle: false,
        icon: 'uil-object-ungroup',
        url:'/manageteam'
    },
    { 
        key: 'compensation', 
        label: 'Compensation',
        isTitle: false,
        icon: 'uil-paypal',
        url:'/compensation'
    },
    { 
        key: 'active-loads', 
        label: 'Active loads',
        icon: 'uil-truck-loading',
        isTitle: false,
        url:'/activeloads'
    },
    {
        key: 'trip',
        label: 'Trip',
        isTitle: false,
        icon: 'uil-clipboard-alt',
        children: [
            {
                key: 'add-trip',
                label: 'Add Trip',
                url: '/trip',
                parentKey: 'trip',
            },
            {
                key: 'active-trips',
                label: 'Active Trips',
                url: '/apps/crm/projects',
                parentKey: 'trip',
            },
        ]
    },
    {
        key: 'email-inbox',
        label: 'Email',
        icon: 'uil-envelope',
        url: '/apps/email/inbox',
        parentKey: 'apps-email',
    },

    {
        key: 'apps-calendar',
        label: 'Calendar',
        isTitle: false,
        icon: 'uil-calender',
        url: '/apps/calendar',
    },

    {
        key: 'apps-chat',
        label: 'Chat',
        isTitle: false,
        icon: 'uil-comments-alt',
        url: '/apps/chat',
    },
    {
        key: 'apps-social',
        label: 'Social Feed',
        isTitle: false,
        icon: 'uil-rss',
        url: '/apps/social',
    },
    {
        key: 'apps-file-manager',
        label: 'Paperwork',
        isTitle: false,
        icon: 'uil-folder-plus',
        url: '/apps/file',
    },
    { 
        key: 'page-faq', 
        label: 'FAQ',        
        icon: 'uil-question-circle',
        url: '/pages/faq', 
        parentKey: 'pages' 
    },
    {
        key: 'page-profile2',
        label: 'Social Profie',
        url: '/pages/profile2',
        parentKey: 'pages',
    },
    {
        key: 'page-profile',
        label: 'Dispatch Profile',
        url: '/pages/profile',
        parentKey: 'pages',
    },
    {
        key: 'project-gantt',
        label: 'Driver itinerary',
        url: '/apps/projects/gantt',
        parentKey: 'apps-projects',
    },
    // {
    //     key: 'page-error-500',
    //     label: 'Error - 500',
    //     url: '/error-500',
    //     parentKey: 'pages',
    // },
    // {
    //     key: 'page-error-404',
    //     label: 'Error - 404',
    //     url: '/error-404',
    //     parentKey: 'pages',
    // },

];

export { MENU_ITEMS };
