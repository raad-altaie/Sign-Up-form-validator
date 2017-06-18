function validate() {
    var name1 = document.getElementById('signupname1').value;
    var name2 = document.getElementById('signupname2').value;
    var email = document.getElementById('signupemail').value;
    var password = document.getElementById('signuppw').value;
    var password_confirm = document.getElementById('signuppw_confirm').value;
    var ienexcode = document.getElementById('ienexcode').value;
    var email_patt = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var password_patt = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;
    var phone_patt = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    var email_match =email.match(email_patt)
    var password_match =password.match(password_patt)
    var ienexcode_match =ienexcode.match(password_patt)
    
        if  (name1 == "") {  
        document.getElementById('signupname1').setCustomValidity('Please submit your First Name');
        document.getElementById('signupname1').style.borderColor="red";
            return false;
        }
        else if (name2 == "") {  
        document.getElementById('signupname2').setCustomValidity('Please submit your Last Name');
        document.getElementById('signupname2').style.borderColor="red";
            return false;
        }
    
        else if  (email == "") {  
        document.getElementById('signupemail').setCustomValidity('Please submit your Email');
        document.getElementById('signupemail').style.borderColor="red";
            return false;
        }
    
        else if (email_match == null) { 
        document.getElementById('signupemail').setCustomValidity('Please submit a vaild Email');
        document.getElementById('signupemail').style.borderColor="red";
            return false;                 
        }
    
        else if (password == "") {  
        document.getElementById('signuppw').setCustomValidity('Please enter a password');
        document.getElementById('signuppw').style.borderColor="red";
            return false;
        }
        else if (password_match == null) { 
        document.getElementById('signuppw').setCustomValidity('The password must be between (8 to 16) characters including Uppercase letter, Special character and Alphanumeric characters.');
        document.getElementById('signuppw').style.borderColor="red";
            return false;  
        }
        else if (password_confirm == "") {  
        document.getElementById('signuppw_confirm').setCustomValidity('Please confirm your password');
        document.getElementById('signuppw_confirm').style.borderColor="red";
            return false;
        }
        else if (password_confirm != password) {  
        document.getElementById('signuppw_confirm').setCustomValidity('Password Must be Matching');
        document.getElementById('signuppw_confirm').style.borderColor="red";
            return false;
        }
        else if (phone_match == null) { 
        document.getElementById('signupphone').setCustomValidity('Please submit a vaild phone number');
        document.getElementById('signupphone').style.borderColor="red";
            return false;                 
         }
        else if (document.getElementById('checkbx').checked == false){
        document.getElementById('checkbx').setCustomValidity('you must agree to the terms of service.');
        
        }
        else {
        
        return true;
        
        }


      // Clearing Red border for Sign Up

      function ClearingEmail(){
          document.getElementById('signupemail').setCustomValidity('');
          document.getElementById('signupemail').style.removeProperty('border');
          document.getElementById('signupname1').setCustomValidity('');
          document.getElementById('signupname1').style.removeProperty('border');
          document.getElementById('signupname2').setCustomValidity('');
          document.getElementById('signupname2').style.removeProperty('border');
      }

      function ClearingPassword(){
          document.getElementById('signuppw').setCustomValidity('');
          document.getElementById('signuppw').style.removeProperty('border');
          document.getElementById('signuppw_confirm').setCustomValidity('');
          document.getElementById('signuppw_confirm').style.removeProperty('border');
      }

      function ClearingPhone(){
          document.getElementById('signupphone').setCustomValidity('');
          document.getElementById('signupphone').style.removeProperty('border');

      }

      function ClearingCheckbox(){
          document.getElementById('checkbx').setCustomValidity('');
      }

    
    
    
