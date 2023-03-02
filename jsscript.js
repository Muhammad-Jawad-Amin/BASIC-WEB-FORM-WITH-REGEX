function FName_Valid()
{
    let First_Name = document.getElementById("First_Name").value;
    let Name_Regex = /^[A-Za-z .]{5,20}$/ ;
    if(Name_Regex.test(First_Name))
    {
        document.getElementById('First_Name').style.backgroundColor = 'rgb(22, 147, 151)';
        document.getElementById('First_Name').style.textDecoration = 'none';
    }
    else
    {
        document.getElementById('First_Name').style.backgroundColor = 'White';
        document.getElementById('First_Name').style.textDecoration = 'underline';
        document.getElementById('First_Name').style.textDecorationColor = 'Red';
    }
}

function LName_Valid()
{
    var Last_Name = document.getElementById("Last_Name").value;
    var Name_Regex = /^[A-Za-z .]{4,20}$/ ;
    if(Name_Regex.test(Last_Name))
    {
        document.getElementById('Last_Name').style.backgroundColor = 'rgb(22, 147, 151)';
        document.getElementById('Last_Name').style.textDecoration = 'none';
    }
    else
    {
        document.getElementById('Last_Name').style.backgroundColor = 'White';
        document.getElementById('Last_Name').style.textDecoration = 'underline';
        document.getElementById('Last_Name').style.textDecorationColor = 'Red';
    }    
}

function CNIC_Valid()
{
    let CNIC = document.getElementById("CNIC").value;
    let CNIC_Regex = /^[0-9]{5}-[1-9]{7}-[0-9]{1}$/ ;
    if(CNIC_Regex.test(CNIC))
    {
        document.getElementById('CNIC').style.backgroundColor = 'rgb(22, 147, 151)';
        document.getElementById('CNIC').style.textDecoration = 'none';
    }
    else
    {
        document.getElementById('CNIC').style.backgroundColor = 'White';
        document.getElementById('CNIC').style.textDecoration = 'underline';
        document.getElementById('CNIC').style.textDecorationColor = 'Red';
    }
}

function Phno_Valid()
{
    let Phone_No = document.getElementById("Phone_No").value;
    let Phno_Regex = /^([+923]{4}|[03]{2})[0-4]{1}[0-9]{1}[0-9]{7}$/ ;
    if(Phno_Regex.test(Phone_No))
    {
        document.getElementById('Phone_No').style.backgroundColor = 'rgb(22, 147, 151)';
        document.getElementById('Phone_No').style.textDecoration = 'none';
    }
    else
    {
        document.getElementById('Phone_No').style.backgroundColor = 'White';
        document.getElementById('Phone_No').style.textDecoration = 'underline';
        document.getElementById('Phone_No').style.textDecorationColor = 'Red';
    }
}

function DOB_Valid()
{
    let DOB = document.getElementById("DOB").value;
    let DOB_Regex = /^(?:0[1-9]|[12]\d|3[01])([\/.-])(?:0[1-9]|1[012])\1(?:19|20)\d\d$/ ;
    if(DOB_Regex.test(DOB))
    {
        document.getElementById('DOB').style.backgroundColor = 'rgb(22, 147, 151)';
        document.getElementById('DOB').style.textDecoration = 'none';
    }
    else
    {
        document.getElementById('DOB').style.backgroundColor = 'White';
        document.getElementById('DOB').style.textDecoration = 'underline';
        document.getElementById('DOB').style.textDecorationColor = 'Red';
    }
}

function Email_Valid()
{
    let Email = document.getElementById("Email").value;
    let Email_Regex = /^[a-zA-z]{3,25}[0-9]{0,10}[@]{1}([gmail]{5}|[hotmail]{7}|[yahoo]{5}|[outlook]{7})[.com]{4}$/ ;
    if(Email_Regex.test(Email))
    {
        document.getElementById('Email').style.backgroundColor = 'rgb(22, 147, 151)';
        document.getElementById('Email').style.textDecoration = 'none';
    }
    else
    {
        document.getElementById('Email').style.backgroundColor = 'White';
        document.getElementById('Email').style.textDecoration = 'underline';
        document.getElementById('Email').style.textDecorationColor = 'Red';
    }
}

