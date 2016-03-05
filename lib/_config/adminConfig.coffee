@AdminConfig =
  name: Config.name
  adminEmails: ['dakarpt@gmail.com']
#  collections:
#    Posts:
#      color: 'red'
#      icon: 'pencil'
#      extraFields: ['owner']
#      tableColumns: [
#        {label: 'Title', name: 'title'}
#        {label: 'User', name: 'author()', template: 'adminUserCell'}
#      ]
#    Comments:
#      color: 'green'
#      icon: 'comments'
#      extraFields: ['doc', 'owner']
#      tableColumns: [
#        {label: 'Content', name: 'content'}
#        {label: 'Post', name: 'docTitle()', template: 'adminPostCell'}
#        {label: 'User', name: 'author()', template: 'adminUserCell'}
#      ]
#      children: [
#        {
#          find: (comment) ->
#            Posts.find comment.doc, limit: 1
#        }
#        {
#          find: (comment) ->
#            Meteor.users.find comment.owner, limit: 1
#        }
#      ]
#    Notifications:
#      color: 'blue'
#      icon: 'pencil'
#      extraFields: ['doc','owner','from']
#      tableColumns: [
#        {label: 'Title', name: 'title'}
#        {label: 'From', name: 'from'}
#        {label: 'To', name: 'to'}
#        {label: 'Msg', name: 'message'}
#      ]
#    Messages:
#      color: 'yellow'
#      icon: 'comments'
#      extraFields: ['userId']
#      tableColumns: [
#        {label: 'Mensagem', name: 'message'}
#        {label: 'Time', name: 'time'}
#      ]
#    Processos:
#      color: 'red'
#      icon: 'pencil'
#      extraFields: ['id']
#      tableColumns: [
#        {label: 'Nome', name: 'name'}
#        {label: 'Status', name: 'status'}
#        {label: 'Macro', name: 'macro'}
#        {label: 'Processo Macro', name: 'macro_nome'}
#        {label: 'Time', name: 'timestamp'}
#      ]
#    LogMessages:
#      color: 'yellow'
#      icon: 'pencil'
#      extraFields: ['processoOwner']
#      tableColumns: [
#        {label: 'Data/hora', name: 'timestamp'}
#        {label: 'Processo', name: 'processo'}
#        {label: 'Antes', name: 'oldstatus'}
#        {label: 'Depois', name: 'newstatus'}
#        {label: 'Mensagem', name: 'message'}
#      ]
  dashboard:
    homeUrl: '/listItems'
  autoForm:
    omitFields: ['createdAt', 'updatedAt']
