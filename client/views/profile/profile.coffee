AutoForm.debug()

AutoForm.hooks
  insertItemForm:
    onSuccess: (formType, result)->
      if (result)
        history.back()
  insertNotificationForm:
    onSuccess: (formType, result)->
      if (result)
        history.back()
  updateProfile:
#    before: (doc) ->
#      console.log("Before update", doc)
#      if ((!doc.profile.ranking) && (doc.profile.firstName))
#        rank = Utils.getRanking(doc.profile.firstName)
#        doc.profile.ranking=rank;
##        user = Meteor.users.findOne({ _id: this.currentDoc._id})
#        #        Meteor.users.update({ _id: this.currentDoc._id}, { "profile.ranking": rank })
##          this.updateDoc.$set["profile.ranking"] = rank
##          delete(this.updateDoc.$unset["profile.ranking"])
#        console.log("Profile updated Ranking:", rank);
#      this.result(doc)

    onSuccess: (operation, result, template) ->
#      console.log("Profile updated:", this);
      sAlert.success 'Perfil atualizado!',
        timeout: 3000,
        onRouteClose: false
#        onClose: ()->
      history.back()

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