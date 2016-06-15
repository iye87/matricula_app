angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('MatricularCtrl', function($scope, $stateParams) {

if (localStorage.getItem('estudiantes-matricula')) {
    var matricula = JSON.parse(localStorage.getItem('estudiantes-matricula'));
    var id = matricula.length;
  } else {
    var matricula = [];
    var id = 1;
  }

    $scope.insertar = function(nombre,apellido,ci,telefono,grado,escuela,nombre_padre,telf_padre,nombre_madre,telf_madre){

      var estudiante={
        'id': id,
        'nombre': nombre,
        'apellidos': apellido,
        'ci': ci,
        'telefono': telefono,
        'grado': grado,
        'escuela': escuela,
        'nombre_padre': nombre_padre,
        'telf_padre': telf_padre,
        'nombre_madre': nombre_madre,
        'telf_madre': telf_madre
      };
//console.log(estudiante);
matricula.push(estudiante);
localStorage.setItem('estudiantes-matricula', JSON.stringify(matricula));
}

})

.controller('EstudiantesCtrl', function($scope, $ionicModal) {

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/estudiante.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal_estudiante = modal;
  });

  $scope.estudiantes = JSON.parse(localStorage.getItem('estudiantes-matricula'));

  $scope.closeLogin = function() {
    $scope.modal_estudiante.hide();
  };

  $scope.click = function(id){
    for (var i = 0; i < $scope.estudiantes.length; i++) {
      if ($scope.estudiantes[i].id == id) {

        $scope.nombre = $scope.estudiantes[i].nombre;
        $scope.apellidos = $scope.estudiantes[i].apellidos;
        $scope.ci = $scope.estudiantes[i].ci;
        $scope.grado = $scope.estudiantes[i].grado;
        $scope.escuela = $scope.estudiantes[i].escuela;
        $scope.telefono = $scope.estudiantes[i].telefono;
        $scope.nombre_padre = $scope.estudiantes[i].nombre_padre;
        $scope.telf_padre = $scope.estudiantes[i].telf_padre;
        $scope.nombre_madre = $scope.estudiantes[i].nombre_madre;
        $scope.telf_madre = $scope.estudiantes[i].telf_madre;

        break;
      };
    };

    $scope.modal_estudiante.show();
  }

})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
