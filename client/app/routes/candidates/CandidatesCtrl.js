export default class CandidatesCtrl {
  constructor($http, $location, appConfig) {
    this.$http = $http;
    this.appConfig = appConfig;
    this.getCandidates();
  }

  getCandidates(){
    this.$http
      .get(this.appConfig.apiUrl+'/users')
      .then((response) => {
        this.candidates = response.data;
        return  this.candidates;
      });
  }
}
