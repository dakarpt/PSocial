@NCSchemas = {}

NCSchemas.updatePassword = new SimpleSchema
  old:
    type: String
    label: "Current Password"
    max: 50
    label: ->
      TAPi18n.__("Current_pw")

  new:
    type: String
    min: 6
    max: 20
    label: "New Password"
    label: ->
      TAPi18n.__("New_pw")

  confirm:
    type: String
    min: 6
    max: 20
    label: "Confirm new Password"
    label: ->
      TAPi18n.__("Confirm_pw")