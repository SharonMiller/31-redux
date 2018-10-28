'use strict';

const categoryValidator = store => next => action => {
  const isCategory = action.type && action.type.startsWith('CATEGORY');

  if (isCategory) {
    try {
      const category = action.payload;
      let notValid = !category.title || !category.budget;
      if (notValid) {
        throw new Error('VALIDATION ERROR: category must include a name and budget')
      }

      return next(action);

    } catch (err) {
      console.error(err);
    }
  } else {
    return next(action);
  };
};

export default categoryValidator;