export default function deleteCandidateApi($http, appConfig, $q, $mdDialog, getFromApi) {
"ngInject";
let deferObject,
    getApi = {
    del: (id, ev, name)=> {
      let confirm = $mdDialog.confirm()
            .title('Chcesz usunąć użytkownika '+name+'?')
            .ariaLabel('Usuwanie użytkownika '+name)
            .targetEvent(ev)
            .ok('Tak')
            .cancel('Nie');
      $mdDialog.show(confirm).then(()=> {
        let getapi = $http.delete(appConfig.apiUrl+'/users/'+id);
        getapi.then(
          (response)=> {
            console.log("response", response);
            getFromApi.getPromise('/users');
          }
        );
      });
      return confirm;
    }
  };
  return getApi;
}
