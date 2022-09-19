// Layouts
import { HeaderOnly } from '~/components/Layouts';

// Configs
import routeConfigs from '~/config/routeConfig';

// Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

const publicRoutes = [
    { path: routeConfigs.home, component: Home },
    { path: routeConfigs.following, component: Following },
    { path: routeConfigs.profile, component: Profile },
    { path: routeConfigs.upload, component: Upload, layout: HeaderOnly },
    { path: routeConfigs.search, component: Search },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
