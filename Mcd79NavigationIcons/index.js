
var App = require('ghost-app'),

    Mcd79NavigationIcons;

Mcd79NavigationIcons = App.extend({

    install: function () {},

    uninstall: function () {},

    activate: function () {
    console.log('Mcd79NavigationIcons: activate()');
    this.app.helpers.register('navIcon', this.handleNavIcon);
    },

    deactivate: function () {},

    handleNavIcon: function(link) {
        if (link.includes("twitter.com")) {
            return('icon-twitter-squared');
        } else if (link.includes("linkedin.com")) {
            return('icon-linkedin-squared');
        } else if (link.includes("github.com")) {
            return('icon-git-squared');
        } else if (link.includes("facebook.com")) {
            return('icon-facebook-squared');
        } else if (link.includes("rss")) {
            return('icon-rss-squared');
        } 
        else {
            return('icon-book');
        }
    }

});



module.exports = Mcd79NavigationIcons;