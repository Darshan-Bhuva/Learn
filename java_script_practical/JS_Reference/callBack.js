// CallBack Function In Js
{
  function first(parameter) {
    console.log(parameter);
  }
  function second(para, call) {
    console.log(para);
    call("First Parameter");
  }
  second("Pass Value", first);
}
// Clouser Function In Js
{
    function first(parameter){
        console.log(parameter);
        function second(pass){
            console.log(pass);
        }
        second("Secondary Function")
    }
    first("Primary Function")
}

{
    function first(parameter){
        console.log(parameter);
        function second(pass){
            console.log(pass);
        }
        return second("Secondary Function")
    }
    let main = first
    main("Primary Function");
}
