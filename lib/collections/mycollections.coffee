Meteor.subscribe('userPresence');


#@Instalacoes = new Meteor.Collection('Instalacoes');
#@Messages = new Meteor.Collection('messages');
#@LogMessages = new Meteor.Collection('LogMessages');
#
#Schemas.LogMessages = new SimpleSchema
#  processoOwner:
#    type: String
#    optional:true
#
#  processo:
#    type: String
#
#  message:
#    type: String
#
#  tipo:
#    type: String
#
#  newstatus:
#    type: String
#
#  oldstatus:
#    type: String
#
#  servidor:
#    type: String
#    optional: true
#
#  subscription:
#    type: String
#    optional: true
#
#  timestamp:
#    type: Date
#    optional:true
#    autoValue: ->
#      if this.isUpdate || this.isInsert
#        new Date()
#
#LogMessages.attachSchema(Schemas.LogMessages)
