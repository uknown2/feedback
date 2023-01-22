function preview() {
    var name = document.getElementById("username").value;
    var email = document.getElementById("useremailid").value;
    var phone = document.getElementById("userphonenumber").value;
    var address = document.getElementById("useraddress").value;
    var gender = document.getElementsByName("Gender").value;
    var feedback = document.getElementById("userfeedback").value;

    document.getElementById("feed-form").innerHTML = `  <form >
    <div class="fundiv">
        <fieldset>
            <legend>Pre-view Form</legend>
            <table class="funtable">
        <tr>
            <td> Name :</td>
            <td> ${name}</td>
        </tr>
        <tr>
            <td> Email :</td>
            <td>${email}</td>
        </tr>
        <tr>
            <td>Phone Number :</td>
            <td>${phone}</td>
        </tr>
        <tr>
            <td>Gender :</td>
            <td>${gender}</td>
        </tr>
        <tr>
            <td>Address : </td>
            <td>${address}</td>
        </tr>
        
        <tr>
            <td> FeedBack : </td>
            <td>${feedback}</td>
        </tr>
       
    </table>
        </fieldset>
        <button type="button" onclick="back()">Back</button>
    </div>
</form>`;
}


function back() {
    document.getElementById("feed-form").innerHTML = `<form action="" class="feedbackform" id="feed-form">
    <table class="personalinformation">
        <tr>
            <td>Name :</td>
            <td><input type="text" id="username" name="username" placeholder="Enter your full name" required>
            </td>
        </tr>
        <tr>
            <td>Email :</td>
            <td><input type="email" id="useremailid" name="emailid" placeholder="Enter you email ID " required>
            </td>
        </tr>
        <tr>
            <td>Phone Number :</td>
            <td><input type="tel" name="phone" id="userphonenumber" placeholder="Enter you phone number"
                    required>
            </td>
        </tr>
        <tr>
            <td>Gender :</td>
            <td id="gendertd">
                <input type="radio" name="Gender" value="Male" id="exampleInputGender" />
                Male
                <input type="radio" name="Gender" value="Female" id="exampleInputGender" />
                Female
                <input type="radio" name="Gender" value="Other" id="exampleInputGender" />
                Other
            </td>
        </tr>
        <tr>
            <td><label for="address">Address :</label></td>
            <td><textarea name="address1" id="useraddress" cols="30" rows="6"
                    placeholder="Enter your address "></textarea></td>
        </tr>
    
        <tr>
            <td><label for="address">Write your feedback :</label></td>
            <td><textarea name="feedback" id="userfeedback" cols="40" rows="12"
                placeholder="Enter your detail feedback here"></textarea></td>
        </tr>
    </table>


<div class="div1">
    <table>
        <tr>
            <td>
                <button type="button" class="preview" onclick="preview()"> Pre-view</button>
            </td>
            <td>
                <button type="submit" class="submit" onclick="submits()"> Submit</button>
            </td>
        </tr>
    </table>
</div>
</form>`
}

function submits() {
    document.getElementById('feed-form').innerHTML = `<h1> Response is submited</h1> <a href="index.html">Click here to submit another response</a>`
}