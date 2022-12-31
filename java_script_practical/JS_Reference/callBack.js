{
  // IIFE Immediately Invoked Function Expression

  (function (para, meter) {
    console.log(para);
    console.log(meter);
  })("Immediately Invoked", 2);
}

{
  // CallBack Function In Js

  function first(parameter) {
    console.log(parameter);
  }
  function second(para, call) {
    console.log(para);
    call("First Parameter");
  }
  second("Pass Value", first);
}
{
  // Clouser Function In Js

  {
    function first(parameter) {
      console.log(parameter);
      function second(pass) {
        console.log(pass);
      }
      second("Secondary Function");
    }
    first("Primary Function");
  }

  {
    function first(parameter) {
      console.log(parameter);
      function second(pass) {
        console.log(parameter + pass);
      }
      return second("Secondary Function");
    }
    let main = first;
    main("Primary Function");
  }

  {
    let second;
    function first(para) {
      console.log(para);
      second = function (pass) {
        console.log(pass + " " + para);
      };
    }
    first("Primary Function");
    second("Secondary Function");
  }

  {
    let second;
    function first(para) {
      console.log(para);
      return second = function (pass) {
        console.log(pass + " " + para);
      };
    }
    let main = first("Primary Function");
    main();
  }
}
