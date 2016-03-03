# These values get propagated through the app
# E.g. The 'name' and 'subtitle' are used in seo.coffee

@Config =

# Basic Details
  name: 'Minha app'
  title: ->
    TAPi18n.__ 'configTitle'
  subtitle: ->
    TAPi18n.__ 'configSubtitle'
  logo: ->
    '<b>' + @name + '</b>'
  footer: ->
    @name + ' - Copyright ' + new Date().getFullYear()

# Emails
  emails:
    from: 'no-reply@' + Meteor.absoluteUrl()
    contact: 'hello' + Meteor.absoluteUrl()

# Username - if true, users are forced to set a username
  username: false

# Localisation
  defaultLanguage: 'pt'
  dateFormat: 'DD/MM/YYYY'

# Meta / Extenrnal content
  privacyUrl: 'http://meteorfactory.io'
  termsUrl: 'http://meteorfactory.io'

# For email footers
  legal:
    address: ''
    name: ''
    url: ''

  about: ''
  blog: ''

  socialMedia:
    facebook:
      url: ''
      icon: 'facebook'
    twitter:
      url: ''
      icon: 'twitter'
    github:
      url: 'https://github.com/dakarpt'
      icon: 'github'
    info:
      url: ''
      icon: 'link'

#Routes
  homeRoute: '/'
  publicRoutes: ['/','/smsfrontend']
  dashboardRoute: '/listItems'
  ReportRoute: '/report'
  MyNotificationsRoute: '/MyNotifications'