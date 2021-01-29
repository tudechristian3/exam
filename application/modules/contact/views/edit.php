<h1>Add Contact</h1>

<form method="post" action="<?php echo base_url('contact/update')?>">
    <input type="hidden" name="contact_id" value="<?php echo $users[0]['contact_id']?>">
    Name: <input type="text" name="name" value="<?php echo $users[0]['name']?>"></br/>
    Company Name: <input type="text" name="company_name" value="<?php echo $users[0]['company_name']?>"></br/>
    Phone: <input type="number" name="phone" value="<?php echo $users[0]['phone']?>"></br/>
    Email Address: <input type="text" name="email_address" value="<?php echo $users[0]['email']?>"></br/>
    <input type="submit">
</form>