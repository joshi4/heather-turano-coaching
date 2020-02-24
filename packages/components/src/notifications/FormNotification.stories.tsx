import React from "react";

import { FormNotification } from "./FormNotification";

export default {
  component: FormNotification,
  title: "Basic|Notifications/Form Notification"
};

export const success = () => (
  <FormNotification type="success">We did it!</FormNotification>
);
export const successLong = () => (
  <FormNotification type="success">
    We did it! Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
    auctor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
  </FormNotification>
);
export const error = () => (
  <FormNotification type="error">We blew it!</FormNotification>
);
export const errorLong = () => (
  <FormNotification type="error">
    We blew it! Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
    auctor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
  </FormNotification>
);
export const warning = () => (
  <FormNotification type="warning">We blew it!</FormNotification>
);
export const warningLong = () => (
  <FormNotification type="warning">
    We blew it! Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
    auctor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
  </FormNotification>
);