function Password_Valid()
{
    let Password = document.getElementById("Password").value;
    let Password_Regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$/ ;
    if(Password_Regex.test(Password))
    {
        document.getElementById('Password').style.backgroundColor = 'rgb(22, 147, 151)';
        document.getElementById('Password').style.textDecoration = 'none';
    }
    else
    {
        document.getElementById('Password').style.backgroundColor = 'White';
        document.getElementById('Password').style.textDecoration = 'underline';
        document.getElementById('Password').style.textDecorationColor = 'Red';
    }
}

function ConPassword_Valid()
{
    let Conf_Password = document.getElementById('Conf_Password').value;
    let ConPassword_Regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$/ ;
    if(ConPassword_Regex.test(Conf_Password))
    {
        document.getElementById('Conf_Password').style.backgroundColor = 'rgb(22, 147, 151)';
        document.getElementById('Conf_Password').style.textDecoration = 'none';
    }
    else
    {
        document.getElementById('Conf_Password').style.backgroundColor = 'White';
        document.getElementById('Conf_Password').style.textDecoration = 'underline';
        document.getElementById('Conf_Password').style.textDecorationColor = 'Red';
    }
}

function Reset()
{
    document.getElementById('First_Name').style.backgroundColor = 'rgb(22, 147, 151)';
    document.getElementById('First_Name').style.textDecoration = 'none';
    document.getElementById('Last_Name').style.backgroundColor = 'rgb(22, 147, 151)';
    document.getElementById('Last_Name').style.textDecoration = 'none';
    document.getElementById('CNIC').style.backgroundColor = 'rgb(22, 147, 151)';
    document.getElementById('CNIC').style.textDecoration = 'none';
    document.getElementById('Phone_No').style.backgroundColor = 'rgb(22, 147, 151)';
    document.getElementById('Phone_No').style.textDecoration = 'none';
    document.getElementById('DOB').style.backgroundColor = 'rgb(22, 147, 151)';
    document.getElementById('DOB').style.textDecoration = 'none';
    document.getElementById('Email').style.backgroundColor = 'rgb(22, 147, 151)';
    document.getElementById('Email').style.textDecoration = 'none';
    document.getElementById('Password').style.backgroundColor = 'rgb(22, 147, 151)';
    document.getElementById('Password').style.textDecoration = 'none';
    document.getElementById('Conf_Password').style.backgroundColor = 'rgb(22, 147, 151)';
    document.getElementById('Conf_Password').style.textDecoration = 'none';
}

function Check_FName(FName)
{
    let Name_Regex = /^[A-Za-z .]{3,20}$/ ;
    if(Name_Regex.test(FName) == false || FName ==null)
    {
        alert("Please enter a valid first name.");
        document.getElementById("First_Name").focus();
    }
    else
    {
        return true;
    }
}

function Check_LName(LName)
{
    let Name_Regex = /^[A-Za-z .]{3,20}$/ ;
    if(Name_Regex.test(LName) == false || LName ==null)
    {
        alert("Please enter a valid last name.");
        document.getElementById("Last_Name").focus();
    }
    else
    {
        return true;
    }
}

function Check_CNIC(CNIC)
{
    let CNIC_Regex = /^[0-9]{5}-[1-9]{7}-[0-9]{1}$/ ;
    if(CNIC_Regex.test(CNIC) == false || CNIC ==null)
    {
        alert("Please enter a valid CNIC number.");
        document.getElementById("CNIC").focus();
    }
    else
    {
        return true;
    }
}

function Check_Phno(Phno)
{
    let Phno_Regex = /^([+923]{4}|[03]{2})[0-4]{1}[0-9]{1}[0-9]{7}$/ ;
    if(Phno_Regex.test(Phno) == false || Phno ==null)
    {
        alert("Please enter a valid phone number.");
        document.getElementById("Phone_No").focus();

    }
    else
    {
        return true;
    }
}

