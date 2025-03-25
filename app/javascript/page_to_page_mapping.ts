import SubjectsNew from '@views/subjects/new'
import SubjectsShow from '@views/subjects/show'
import SubjectsEdit from '@views/subjects/edit'
import SubjectsIndex from '@views/subjects/index'
// import your page component #todo fix output of new lines
// e.g import PostsEdit from '../views/posts/edit'

// Mapping between your props template to Component, you must add to this
// to register any new page level component you create. If you are using the
// scaffold, it will auto append the identifers for you.
//
// For example:
//
// const pageIdentifierToPageComponent =  {
//   'posts/new': PostNew
// };
//
//
// If you are using a build tool that supports globbing, you can automatically
// populate `pageIdentiferToPageComponent`. For example, if you are using vite,
// you can use the following snippet instead of manually importing.
//
// ```
// const pageIdentifierToPageComponent = {}
// const pages = import.meta.glob('../views/**/*.tsx', {eager: true})
//
// for (const key in pages) {
//   if (pages.hasOwnProperty(key)) {
//     const identifier = key.replace("../views/", "").split('.')[0];
//     pageIdentifierToPageComponent[identifier] = pages[key].default;
//   }
// }
// ```
//
const pageIdentifierToPageComponent = {
  'subjects/new': SubjectsNew,
  'subjects/show': SubjectsShow,
  'subjects/edit': SubjectsEdit,
  'subjects/index': SubjectsIndex,
};

export { pageIdentifierToPageComponent }
