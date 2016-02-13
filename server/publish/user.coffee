Meteor.publishComposite 'user', ->
  find: ->
    Meteor.users.find _id: @userId
  children: [
    find: (user) ->
      _id = user.profile?.picture or null
      ProfilePictures.find _id: _id
  ]

#Meteor.publishComposite 'myitems', ->
#  find: ->
#    Meteor.items.find
#  children: [
#    find: (items) ->
#      if (!items)
#        return
#      tarefas.find item: items._id
#    children: [
#        find: (tarefas) ->
#          if (!tarefas)
#            return
#        subtarefas.find tarefa: tarefas._id
#      ]
#  ]
