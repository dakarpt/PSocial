AutoForm.hooks insertItemForm:
  onSuccess: (formType, result)->
    if (result)
      history.back()