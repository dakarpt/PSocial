#Router.map ->
#  @route 'notifications',
#    path: '/notifications',
#    waitOn: ->
#      [
#        subs.subscribe 'userData'
#        subs.subscribe 'notifications'
#      ]
#  @route 'messages',
#    path: '/messages/:_id',
#    layout: 'notifications'
#    waitOn: ->
#      [
#        subs.subscribe 'userData'
#        subs.subscribe 'notifications'
#      ]