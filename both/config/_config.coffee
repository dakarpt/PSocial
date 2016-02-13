@Config =
  name: 'Portal'
  title: ->
    TAPi18n.__ 'configTitle'
  subtitle: ->
    TAPi18n.__ 'configSubtitle'
  logo: ->
    '<b>' + @name + '</b>'
  footer: ->
    @name + ' - Copyright ' + new Date().getFullYear()
  emails:
    from: 'noreply@' + Meteor.absoluteUrl()
  blog: ''
  about: ''
  username: false
  homeRoute: '/'
  socialMedia:
    [
      ['https://github.com/dakarpt', 'github']
    ]

Avatar.setOptions
  fallbackType: "initials"
  defaultImageUrl: "img/default-avatar.png"

Meteor.startup ->
  if Meteor.isClient

    Session.set("showLoadingIndicator", true)
    if (Session.get("language"))
      T9n.setLanguage(Session.get("language"))
    else
      T9n.setLanguage('pt')
      Session.set("language", 'pt')

