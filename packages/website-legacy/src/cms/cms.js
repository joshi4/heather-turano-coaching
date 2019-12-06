import CMS from "netlify-cms";

import HomePagePreview from "./preview-templates/HomePagePreview";
import AboutPagePreview from "./preview-templates/AboutPagePreview";
import ContactPagePreview from "./preview-templates/ContactPagePreview";
import WorkWithMePagePreview from "./preview-templates/WorkWithMePagePreview";
import BlogPagePreview from "./preview-templates/BlogPagePreview";
import BlogPostPagePreview from "./preview-templates/BlogPostPagePreview";

CMS.registerPreviewTemplate("home", HomePagePreview);
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("contact", ContactPagePreview);
CMS.registerPreviewTemplate("work-with-me", WorkWithMePagePreview);
CMS.registerPreviewTemplate("blog", BlogPagePreview);
CMS.registerPreviewTemplate("blog-post", BlogPostPagePreview);
