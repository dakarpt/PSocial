#@Processos = new Meteor.Collection('Processos');
#
#Schemas.Processos = new SimpleSchema
#  estado:
#    type:String
#    optional:true
#
#  name:
#    type: String
#
#  observacoes:
#    type: String
#    optional:true
#
#  status:
#    type: String
#
#  macro:
#    type: Number
#    optional:true
#
#  macro_nome:
#      type: String
#      optional:true
#
#  timestamp:
#    type: Date
#    optional:true
#    autoValue: ->
#      if this.isInsert || this.isUpdate
#        new Date()
#
#Processos.attachSchema(Schemas.Processos)
