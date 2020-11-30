
<!--Comienza el cuerpo de la página-->
    <div class="container-fluid">
    <h1>¡Bienvenidos a la Hamburgueseria!</h1>
    <h2>Esta el la página de <?php echo $title;?></h2>
    <br><br><br>
    <p class="datos">Para iniciar tu pedido ingresa tus datos</p>
    <br>
    <div>
        <form action="#">
            <input type="text" placeholder="Introduzca su nombre" id="nombre">
            <input type="number" placeholder="Introduzca su mesa" id="mesa">
        </form>
    </div>
    <br><br>
    <a class="btn btn-warning" href="<?php echo site_url('Hamburgueseria/pedido') ?>" onclick="return required()" role="button">Siguiente</a>
</div>
<!--Termian el cuerpo de la página-->
