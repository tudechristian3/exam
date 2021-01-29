<h1>Register</h1>

<form method="post" action="<?php echo base_url('register/register_user')?>">
    Name: <input type="text" name="name"></br/>
    Email Address: <input type="text" name="email_address"></br/>
    Password: <input type="password" name="password"></br/>
    Confirm Password: <input type="password" name="c_password"></br/>
    <input type="submit">
</form>