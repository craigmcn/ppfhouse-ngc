import CMS from 'netlify-cms-app';
import cloudinary from 'netlify-cms-media-library-cloudinary';
import { Widget as IdWidget } from '@ncwidgets/id';

import NoPreview from './preview-templates/NoPreview';
import AboutPagePreview from './preview-templates/AboutPagePreview';
import ComicsPagePreview from './preview-templates/ComicsPagePreview';
import ContactPagePreview from './preview-templates/ContactPagePreview';
import EventPagePreview from './preview-templates/EventPagePreview';
import MediaPagePreview from './preview-templates/MediaPagePreview';
import MusicPagePreview from './preview-templates/MusicPagePreview';
import NewsPagePreview from './preview-templates/NewsPagePreview';
import PressPagePreview from './preview-templates/PressPagePreview';
import SimplePagePreview from './preview-templates/SimplePagePreview';
import VideoPagePreview from './preview-templates/VideoPagePreview';
import WpbeIndexPagePreview from './preview-templates/WpbeIndexPagePreview';
import WpbeVisualsPagePreview from './preview-templates/WpbeVisualsPagePreview';

import styles from '!css-loader!sass-loader!../styles/preview.scss'; // eslint-disable-line import/no-webpack-loader-syntax

CMS.registerMediaLibrary(cloudinary);

CMS.registerWidget(IdWidget);

CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('animation', MediaPagePreview);
CMS.registerPreviewTemplate('art-design', MediaPagePreview);
CMS.registerPreviewTemplate('comics', ComicsPagePreview);
CMS.registerPreviewTemplate('comics-order', NoPreview);
CMS.registerPreviewTemplate('contacts', ContactPagePreview);
CMS.registerPreviewTemplate('event', EventPagePreview);
CMS.registerPreviewTemplate('music', MusicPagePreview);
CMS.registerPreviewTemplate('music-film-tv-scoring', MediaPagePreview);
CMS.registerPreviewTemplate('music-tim-shia-bio', SimplePagePreview);
CMS.registerPreviewTemplate('music-tim-shia-services', SimplePagePreview);
CMS.registerPreviewTemplate('music-tim-shia-music', SimplePagePreview);
CMS.registerPreviewTemplate('music-jazz-4-jrs-overview', SimplePagePreview);
CMS.registerPreviewTemplate('music-jazz-4-jrs-testimonials', PressPagePreview);
CMS.registerPreviewTemplate('music-jazz-4-jrs-curriculum', SimplePagePreview);
CMS.registerPreviewTemplate('music-jazz-4-jrs-video', VideoPagePreview);
CMS.registerPreviewTemplate('music-wpbe-about', PressPagePreview);
CMS.registerPreviewTemplate('music-wpbe-music', MediaPagePreview);
CMS.registerPreviewTemplate('music-wpbe-index', WpbeIndexPagePreview);
CMS.registerPreviewTemplate('music-wpbe-visuals', WpbeVisualsPagePreview);
CMS.registerPreviewTemplate('news', NewsPagePreview);

CMS.registerPreviewStyle(styles.toString(), { raw: true });
