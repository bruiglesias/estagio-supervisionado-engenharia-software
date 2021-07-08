module.exports = {

    // Validação de datas
    // Formatos válidos: DD/MM/YYYY e DD-MM-YYYY
    validateDate(date){
        var dateformat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;

        if(date.match(dateformat))
        {

        var opera1 = date.split('/'); 
        var opera2 = date.split('-');
        var lopera1 = opera1.length;
        var lopera2 = opera2.length; 
    
        if (lopera1>1)
        {
            var pdate = date.split('/');
        }
        else if (lopera2>1)
        {
            var pdate = date.split('-');
        }
        var dd = parseInt(pdate[0]);
        var mm  = parseInt(pdate[1]);
        var yy = parseInt(pdate[2]);

        var ListofDays = [31,28,31,30,31,30,31,31,30,31,30,31];
        if (mm==1 || mm>2)
        {
            if (dd>ListofDays[mm-1])
            {
            return false;
            }
        }
        if (mm==2)
        {
            var lyear = false;
            if ( (!(yy % 4) && yy % 100) || !(yy % 400)) 
            {
            lyear = true;
            }
            if ((lyear==false) && (dd>=29))
            {
            return false;
            }
            if ((lyear==true) && (dd>29))
            {
            return false;
            }
        }
        return true;
        }
        else
        {
        return false;
        }
    },

    validateBrazilianNames(name){
        if(name.length < 3)
        {
            return false;
        }
        return true;
    },

    validateEmail(email){
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == false)
        {
          return false;
        }
    
        return true;
    },

    validateInternationalPhoneWithMask(phone)
    {
        phone =  phone.replace("(", "");
        phone =  phone.replace(")", "");
        phone =  phone.replace("-", "");
        phone =  phone.replace(" ", "");
        phone =  phone.replace(" ", "");


        if(phone.length != 14)
        {
            
            return false;
        }
        return true;
    },

    validateSimplePassword(password){
        if(password.length < 6)
        {
            return false;
        }
        return true;
    }
}