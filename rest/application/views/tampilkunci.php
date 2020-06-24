
<body>
	
	<div class="limiter">
		<div class="container-login100">
		
			<div class="wrap-login100">
				<div class="login100-pic js-tilt" data-tilt>
					<img src="<?php echo base_url(); ?>assets/Login_v1/images/img-01.png" alt="IMG">
				</div>

				<form action ="<?=base_url('forms')?>" method="POST" class="login100-form validate-form" >
					<span class="login100-form-title">
						API Key Anda :
					</span>	
                    <div class="wrap-input100 validate-input" data-validate = "Isi Data">
						<label><?php echo $hasil;?></label>
					</div>
					
                    <div class="container-login100-form-btn">
						<button  name="tombol_back" class="login100-form-btn">
							Back
						</button>
					</div>
					
			</div>
		</div>
	</div>
	
	

	
