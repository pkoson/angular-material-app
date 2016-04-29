export default function authResponseInterceptor($q, $location) {
  return {
    responseError (rejection) {
      if (rejection.status === 401){
        $location.path('/login');
      }
      return $q.reject(rejection);
    }
  };
}