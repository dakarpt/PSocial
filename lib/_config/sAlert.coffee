Meteor.startup ->
  if Meteor.isClient
    sAlert.config
      effect: "stackslide"
      position: "top-right"
      timeout: 3000
      offset: '51px'
      html: false