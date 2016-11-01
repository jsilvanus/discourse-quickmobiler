import Preferences from 'discourse/controllers/preferences';
import { withPluginApi } from 'discourse/lib/plugin-api';

function showQuickmobiler(api) {
  api.decorateWidget('header-icons:before', helper => {

    const currentUser = api.getCurrentUser();
    const siteSettings = Discourse.SiteSettings;

    if(currentUser) {
      const quickmobilerType = currentUser.get('custom_fields.quickmobiler');
      // const siteHref = HOW TO GET THE BASIC URL?

      var quickmobilerStyle = "a#home-button"
      var quickmobilerHref = "https://www.starwarshorizons.com"
      var quickmobilerTitle = "Home"
      var quickmobilerIcon = "i.fa.fa-home.home-button-icon"

      switch (quickmobilerTye) {
        case "unread": break;
	case "latest": break;
        case "top": break;
        default: case "none": 
      }

      return helper.h('li', [
        helper.h(quickmobilerStyle, {
          href: quickmobilerHref,
          title: quickmobilerTitle
       }, helper.h(quickmobilerIcon)),
      ]);
    }
  });
}

export default {
  name: 'extend-for-quickmobiler',
  initialize(container) {
    const siteSettings = container.lookup('site-settings:main');
    if (siteSettings.quickmobiler_enabled) {
      withPluginApi('0.4', showQuickmobiler);

      Preferences.reopen({
        quickmobilerEnabled: function() {
          return Discourse.SiteSettings.quickmobiler_enabled;
        }.property(),
        quickmobilerAlltypes: function() {
          return ["none", "latest", "unread", "top"];
        }.property(),
      });
    }
  }
};
