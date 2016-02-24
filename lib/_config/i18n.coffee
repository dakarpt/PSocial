#Meteor.startup ->
#  if Meteor.isClient
##    T9n.setLanguage('PT2')
#    Session.set 'showLoadingIndicator', true
#    TAPi18n.setLanguage('pt').done(->
#      Session.set 'showLoadingIndicator', false
#      console.log "Done translation"
#      return
#    ).fail (error_message) ->
#      console.log error_message
#      return
#    return

Meteor.startup ->
  if Meteor.isClient
    TAPi18n.setLanguage('pt')
    T9n.setLanguage('pt')
    Session.set 'showLoadingIndicator', true
    TAPi18n.setLanguage('pt').done(->
      Session.set 'showLoadingIndicator', false
      console.log "Done translation"
      return
    ).fail (error_message) ->
      console.log error_message
      return
    return