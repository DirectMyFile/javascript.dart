import "package:javascript/evaluator.dart";

import "dart:io";

void main() {
  var file = new File("example/test.js");
  var program = parse(file.readAsStringSync());

  var scope = new Scope.root();

  scope.values["console"] = CommonJsObjects.CONSOLE;
  scope.values["JSON"] = CommonJsObjects.JSON;

  var evaluator = new EvaluatorVisitor(scope);
  evaluator.visit(program);
}
