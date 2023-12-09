document.getElementById('nav--for--more--').innerHTML=
`
<div>
            <ul class="nav nav-underline justify-content-center fs-4">
                <li class="nav-item" role="presentation">
                    <a class="nav-link active" aria-current="page" id="history-tab" data-bs-toggle="tab" data-bs-target="#history-tab-pane" type="button" role="tab" aria-controls="history-tab-pane" aria-selected="true">Historia</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link" id="vision-tab" data-bs-toggle="tab" data-bs-target="#vision-tab-pane" type="button" role="tab" aria-controls="vision-tab-pane" aria-selected="true">Vision</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link" id="environment-tab" data-bs-toggle="tab" data-bs-target="#environment-tab-pane" type="button" role="tab" aria-controls="environment-tab-pane" aria-selected="false">Medio Ambiente</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link" id="social-action-tab" data-bs-toggle="tab" data-bs-target="#social-action-tab-pane" type="button" role="tab" aria-controls="social-action-tab-pane" aria-selected="false">Accion Social</a>
                </li>
            </ul>
        </div>
        <!--informacion de secciones del navegador -- contenido-->
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active py-5" id="history-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                <p class="fs-5">
                    La Heladería "El arte de los Helados" comenzó como un pequeño sueño en el corazón de la ciudad, hace más de 20 años. Desde entonces, nos hemos dedicado a crear los helados más deliciosos y únicos que puedas imaginar. Nuestros maestros heladeros seleccionan los ingredientes más frescos y de la más alta calidad para crear cada sabor. Utilizamos recetas secretas transmitidas de generación en generación para garantizar que cada bocado sea una experiencia inolvidable. En El Arte de los Helados, creemos que los helados no son solo postres, son momentos de felicidad. Ya sea que nos visites en familia o con amigos, siempre encontrarás algo que te haga sonreír en nuestro mostrador de sabores.
                </p>
            </div>
            <div class="tab-pane fade py-5" id="vision-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                <p class="fs-5">
                    Nuestra visión en El Arte Helados es convertirnos en un referente en la industria de helados, reconocidos por nuestra innovación, calidad y compromiso con la satisfacción del cliente. Buscamos expandir nuestra presencia a nivel nacional e internacional, manteniendo nuestros valores de excelencia y sostenibilidad, y creando un legado de disfrute y deleite a través de la pasión por el helado.
                </p>
            </div>
            <div class="tab-pane fade py-5" id="environment-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
                <p class="fs-5">
                    En nuestra heladería, nos enorgullece cuidar del planeta tanto como nos preocupamos por deleitar tu paladar. Nos comprometemos a minimizar nuestro impacto ambiental mediante prácticas sostenibles en cada etapa de nuestra operación. Utilizamos ingredientes locales y orgánicos siempre que sea posible, reducimos el uso de plásticos de un solo uso y optamos por envases biodegradables. Además, buscamos constantemente maneras innovadoras de mejorar nuestra eficiencia energética para contribuir a un futuro más verde y sostenible.
                </p>
            </div>
            <div class="tab-pane fade py-5" id="social-action-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
                <p class="fs-5">
                    En ElArte Helados, creemos que la comunidad es el ingrediente más valioso de todas nuestras recetas. Nos esforzamos por ser más que una heladería: somos un compromiso con el bienestar social. Colaboramos con organizaciones locales para apoyar a aquellos que más lo necesitan. Ya sea a través de eventos benéficos, donaciones a causas sociales o programas de voluntariado, nos dedicamos a crear un impacto positivo en la comunidad que nos rodea. Al disfrutar de nuestros deliciosos helados, sabes que también estás contribuyendo a hacer del mundo un lugar más dulce para todos.
                </p>
            </div>
        </div>
`