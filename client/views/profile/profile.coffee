AutoForm.debug()

AutoForm.hooks
  updateProfile:
    onSuccess: (operation, result, template) ->
#      console.log("Profile updated:", this);
#      sAlert.success 'Perfil atualizado!',
#        timeout: 3000,
#        onRouteClose: false
##        onClose: ()->
#      history.back()

    onError: (operation, error, template) ->
      sAlert.error error

  updatePicture:
    onSuccess: (operation, result, template) ->
      console.log 'Imagem atualizada'
#      sAlert.success 'Imagem atualizada'
    onError: (operation, error, template) ->
      sAlert.error error

# Autoupdate form
# Autoform's autosave="true" wasn't working
#Template.profile.events
#  'change form#updatePicture input': (e, t) ->
#    Meteor.setTimeout ->
#      $('form#updatePicture').submit()
#    , 100