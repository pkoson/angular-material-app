export default class SideNavCtrl {
  constructor($location) {
    this.location = $location;
  }
  goToUrl(path) {
    this.location.path(path);
  }
}
