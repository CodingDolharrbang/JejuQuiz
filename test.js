var data=[
  {
    "question" : "한라산의 해발 높이는 몇 미터인가?",
    "examples":[
      '1,940m',
      '1,947m',
      '1,980m',
      '1,923m'
    ],
    hit: 2,
  },
  // {
  //   "question" : "한라산의 해발 높이는 몇 미터인가?",
  //   "examples":[
  //     '1,940m',
  //     '1,947m',
  //     '1,980m',
  //     '1,923m'
  //   ],
  //   hit: 2,
  // }

];

function printQuiz(no){

  var item = data[no];

  var exmple = '';
  for( var i=0; i <  item.examples.length; i++){
    exmple += '<li><input name="q'+no+'" type="radio" value="'+i+'">' + item.examples[i] + '</li>';
  }

  exmple = '<ol>'+exmple+'</ol>'

  $('#quiz').append(item.question+'<hr>'+exmple) ;

}

printQuiz(0);
// printQuiz(1);

$('#checkButton').click(function(){
  console.log('click')

  // $('[name=q0]:checked').val()

})
