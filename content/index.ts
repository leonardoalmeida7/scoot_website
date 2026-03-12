import homeData from './home.json';
import aboutData from './about.json';
import careersData from './careers.json';
import locationData from './location.json';
import type { AboutInterface, HomeInterface, CareersInterface, LocationInterface} from '@/interfaces/ContentInterface';

export const home: HomeInterface = homeData;
export const about: AboutInterface = aboutData;
export const careers: CareersInterface = careersData;
export const location: LocationInterface = locationData;