const assert = require('assert');
const greetLangRadio = require("../greet-factory")

describe('Greet with factory function' , function(){


    describe('Returning all the names', function(){
        var greetFunc = greetLangRadio()
        var tebogoName = "Tebogo" 
        var caraName = "Cara"
        var busiName = "Busi"
        it('Should return the name greeted in xhosa', function(){
            greetFunc.langON('xhosa', tebogoName)
            assert.equal('Mholo, Tebogo', greetFunc.greetnames())
        })
        it('Should return the name greated in sotho and add', function(){
            greetFunc.langON('sotho', caraName)
            assert.equal('Dumelang, Cara', greetFunc.greetnames())
        })
        it('Should return the name greated in Isixhosa and add', function(){
            greetFunc.langON('tsonga', busiName)
            assert.equal('Ahee, Busi', greetFunc.greetnames())
        });
    });

    describe('In case of non selected language or and empty string for the name', function(){
        var greetFunc = greetLangRadio()
        var caraName = "Cara" 
        it('Should return "Please type in a name" if the string is empy for name', function(){
          greetFunc.checkErrors('', 'xhosa')
          assert.equal('Please type in a name', greetFunc.checkErrors('', 'xhosa') )
        })

        it('Should return "Please Select a Language" if the radio has not been selected', function(){
            var name = greetFunc.langON('xhosa', caraName)
            var returnedMsg =  greetFunc.checkErrors(name, '')
            assert.equal('Please Select a Language', returnedMsg )
          })
    })
    describe('function uppercases the first charater' , function(){
        var eddieName = "Eddie"
        var vascoName = "Vasco" 
        it('should change the first letter to upperCase', function(){
            var greetFunc = greetLangRadio();
            assert.equal(vascoName, greetFunc.capFirstLetter(vascoName));
            
        });
        it('should change the uppercase to lower can when you write name', function(){
            var greetFunc = greetLangRadio();
            assert.equal(eddieName, greetFunc.capFirstLetter(eddieName));
            
        });
    });

    describe('Differnt languages and name', function(){
        var greetFunc = greetLangRadio()
        var vascoName = "Okuhle" 
        it('Should return the name greated in IsiXhosa', function(){
            greetFunc.langON('xhosa', vascoName)
            assert.equal('Mholo, Okuhle', greetFunc.greetnames())
        })
        it('Should return the name greated in sotho', function(){
            greetFunc.langON('sotho', vascoName)

            assert.equal('Dumelang, Okuhle', greetFunc.greetnames())
        })
        it('Should return the name greated in Isixhosa', function(){
            greetFunc.langON('tsonga', vascoName)
            assert.equal('Ahee, Okuhle', greetFunc.greetnames())
        });
    });
    
    describe('counter for name', function(){
    it('Should increment counter for each different name greeted', function () {
        var greetFunc = greetLangRadio()
        greetFunc.langON('Vasco','xhosa');
        greetFunc.langON('Lucky','sotho');
        greetFunc.langON('Cara','Isixhosa');
       
        assert.equal(3,greetFunc.getCounter());
    });
  
    it('Should not increment counter if the name has been greeted even if you greet in different language', function () {
        var greetFunc = greetLangRadio()
        greetFunc.langON('Cara','xhosa');
        greetFunc.langON('Cara','sotho');
        greetFunc.langON('Cara','tsonga');
        greetFunc.langON('Eddie','xhosa');
        greetFunc.langON('Eddie','sotho');
        greetFunc.langON('Eddie','tsonga');
        greetFunc.langON('Lucky','xhosa');
        greetFunc.langON('Lucky','sotho');
        greetFunc.langON('Lucky','tsonga');
        greetFunc.langON('Tebogo','xhosa');
        greetFunc.langON('Tebogo','sotho');
        greetFunc.langON('Tebogo','tsonga');
       
        assert.equal(4,greetFunc.getCounter());
        });
    })

});