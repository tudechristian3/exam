<h1>Contact</h1>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <link rel="stylesheet" href="<?php echo base_url('assets/')?>plugins/toastr/toastr.min.css">
    <script src="<?php echo base_url('assets/')?>plugins/sweetalert2/sweetalert2.min.js"></script>
<script src="<?php echo base_url('assets/')?>plugins/toastr/toastr.min.js"></script>
<link rel="stylesheet" href="<?php echo base_url('assets/')?>plugins/sweetalert2-theme-bootstrap-4/bootstrap-4.min.css">
<input type="hidden" class="base_url" value="<?php echo base_url(); ?>"/>
</body>
<a href="<?php echo base_url('logout')?>">Logout</a>
<a href="<?php echo base_url('contact/add')?>">Insert Contact</a>

<table>
    <tr>
        <td>Name</td>
        <td>Company Name</td>
        <td>Phone</td>
        <td>Email</td>
        <td>Actions</td>
    </tr>
    <?php $users = $this->MY_Model->getRows('contact_person'); ?>
    <?php foreach($users as $u):?>
        <tr>
            <tr contact_id="<?php echo $u['contact_id']; ?>">
            <td><?php echo $u['name']?></td>
            <td><?php echo $u['company_name']?></td>
            <td><?php echo $u['email']?></td>
            <td><?php echo $u['phone']?></td>
            <td><a href="<?php echo base_url('contact/edit')?>/<?php echo $u['contact_id']?>">Edit</a></td>
            <td><button type="submit" class="btn btn-danger btn-sm delete_product_action" data-id="'<?php echo $u['contact_id']?>'"> Delete</button></td>
            
        </tr>
    <?php endforeach;?>

</table>

<script type="text/javascript">
    $(document).on('click','.delete_product_action',function(e){
        e.preventDefault();
        var id = $(this).attr('data-id');
        var base_url = $('.base_url').val();
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this account ?",
            //type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#1A6519",
            confirmButtonText: "Yes",
        }).then((confirm) => {
            if (confirm.value) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  ),
                $.ajax({
                    url:base_url+'contact/delete',
                    type:'post',
                    //dataType:'json',
                    data: {
                        'contact_id': id
                    },
                    success: function(res){
                        // $.toast({
                        //     heading: 'Successfully Deleted',
                        //     text: res.message,
                        //     position: 'top-right',
                        //     loaderBg: '#178472',
                        //     icon: res.type,
                        //     hideAfter: 2000,
                        //     stack: 6
                        // })
                        //table_user.ajax.reload();
                    }
                })
            }
        });
    });
</script>