import CMS from 'netlify-cms-app'
import cloudinary from 'netlify-cms-media-library-cloudinary'
import { Widget as IdWidget } from '@ncwidgets/id'

import NoPreview from './preview-templates/NoPreview'
import AboutPagePreview from './preview-templates/AboutPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import ComicsPagePreview from './preview-templates/ComicsPagePreview'
import ContactPagePreview from './preview-templates/ContactPagePreview'
import MusicPagePreview from './preview-templates/MusicPagePreview'
import PressPagePreview from './preview-templates/PressPagePreview'
import SimplePagePreview from './preview-templates/SimplePagePreview'
import VideoPagePreview from './preview-templates/VideoPagePreview'
import WpbeVisualsPagePreview from './preview-templates/WpbeVisualsPagePreview'

import styles from '!css-loader!sass-loader!../styles/preview.scss';

CMS.registerMediaLibrary(cloudinary)

CMS.registerWidget(IdWidget)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('animation-order', NoPreview)
CMS.registerPreviewTemplate('art-design-order', NoPreview)
CMS.registerPreviewTemplate('comics', ComicsPagePreview)
CMS.registerPreviewTemplate('comics-order', NoPreview)
CMS.registerPreviewTemplate('contacts', ContactPagePreview)
CMS.registerPreviewTemplate('music', MusicPagePreview)
CMS.registerPreviewTemplate('music-tim-shia-bio', SimplePagePreview)
CMS.registerPreviewTemplate('music-tim-shia-services', SimplePagePreview)
CMS.registerPreviewTemplate('music-tim-shia-music', SimplePagePreview)
CMS.registerPreviewTemplate('music-jazz-4-jrs-overview', SimplePagePreview)
CMS.registerPreviewTemplate('music-jazz-4-jrs-testimonials', PressPagePreview)
CMS.registerPreviewTemplate('music-jazz-4-jrs-curriculum', SimplePagePreview)
CMS.registerPreviewTemplate('music-jazz-4-jrs-video', VideoPagePreview)
CMS.registerPreviewTemplate('music-wpbe-about', PressPagePreview)
CMS.registerPreviewTemplate('music-wpbe-visuals', WpbeVisualsPagePreview)

CMS.registerPreviewStyle(styles.toString(), { raw: true });
