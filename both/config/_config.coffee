@Config =
  name: 'Portal'
  title: ->
    TAPi18n.__ 'configTitle'
  subtitle: ->
    TAPi18n.__ 'configSubtitle'
  logo: ->
    '<b>' + @name + '</b>'
  smsgtw:
    "967958021"
  smsengineInfo: ->
    "A sua contribuição fica a aguardar a receção de um SMS para o número: " + @smsgtw + ". Também poderá utilizar código QR no leitor do Telemóvel."
  normalInfo: ->
    "Na conclusão do projeto, será informado dos passos necessários para formalizar a sua contribuição."
  mobileInfo: ->
    "Para contribuir agora, utilize o botão ou poderá enviar mais tarde um SMS para o número: " + @smsgtw
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
  defaultImageUrl: "/default-profile.png"

#Meteor.startup ->
#  if Meteor.isClient
#
#    Session.set("showLoadingIndicator", true)
#    if (Session.get("language"))
#      T9n.setLanguage(Session.get("language"))
#    else
#      T9n.setLanguage('pt')
#      Session.set("language", 'pt')

