@items = new Meteor.Collection('items');
#@tarefas = new Meteor.Collection('tarefas');
#@subtarefas = new Meteor.Collection('subtarefas');

Schemas.Myslots = new SimpleSchema

  ids:
    type: String
    optional: true
    regEx: SimpleSchema.RegEx.Id
    autoValue: ->
      if @isInsert
        Random.id()
      else if @isUpdate && (@isSet == false)
        Random.id()
    autoform:
      type: 'hidden'

  owner:
    type: String
    optional: false
    regEx: SimpleSchema.RegEx.Id
    autoValue: ->
      if this.isInsert
        "empty"
      else if @isUpdate
        Meteor.userId()
    autoform:
      type: 'hidden'

  "url":
    type: String
    optional: true
    autoValue: ->
      if this.isInsert
        "empty.png"
    autoform:
      type: 'hidden'

  "timestamp":
    type: Date
    optional: true
    autoValue: ->
      if this.isUpdate || this.isInsert
        new Date()
    autoform:
      type: 'hidden'

Schemas.subtarefas = new SimpleSchema
#  tarefa:
#    type: String
#    regEx: SimpleSchema.RegEx.Id
  ids:
    type: String
    optional: true
    regEx: SimpleSchema.RegEx.Id
    autoValue: ->
      if @isInsert
        Random.id()
      else if @isUpdate && (@isSet == false)
        Random.id()
    autoform:
      type: 'hidden'

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
      "Bens"
      "Donativos"
      "Serviços"
    ]

  duracao:
    type: Number
    optional: false

  estado:
    type: String
    optional: true
    allowedValues: [
      "Inicial"
      "Em curso"
      "Pendente"
      "Concluído"
    ]
    autoValue: ->
      if this.isInsert
        "Inicial"
    autoform:
      type: 'hidden'

  slots:
    type: [String]
    optional: true
    autoValue: ->
      console.log "Slots", this
      if @isInsert
        console.log "Inserting"
        res = []
        f = 1
        while f <= @siblingField("duracao").value
          res.push "empty.png"
          f++
        res
      else if @isUpdate && (@isSet == false)
#        $set: ->
        console.log "Upserting"
        res = []
        f = 1
        while f <= @siblingField("duracao").value
          res.push "empty.png"
          f++
#        $set: res
        res
    autoform:
      type: 'hidden'

#      else if @isUpsert
#        $setOnInsert: "Inicial"
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
    optional: false
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
      if @isInsert
        "incial"
    autoform:
      type: 'hidden'

  createdAt:
    type: Date
    optional: true
    autoValue: ->
      if this.isInsert
        new Date()
    autoform:
      type: 'hidden'

  timestamp:
    type: Date
    optional: true
    autoValue: ->
      if this.isUpdate || this.isInsert
        new Date()
    autoform:
      type: 'hidden'

  duracao:
    type: Number
    optional: true
    autoform:
      type: 'hidden'

  datainicio:
    type: Date
    label: "Data de início"
    optional: true
    autoValue: ->
      if this.isInsert
        new Date()

  owner:
    type: String
    optional: false
    regEx: SimpleSchema.RegEx.Id
    autoValue: ->
      if this.isInsert
        Meteor.userId()
    autoform:
      type: 'hidden'

  subtarefas:
    type: Array
    optional: true
    label: "Tarefas"

  "subtarefas.$":
    type: Schemas.subtarefas
    optional: true

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

