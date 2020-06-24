
<body>
	
	<div class="limiter">
		<div class="container-login100">
		
			<div class="wrap-login100">
				<div class="login100-pic js-tilt" data-tilt>
					<img src="<?php echo base_url(); ?>assets/Login_v1/images/img-01.png" alt="IMG">
				</div>

				<form action ="<?=base_url('forms/add')?>" method="POST" class="login100-form validate-form" >
					<span class="login100-form-title">
						Client Register
					</span>	
					
					<div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input class="input100" type="text" name="email" placeholder="Email">
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>
					<div class="wrap-input100 validate-input" data-validate = "Isi Data">
						<input class="input100" type="text" name="company" placeholder="Company">
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>
					
					<div class="wrap-input100 validate-input" data-validate = "Isi Data">
						<input class="input100" type="text" name="nama" placeholder="Nama">
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>
					
					<div class="container-login100-form-btn">
						<button  name="tombol_key" class="login100-form-btn">
							Generate API Key
						</button>
					</div>
					
					

					

					
			</div>
		</div>
	</div>
	
	

	
