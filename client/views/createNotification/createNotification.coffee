AutoForm.hooks  insertNotificationForm:
  onSuccess: (formType, result)->
    if (result)
      history.back()