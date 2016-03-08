@items = new Meteor.Collection('items');

#@tarefas = new Meteor.Collection('tarefas');
#@subtarefas = new Meteor.Collection('subtarefas');

Schemas.Myslots = new SimpleSchema

  ids:
    type: String
    optional: false
    regEx: SimpleSchema.RegEx.Id
    autoValue: ->
      if @isInsert
        Random.id()
      else if @isUpdate && (@isSet == false)
        Random.id()
    autoform:
      type: 'hidden'
  num:
    type: Number
    optional: false

  owner:
    type: String
    optional: false
#    regEx: SimpleSchema.RegEx.Id
#    autoValue: ->
#      if this.isInsert
#        "empty"
#      else if @isUpdate
#        Meteor.userId()
#    autoform:
#      type: 'hidden'

#  "url":
#    type: String
#    optional: true
#    autoValue: ->
#      if this.isInsert
#        "empty.png"
#    autoform:
#      type: 'hidden'

  timestamp:
    type: Date
    optional: false
#    autoValue: ->
#      if this.isUpdate || this.isInsert
#        new Date()
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
    optional: true
    autoform:
      type: 'hidden'

  descricao:
    type: String
    optional: false
    autoform: {
      rows: 5
    }
  tipo:
    type: String
    optional: false
    allowedValues: [
      "Mao-de-obra"
      "Material"
      "Donativos"
      "Donativos-sms"
      "Servicos"
    ]

  duracao:
    type: Number
    optional: false
    label: "Quantidade"
    min: 1
    max: 50
    autoform: {
      cols: 1
    }

  unidade:
    type: String
    optional: true
    label: "Unidade (ex. um euro)"

#  smsengine:
#    type: Boolean
#    optional: true
#    label: "Donativos por sms"
#    autoform:
#      type: 'hidden'
#        if (@field('tipo') != "Donativos")
#          console.log("AutoFORM smsengine",@field('tipo'))
#          'hidden'

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
      if @isInsert
        "Inicial"
#      else if @isUpdate && (@isSet == false)
#        "Inicial"
    autoform:
      type: 'hidden'

  slots:
    type: Array
    optional: false
    label: "Slots"
    autoform:
      type: 'hidden'

  "slots.$":
    type: Schemas.Myslots
    optional: true
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
#
#  slots:
#    type: [Object]
#    optional: true
#    label: "Slots"
##      autoValue: ->
##        console.log "Slots", this
#    autoform:
#      type: 'hidden'
#
#  "slots.$":
#    type: Object
#    optional: true
#
#  "slots.$.num":
#    type: Number
#    optional: true
#
#  "slots.$.ids":
#    type: String
#    optional: true
#
#  "slots.$.owner":
#    type: String
#    optional: true
#
#  "slots.$.timestamp":
#    type: Date
#    optional: true

#  slots:
#    type: [String]
#    optional: true
#    autoValue: ->
##      console.log "Slots", this
#      if @isInsert
#        console.log "Inserting"
#        res = []
#        f = 1
#        while f <= @siblingField("duracao").value
#          res.push "/" + @siblingField("tipo").value+"-empty.png"
#          f++
#        res
#      else if @isUpdate && (@isSet == false)
##        $set: ->
#        console.log "Upserting"
#        res = []
#        f = 1
#        while f <= @siblingField("duracao").value
#          res.push "/" + @siblingField("tipo").value+"-empty.png"
#          f++
##        $set: res
#        res
#    autoform:
#      type: 'hidden'

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
    autoform: {
      rows: 5
    }

  picture:
    type: String
    optional: false
    autoform:
      afFieldInput:
        type: 'fileUpload'
        collection: 'Attachments'
        selectFileBtnTemplate: 'mySelectFileBtn'
        removeFileBtnTemplate: 'myRemoveFileBtn'
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

