// The lexer will take a string of input code and return an array of tokens
function lexer(input) {
    // Use a regular expression to match the different tokens in the input
    const tokens = input.match(/\d+|[a-zA-Z]+|[^\s]/g);
    return tokens;
  }
  
  // The parser will take an array of tokens and return an abstract syntax tree
  function parser(tokens) {
    // Create a root node for the abstract syntax tree 
    let ast = {
      type: "Program",
      body: [],
    };
  
    // Loop through the tokens and add nodes to the abstract syntax tree
    for (let i = 0; i < tokens.length; i++) {
      let token = tokens[i];
      let node = {
        type: "Expression",
        value: token,
      };
      ast.body.push(node);
    }
  
    return ast;
  }
  
  // Use the lexer and parser to tokenize and parse some input code
  let input = "1 + 2";
  let tokens = lexer(input);
  let ast = parser(tokens);
  console.log(ast);
  