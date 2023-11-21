import remark from 'remark';
import remarkHTML from 'remark-html';
import {
  faBandcamp,
  faFacebookF,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faBrowser } from '@fortawesome/pro-duotone-svg-icons';

export const iconMap = {
  bandcamp: faBandcamp,
  facebook: faFacebookF,
  instagram: faInstagram,
  web: faBrowser,
  youtube: faYoutube,
};

export const md2Html = (content) =>
  remark().use(remarkHTML).processSync(content).toString();

export const getFontSize = () =>
  parseFloat(getComputedStyle(document.documentElement).fontSize);

export const getLightboxType = (url) => {
  const src = url && new URL(url);
  const filename = src?.pathname && src.pathname.split('/').pop();
  const fileExt = filename && filename.split('.').pop();

  if (src?.hostname.includes('facebook.com')) {
    return 'facebook';
  }
  if (['gif', 'jpeg', 'jpg', 'png'].includes(fileExt?.toLowerCase())) {
    return 'image';
  }
  return 'iframe';
};

export const getYoutubeUrl = (url) => {
  if (
    (!url.includes('youtu.be') && !url.includes('youtube')) ||
    url.includes('embed')
  )
    return url;
  return `https://www.youtube.com/embed/${url?.split('/').pop()}`;
};

export const removeHashFromUrl = () => {
  const uri = window.location.toString();

  if (uri.indexOf('#') > 0) {
    const cleanUri = uri.substring(0, uri.indexOf('#'));
    window.history.replaceState({}, document.title, cleanUri);
  }
};
