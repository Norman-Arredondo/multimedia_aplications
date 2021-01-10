const TheMainArea = {
  template: `
    <!-- <main class="page projets-page" style="background:linear-gradient(to right, #536976, #292e49);">-->
    <main class="page blog-post">
        <section class="clean-block clean-post dark">
            <div class="container">
                <div class="block-content">
                    <div class="center-block post-image" style="background-image:url(../assets/img/aplicaciones/1.jpg);"></div>
                    <div class="post-body">
                        <h1 style="text-align: center;"><strong>Proceso de desarrollo de una aplicación multimedia</strong><br></h1>
                        <div class="post-info"><span>Norman Arredondo</span><span>Enero  07, 2021</span></div>
                        <h3>Fases en el desarrollo de aplicaciones multimedia interactivas</h3>

                        
                        <h4><strong>Referencias</strong></h4>
                        <ul>
                            <li><a href="https://www.uv.es/bellochc/pdf/pwtic5.pdf " target="_blank">https://www.uv.es/bellochc/pdf/pwtic5.pdf</a><br></li>
                        </ul>
                    </div>
                </div>
                
                <div class="mt-4">
                    <h1 style="text-align: center;" ><strong>Juego del ahorcado</strong><br></h1>
                    <div class="d-flex justify-content-center">
                
                        <canvas id="pantalla" width="950px" height="450px">
                        <!-- etiqueta del canvas con sus medidas en la pantalla -->
                        </canvas>
                    
                    </div>
                        <!-- El boton que nos sirve para recargar la pagina y asi generar una nueva palabra y volver a jugar -->
                        <button id="boton" type="reset" onclick="javascript:window.location.reload();">Volver a Jugar</button>
                </div>   
            </div>
        </section>
    </main>
    `,
};
