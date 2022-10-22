function checkFirstname()
{
    const feed = document.getElementById("feedback")
    const elFirstname = document.getElementById("firstname")
    var firstname = elFirstname.value;

    if(firstname.length <= 9)
    {
       feed.innerHTML = 'Does Meet Requirments'
    }
    else{
        feed.innerHTML ='Meets Requirments'
    }
}

function checkLastname()
{
    const feed = document.getElementById("feedback")
    const elLastname = document.getElementById("lastname")
    var lastname = elLastname.value;

    if(lastname.length <= 9)
    {
       feed.innerHTML = 'Does Meet Requirments'
    }
    else{
        feed.innerHTML ='Meets Requirments'
    }
}

function checkEmail()
{
    const feed = document.getElementById("feedback")
    const elEmail = document.getElementById("email")
    var email = elEmail.value;

    if(email.length <= 9)
    {
       feed.innerHTML = 'Does Meet Requirments'
    }
    else{
        feed.innerHTML ='Meets Requirments'
    }
}