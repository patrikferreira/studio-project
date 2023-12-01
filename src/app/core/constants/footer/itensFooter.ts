type FooterItem = {
    routePath: string;
    classNameIcon: string;
    titleItem: string;
  };


 export const ITENS_FOOTER: FooterItem[] = [
    {
        routePath: '/',
        classNameIcon: 'fa-solid fa-house',
        titleItem:'início'
    },
    {
        routePath: '/professional',
        classNameIcon: 'fa-solid fa-calendar-days',
        titleItem:'agendar'
    },
    {
        routePath: '/service',
        classNameIcon: 'fa-solid fa-file-pen',
        titleItem:'serviços'
    },
    {
        routePath: '/address',
        classNameIcon: 'fa-solid fa-location-dot',
        titleItem:'endereço'
    }
]


