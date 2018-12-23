console.log('loaded client');
  $.ajax({
    method: 'GET',
    url: '/test'
  }).then(function(res){
    console.log(res);
  },
  function(err){
    console.log(err);
  });