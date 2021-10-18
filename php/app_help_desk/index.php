<html>
  <head>
    <meta charset="utf-8" />
    <title>App Help Desk</title>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <style>
      .card-login {
        padding: 30px 0 0 0;
        width: 350px;
        margin: 0 auto;
      }
      body {
    background: url(ruido.png);
    background-attachment: fixed;
    font-family: Helvetica,Arial,sans-serif;
}
    </style>
  </head>

  <body >

    <nav class="navbar" style="background-color: #fafad2">
      <a class="navbar-brand" href="#" style="color:#74DF00; font-size: 30px; font-style:oblique; margin-left:8px;">
        <img src="logo2.png" width="50" height="45" class="d-inline-block align-top">
        <strong>App Help Desk</strong>
      </a>
    </nav>

    <div class="container">    
      <div class="row">

        <div class="card-login">
          <div class="card">
            <div class="card-header">
              Login
            </div>
            <div class="card-body">
              <form action="valida_login.php" method="post">
                <div class="form-group">
                  <input name="email" type="email" class="form-control" placeholder="E-mail">
                </div>
                <div class="form-group">
                  <input name="senha" type="password" class="form-control" placeholder="Senha">
                </div>
                <?php 
                    if(isset($_GET['login'])  &&  $_GET['login']  ==  'erro') {
                      ?>
                            <div class="text-danger">
                              Usuário ou senha inválido(s).
                            </div>

                <?php }
                 ?>
                   <?php 
                    if(isset($_GET['login'])  &&  $_GET['login']  ==  'erro2') {
                      ?>
                            <div class="text-danger">
                              Área restrita. Faça login para ter acesso!!!
                            </div>

                <?php }
                 ?>
                <button class="btn btn-lg btn-block" type="submit" style="background-color:#74DF00">Entrar</button>
              </form>
            </div>
          </div>
        </div>
    </div>
  </body>
</html>