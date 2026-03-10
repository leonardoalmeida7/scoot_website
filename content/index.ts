import homeData from './home.json';
import aboutData from './about.json';
import careersData from './careers.json';
import type { AboutInterface, HomeInterface, CareersInterface  } from '@/interfaces/ContentInterface';

export const home: HomeInterface = homeData;
export const about: AboutInterface = aboutData;
export const careers: CareersInterface = careersData;