function move () {
  if(!entities) return false;
  entities.forEach(function (e, i, a) {
    e.move();
  });
}