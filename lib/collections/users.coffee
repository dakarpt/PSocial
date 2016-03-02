Schemas.UserProfile = new SimpleSchema(

  picture:
    type: String
    optional: true
    label: ->
      TAPi18n.__("p_Imagem")
    autoform:
      afFieldInput:
        type: 'fileUpload'
        collection: 'ProfilePictures'
        selectFileBtnTemplate: 'mySelectFileBtn'
        removeFileBtnTemplate: 'myRemoveFileBtn'
        label: ->
          TAPi18n.__("p_choose_file")
#        onBeforeInsert: ->
#          (fileObj) ->
#            fileObj.owner = Meteor.userId()
#            fileObj.name = 'picture.png'
#            fileObj
#            console.log HandleResize(fileObj)
#            HandleResize(fileObj)
#            console.log res
#            @res

  firstName:
    type: String
    optional: true
    label: ->
      TAPi18n.__("p_First_Name")

  lastName:
    type: String
    optional: true
    label: ->
      TAPi18n.__("p_Last_Name")

  mobile:
    type: String
    optional: true
    label: "Telemóvel"

  ranking:
    type: Number
    optional: true
    min: 0
    max: 5
    autoform:
      type: 'hidden'

  morada:
    type: String
    optional: true
    autoform: {
      rows: 2
    }

  birthday:
    type: Date
    optional: true
    label: ->
      TAPi18n.__("p_Birthday")

  bio:
    type: String
    optional: true
    autoform:
      rows: 4
    label: ->
      TAPi18n.__("p_Bio")

  location:
    type: String
    optional: true
    autoform:
      type: 'map'
      geolocation: true
      searchBox: true
      autolocate: true
    label: ->
      TAPi18n.__("p_Location")

  country:
    type: String
    label: 'Nationality'
    allowedValues: [
      "Select Country"
      "Afghanistan"
      "Albania"
      "Algeria"
      "Andorra"
      "Angola"
      "Anguilla"
      "Antigua & Barbuda"
      "Argentina"
      "Armenia"
      "Aruba"
      "Australia"
      "Austria"
      "Azerbaijan"
      "Bahamas"
      "Bahrain"
      "Bangladesh"
      "Barbados"
      "Belarus"
      "Belgium"
      "Belize"
      "Benin"
      "Bermuda"
      "Bhutan"
      "Bolivia"
      "Bosnia & Herzegovina"
      "Botswana"
      "Brazil"
      "British Virgin Islands"
      "Brunei"
      "Bulgaria"
      "Burkina Faso"
      "Burundi"
      "Cambodia"
      "Cameroon"
      "Cape Verde"
      "Cayman Islands"
      "Chad"
      "Chile"
      "China"
      "Colombia"
      "Congo"
      "Cook Islands"
      "Costa Rica"
      "Cote D Ivoire"
      "Croatia"
      "Cruise Ship"
      "Cuba"
      "Cyprus"
      "Czech Republic"
      "Denmark"
      "Djibouti"
      "Dominica"
      "Dominican Republic"
      "Ecuador"
      "Egypt"
      "El Salvador"
      "Equatorial Guinea"
      "Estonia"
      "Ethiopia"
      "Falkland Islands"
      "Faroe Islands"
      "Fiji"
      "Finland"
      "France"
      "French Polynesia"
      "French West Indies"
      "Gabon"
      "Gambia"
      "Georgia"
      "Germany"
      "Ghana"
      "Gibraltar"
      "Greece"
      "Greenland"
      "Grenada"
      "Guam"
      "Guatemala"
      "Guernsey"
      "Guinea"
      "Guinea Bissau"
      "Guyana"
      "Haiti"
      "Honduras"
      "Hong Kong"
      "Hungary"
      "Iceland"
      "India"
      "Indonesia"
      "Iran"
      "Iraq"
      "Ireland"
      "Isle of Man"
      "Israel"
      "Italy"
      "Jamaica"
      "Japan"
      "Jersey"
      "Jordan"
      "Kazakhstan"
      "Kenya"
      "Kuwait"
      "Kyrgyz Republic"
      "Laos"
      "Latvia"
      "Lebanon"
      "Lesotho"
      "Liberia"
      "Libya"
      "Liechtenstein"
      "Lithuania"
      "Luxembourg"
      "Macau"
      "Macedonia"
      "Madagascar"
      "Malawi"
      "Malaysia"
      "Maldives"
      "Mali"
      "Malta"
      "Mauritania"
      "Mauritius"
      "Mexico"
      "Moldova"
      "Monaco"
      "Mongolia"
      "Montenegro"
      "Montserrat"
      "Morocco"
      "Mozambique"
      "Namibia"
      "Nepal"
      "Netherlands"
      "Netherlands Antilles"
      "New Caledonia"
      "New Zealand"
      "Nicaragua"
      "Niger"
      "Nigeria"
      "Norway"
      "Oman"
      "Pakistan"
      "Palestine"
      "Panama"
      "Papua New Guinea"
      "Paraguay"
      "Peru"
      "Philippines"
      "Poland"
      "Portugal"
      "Puerto Rico"
      "Qatar"
      "Reunion"
      "Romania"
      "Russia"
      "Rwanda"
      "Saint Pierre & Miquelon"
      "Samoa"
      "San Marino"
      "Satellite"
      "Saudi Arabia"
      "Senegal"
      "Serbia"
      "Seychelles"
      "Sierra Leone"
      "Singapore"
      "Slovakia"
      "Slovenia"
      "South Africa"
      "South Korea"
      "Spain"
      "Sri Lanka"
      "St Kitts & Nevis"
      "St Lucia"
      "St Vincent"
      "St. Lucia"
      "Sudan"
      "Suriname"
      "Swaziland"
      "Sweden"
      "Switzerland"
      "Syria"
      "Taiwan"
      "Tajikistan"
      "Tanzania"
      "Thailand"
      "Timor L'Este"
      "Togo"
      "Tonga"
      "Trinidad & Tobago"
      "Tunisia"
      "Turkey"
      "Turkmenistan"
      "Turks & Caicos"
      "Uganda"
      "Ukraine"
      "United Arab Emirates"
      "United Kingdom"
      "United States"
      "Uruguay"
      "Uzbekistan"
      "Venezuela"
      "Vietnam"
      "Virgin Islands (US)"
      "Yemen"
      "Zambia"
      "Zimbabwe"
    ]
    optional: true
    label: ->
      TAPi18n.__("p_Country")
)

Schemas.User = new SimpleSchema(
  username:
    type: String
    regEx: /^[a-z0-9A-Z_]{3,15}$/
    optional: true

  emails:
    type: [Object]
    optional: true

  "emails.$.address":
    type: String
    regEx: SimpleSchema.RegEx.Email

  "emails.$.verified":
    type: Boolean

  createdAt:
    type: Date

  profile:
    type: Schemas.UserProfile
    optional: true
    label: ->
      TAPi18n.__("profile")

  services:
    type: Object
    optional: true
    blackbox: true

  roles:
    type: [String]
    blackbox: true
    optional: true

  status:
    type: String
    optional: true

  statusConnection:
    type: String
    optional: true

  statusDefault:
    type: String
    optional: true
)

Meteor.users.attachSchema Schemas.User

# Export schemas
@StarterSchemas = Schemas
