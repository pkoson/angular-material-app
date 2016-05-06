export default class AddNewCtrl {
  constructor($scope, $mdDialog, $mdMedia, appConfig, Upload, $timeout) {
    let vm = this,
        imageStatus = false;
    vm.imageStatus = imageStatus;
    vm.$scope = $scope;
    vm.$mdDialog = $mdDialog;
    vm.languages = [];
    vm.currencies = appConfig.currencies;
    vm.contract = appConfig.contract;
    vm.$scope.cancel = ()=> {
      vm.$mdDialog.cancel();
    };


    $scope.uploadFiles = (file, errFiles) => {
        $scope.f = file;
        $scope.errFile = errFiles && errFiles[0];
        if (file) {
            file.upload = Upload.upload({
                url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
                data: {file: file}
            });

            file.upload.then( (response) => {
                this.imageStatus = true;
                $timeout(function () {
                    file.result = response.data;
                });
            }, function (response) {
                if (response.status > 0)
                    $scope.errorMsg = response.status + ': ' + response.data;
            }, function (evt) {
                file.progress = Math.min(100, parseInt(100.0 *
                                         evt.loaded / evt.total));
            });
        }
    };

  }
}
