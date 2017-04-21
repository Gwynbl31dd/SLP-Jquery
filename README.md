# SLP-Jquery
Simple front-end login page using Jquery

### Installation

1. Since the version 0.2.0, this script use bootstrap. Add bootstrap like this in your header:

	```html
		 <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
	```
	##### Note: path/to/bootstrap.min.css needs to reflect the path of where you place the css file.

2. Add a script element somewhere on your site. The element looks like:

	```html
		<!-- jQuery 2.1.4 -->
		<script src="plugins/jQuery/jQuery-2.1.4.min.js"></script>
		<!-- Bootstrap 3.3.5 -->
		<script src="bootstrap/js/bootstrap.min.js"></script>
		<!-- slp 0.2.1 -->
		<script src="js/slp.js"></script>
	```
	##### Note: path/to/slp.js needs to reflect the path of where you place the javascript file.

3. SLP is initiated by calling the method "slp_init(minLength,maxLength,Function())". This has to be placed somewhere on the page after the script. An example of this is:

	```html
	<script>
		$(document).ready(function(){
			var todo = function(){
				alert("Form valid !!!");
			};
			slp_init(5,20,todo);
		});
	</script>
	```
### Usage
	
this script will check 

* ##### login (#login)
Min and Max length

* ##### password (#password)
Min and Max length

* ##### repassword (#repassword)
Min and Max length & if same as "password"

* ##### email (#email)
regex if valid email

Ex : 

```html
	<div class="form-group has-feedback">
		<label class="control-label" for="login" >Login :</label>
		<input id="login" type="text" class="form-control" placeholder="login">
		<span class="glyphicon glyphicon-user form-control-feedback"></span>
		<div class="alert alert-block alert-danger" style="display:none"></div>
	</div>
```
	
##### Note: Do not forget to use the class "form-control".

	
### feel free to modify it. Enjoy !