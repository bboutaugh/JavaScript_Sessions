var age = prompt("Please enter your age: ");
        if(age>=18)
        {
            document.getElementById("voteStatus").innerHTML = "You are valid to vote";
        }
        else
        {
            document.getElementById("voteStatus").innerHTML = "You are not valid to vote";
        }