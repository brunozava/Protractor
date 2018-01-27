// conf.js
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  //specs: ['LocatorByModel.spec.js']
  specs: ['../testspec/CustomerLoginTest_spec.js']
  //specs: ['./TestScenarios/*.spec.js']

  //Para rodar uma suíte de testes, utilizar o 
  //comando por exemplo da pasta smoke: protractor conf.js --suite=smoke
  //Não esquecendo de jogar os cenários dentro da pasta smoke
  //Para rodar mais de uma suíte de testes, utilizar o comando
  //protractor conf.js --suite=smoke,regression
  //suites: {

    //smoke: ['./smoke/*.spec.js'],
    //regression: ['./regression/*.spec.js'],
    //functional: ['./functional/*.spec.js'],
    //all: ['./*/*.spec.js'],
    //selected: ['./smoke/addcustomer.spec.js','./regression/seletecustomer.spec.js']
//}
}