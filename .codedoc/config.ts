
import { configuration } from '@codedoc/core';

import { theme } from './theme';


export const config = /*#__PURE__*/configuration({
  theme,                                  // --> add the theme. modify `./theme.ts` for chaning the theme.
  dest: {
  namespace: '/Android-Study-Jams',
  },
  page: {
    title: {
      base: 'Android Study Jams'          // --> the base title of your doc pages
    }
  },
  misc: {
    github: {
      user: 'beauwilliams',            // --> name of the user on GitHub owning the repo
      repo: 'Android-Study-Jams',         // --> name of the repo on GitHub
      action: 'Star',             // --> action of the GitHub button
      count: false,               // --> whether to show the `count` on the GitHub button
      large: true,                // --> whether to show a `large` GitHub button
      standardIcon: false,        // --> whether to use the GitHub icon on the GitHub button or use an action specific icon
    },
  },

});
