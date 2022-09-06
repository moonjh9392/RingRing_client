import Alram from '../../components/mypage/menu/Alram';
import News from '../../components/mypage/menu/News';

export const menus = [
	{
		id: 0,
		text: '알람 설정',
		component: <Alram />,
		path: '/mypage/alram',
	},
	{
		id: 1,
		text: '뉴스 보기',
		component: <News />,
		path: '/mypage/news',
	},
];
