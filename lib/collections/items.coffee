@items = new Meteor.Collection('items');
#@tarefas = new Meteor.Collection('tarefas');
#@subtarefas = new Meteor.Collection('subtarefas');

Schemas.Myslots = new SimpleSchema

  "owner":
    type: String
    optional: true
    autoValue: ->
      "empty"

  "createAt":
    optional: true
    type: Date
    autoValue: ->
      if this.isInsert
        new Date()

  "timestamp":
    type: Date
    optional: true
    autoValue: ->
      if this.isUpdate || this.isInsert
        new Date()

Schemas.subtarefas = new SimpleSchema
#  tarefa:
#    type: String
#    regEx: SimpleSchema.RegEx.Id
  _id:
    type: String
    optional: false
    regEx: SimpleSchema.RegEx.Id
    autoValue: ->
      if this.isInsert
        Random.id()

  nome:
    type: String
    optional: false

  descricao:
    type: String
    optional: false

  tipo:
    type: String
    optional: false
    allowedValues: [
      "Mão de obra"
      "Material"
      "Serviços"
    ]

  duracao:
    type: Number
    optional: true

  estado:
    type: String
    optional: false
    allowedValues: [
      "Inicial"
      "Em curso"
      "Pendente"
      "Concluído"
    ]
    autoValue: ->
      if this.isInsert
        "Inicial"

  slots:
    type: [String]
    optional: true
    autoValue: ->
      res = []
      f = 0
      while f <= @siblingField("duracao").value
        res.push "empty.png"
        f++
      res

#      ['empty', 'empty', 'empty', 'empty', 'empty']
#      ["hello", owner: Meteor.userId() }]

#  "slots.$":
#    type: [Object]
#    optional: true
#
#  "slots.$.n":
#    type: Number
#    optional: true

#
#  "slots.$.owner":
#    type: String
#    optional: true
#    autoValue: ->
#      "empty"
#
#  "slots.$.createAt":
#    optional: true
#    type: Date
#    autoValue: ->
#      if this.isInsert
#        new Date()
#
#  "slots.$.timestamp":
#    type: Date
#    optional:true
#    autoValue: ->
#      if this.isUpdate || this.isInsert
#        new Date()

#subtarefas.attachSchema(Schemas.subtarefas)

#Schemas.tarefas = new SimpleSchema
#
#  nome:
#    type: String
#    optional:false
#
#  descricao:
#    type: String
#    optional:false
#
#  subtarefas:
#    type: Array
#    optional: true
#
#  "subtarefas.$":
#    type: Schemas.subtarefas
#
#tarefas.attachSchema(Schemas.tarefas)

Schemas.items = new SimpleSchema
  nome:
    type: String
    optional: false

  descricao:
    type: String
    optional: false

  picture:
    type: String
    autoform:
      afFieldInput:
        type: 'fileUpload'
        collection: 'Attachments'
        onAfterInsert: ->
          (err, fileObj) ->
            if err
              alert 'Error'

  estado:
    type: String
    optional: true
    autoValue: ->
      if this.isInsert
        "incial"

  createdAt:
    type: Date
    optional: true
    autoValue: ->
      if this.isInsert
        new Date()

  timestamp:
    type: Date
    optional: true
    autoValue: ->
      if this.isUpdate || this.isInsert
        new Date()

  duracao:
    type: Number
    optional: true

  datainicio:
    type: Date
    label: "Data de início"
    optional: true

  owner:
    type: String
    optional: false
    regEx: SimpleSchema.RegEx.Id
    autoValue: ->
      if this.isInsert
        Meteor.userId()

  subtarefas:
    type: Array
    optional: true
    label: "Tarefas"

  "subtarefas.$":
    type: Schemas.subtarefas
    optional: false

#  "tarefas.$.nome":
#    type: String
#    optional: false
#
#  "tarefas.$.descricao":
#    type: String
#    optional: false
#
#  "tarefas.$.tipo"
#    type: String
#    optional: false
#    allowedValues: [
#      "Mão de obra"
#      "Bens"
#      "Serviços"
#    ]
#
#  "tarefas.$.subtarefas"
#    type: Array
#    optional: true
#
#  "tarefas.$.subtarefas.$"
#    type: [Object]
#    optional: true
#
#  "tarefas.$.subtarefas.$.nome":
#    type: String
#    optional: false
#
#  "tarefas.$.subtarefas.$.estado":
#    type: String
#    optional: true
#    autoValue: ->
#      if this.isInsert
#        "incial"
#
#  "tarefas.$.subtarefas.$.descricao":
#    type: String
#    optional: false
#
#  "tarefas.$.subtarefas.$.tipo":
#    type: String
#    optional: false
#    allowedValues: [
#      "Mão de obra"
#      "Bens"
#      "Serviços"
#    ]
#
#  "tarefas.$.subtarefas.$.atribuida":
#    type: String
#    optional: true

items.attachSchema(Schemas.items)

