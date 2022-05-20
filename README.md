[![Netlify Status](https://api.netlify.com/api/v1/badges/1aaa9905-0a2e-4d25-acd2-a6decbd40334/deploy-status)](https://app.netlify.com/sites/effulgent-meringue-6f5cb7/deploys)

# Structure

ppfhouse.com (splash page)  
&rdsh; about  
&rdsh; animation  
&rdsh; art-design  
&rdsh; comics  
&rdsh; contact  
&rdsh; events  
&rdsh; film-tv-scoring  
&rdsh; jazz-4-jrs  
&nbsp; &rdsh; overview (index)  
&nbsp; &rdsh; testimonials  
&nbsp; &rdsh; curriculum  
&nbsp; &rdsh; video  
&rdsh; music  
&rdsh; news-events  
&rdsh; tim-shia  
&nbsp; &rdsh; bio (index)  
&nbsp; &rdsh; live-music-and-dj-services  
&nbsp; &rdsh; music  
&rdsh; wpbe  
&nbsp; &rdsh; blackout (index)  
&nbsp; &rdsh; about  
&nbsp; &rdsh; epk-stage-plot (not editable)  
&nbsp; &rdsh; music  
&nbsp; &rdsh; news-shows (feed of WPBE News and Events content types)  
&nbsp; &rdsh; visuals

# Content management

Content is managed using Netlify CMS (content management system). Its capabilities are sufficient, but there may be missing functions making content management awkward.

The content previews do not use the PPF House styles, but use some basic styles that should be representative.

The data structure of collections and pages is fully customizable, but some conventions have been employed with similar content types.

## Collections

Collections are either groups of pages (Tim Shia, WPBE) or content types (News, Events).

With content types, separate pages are created for each entry, providing unique URLs. You will be able to provide a link to a specific News Item or Event.

## Pages

Most pages within the site are editable in the CMS. The WPBE Blackout and EPK pages are custom layouts. The editing page configurations are specific to the page type, but related types use consistent components.

Sidebar navigation menus are not editable. They are hard-coded and do not depend on nor necessarily reflect any part of the CMS.

# Server

The site is served through cloud-based service, Netlify. The service provides a function for translating the Netlify service endpoint ([effulgent-meringue-6f5cb7](https://effulgent-meringue-6f5cb7.netlify.app/)) to the preferred domain name, [ppfhouse.com](https://www.ppfhouse.com).

# Static site generation

The site uses [GatsbyJS](https://www.gatsbyjs.com/) to build static pages using [React](https://reactjs.org/) components. The build process compiles the plain text files from the CMS into pages with specific components to render the different elements of the page.

The components are entirely customizable. The layout and style was copied from the previous PPF House.
