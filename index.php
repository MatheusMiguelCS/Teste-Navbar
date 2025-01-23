<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="index.css">
    <title>Document</title>
</head>
<?php require_once "navbar.php"; ?>
<body>
    <br>
    <center>
        <div class="card-box">
            <div class="email">Email</div>
            <input type="text" placeholder="Informe seu Email">
            <br><br>

            <div class="senha">Senha</div>
            <input type="password" placeholder="Digite sua senha">
            <br><br>

            <button class="btn_entrar" style="color: white;">ENTRAR</button>
            <br><br>

            <div class="esqueceu_senha">
                <a href="texte.html" style="color:black;">Esqueceu a Senha? </a>
            </div>
        </div>
        <br>
    </center>
    <?php require_once 'footer.php'; ?>
    <style>
        footer {
            position: fixed !important;
            bottom: 0%;
            content: "" !important;
        }
    </style>
</body>
</html>