function Check_DOB(DOB)
{
    let DOB_Regex = /^(?:0[1-9]|[12]\d|3[01])([\/.-])(?:0[1-9]|1[012])\1(?:19|20)\d\d$/ ;
    console.log(DOB);
    if(DOB_Regex.test(DOB) || DOB == null)
    {
        alert("Please enter a valid date of birth.");
        document.getElementById("DOB").focus();

    }
    else
    {
        return true;
    }
}

function Check_Address(Address)
{
    let Address_Regex = /^[A-Za-z ,-0-9]{10,30}$/ ;
    if(Address_Regex.test(Address) || Address == null)
    {
        alert("Please enter a valid home address.");
        document.getElementById("Address").focus();
    }
    else
    {
        return true;
    }
}

function Check_Gender(Gender)
{
    if(Gender == null)
    {
        alert("Please select a gender.");
    }
    else
    {
        return true;
    }
}

function Check_Email(Email)
{
    let Email_Regex = /^[a-zA-z]{3,25}[0-9]{0,10}[@]{1}([gmail]{5}|[hotmail]{7}|[yahoo]{5}|[outlook]{7})[.com]{4}$/ ;
    if(Email_Regex.test(Email) == false || Email ==null)
    {
        alert("Please enter a valid email address.");
        document.getElementById("Email").focus();

    }
    else
    {
        return true;
    }
}

function Check_Password(Password)
{
    let Password_Regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$/ ;
    if(Password_Regex.test(Password) == false || Password ==null)
    {
        alert("Please enter a valid password.");
        document.getElementById("Password").focus();

    }
    else
    {
        return true;
    }
}

function Check_ConfPassword(ConfPassword)
{
    let ConfPassword_Regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$/ ;
    if(ConfPassword_Regex.test(ConfPassword) == false || ConfPassword == null)
    {
        alert("Please enter a valid confirm password.");
        document.getElementById("Conf_Password").focus();

    }
    else if(ConfPassword != document.getElementById("Password").value)
    {
        alert("Your password and confirm passwords are not matched.");
        document.getElementById("Conf_Password").focus();
    }
    else
    {
        return true;
    }
}


function Signup()
{
    let First_Name = document.querySelector("#First_Name").value;
    let Last_Name = document.querySelector("#Last_Name").value;
    let CNIC = document.querySelector("#CNIC").value;
    let Phone_No = document.querySelector("#Phone_No").value;
    let Address = document.querySelector("#Address").value;
    let DOB = document.querySelector("#DOB").value;
    let Gender = document.querySelector("#Male").value;
    let Email = document.querySelector("#Email").value;
    let Password = document.querySelector("#Password").value;
    let Conf_Password = document.querySelector("#Conf_Password").value;

    if(Check_FName(First_Name))
    {
        if(Check_LName(Last_Name))
        {
            if(Check_CNIC(CNIC))
            {
                if(Check_Phno(Phone_No))
                {
                    if(Check_Address(Address))
                    {
                        if(Check_DOB(DOB))
                        {
                            if(Check_Gender(Gender))
                            {
                                if(Check_Email(Email))
                                {
                                    if(Check_Password(Password))
                                    {
                                        if(Check_ConfPassword(Conf_Password))
                                        {
                                            document.getElementById("Disp_FName").innerHTML = First_Name;
                                            document.getElementById("Disp_LName").innerHTML = Last_Name;
                                            document.getElementById("Disp_CNIC").innerHTML = CNIC;
                                            document.getElementById("Disp_PhoneNo").innerHTML = Phone_No;
                                            document.getElementById("Disp_Address").innerHTML = Address;
                                            document.getElementById("Disp_DOB").innerHTML = DOB;
                                            document.getElementById("Disp_Gender").innerHTML = Gender;
                                            document.getElementById("Disp_Email").innerHTML = Email;
                                            document.getElementById("Disp_Password").innerHTML = Password;
                                            document.getElementById("Disp_Conf_Password").innerHTML = Conf_Password;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}