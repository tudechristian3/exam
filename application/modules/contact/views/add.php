<h1>Add Contact</h1>

<form method="post" action="<?php echo base_url('contact/insert')?>">
    Name: <input type="text" name="name"></br/>
    Company Name: <input type="text" name="company_name"></br/>
    Phone: <input type="number" name="phone"></br/>
    Email Address: <input type="text" name="email_address"></br/>
    <input type="submit">
</form>