document.getElementById("headerGeneral").innerHTML=`
<header class="bg-body-tertiary">
        <div class="container-xxl">
            <nav class="navbar navbar-expand-lg bg-body-tertiary p-4">
                <div class="container-fluid g-0" >
                    <img src="../../images/logo_helado_rosa.png" class="imgLogMain" title="El Arte Helados">
                    <button class="navbar-toggler btn-nav" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="bi bi-three-dots"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 list-nav-one align-items-center">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="index.html#productos">Productos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="index.html#empresa">Empresa</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="index.html#sucursales">Sucursales</a>
                            </li>
                        </ul>
                        <ul class="nav d-flex list-nav-two">
                            <li class="p-3">
                                <a href="https://www.instagram.com/" title="Instagram">
                                    <i class="bi bi-instagram"></i>
                                </a>
                            </li>
                            <li class="p-3">
                                <a href="https://www.facebook.com/" title="Facebook">
                                    <i class="bi bi-facebook"></i>
                                </a>
                            </li>
                            <li class="p-3">
                                <a href="https://www.tiktok.com/" title="Tiktok">
                                    <i class="bi bi-tiktok"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
              </nav>
        </div>
    </header>

    <style>
    * {
    font-family: 'Roboto', sans-serif;
}

ul, ol {
    margin: 0 !important;
    padding: 0 !important;
}

li {
    list-style: none;
}

a {
    text-decoration: none !important;
}

header, footer {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
}


i, a, footer {
    color: #F4896B !important;
}

.nav-item{
    color: #242424;
}


.imgLogMain {
    height: 3rem;
}

.img-pink-ice-cream{
    height: 3rem;
}

.name-page-footer{
    font-family: 'Carattere', cursive;
    color: #F4896B;
}

@media (max-width: 991.98px) {
    .list-nav-one, .list-nav-two{
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
    </style>
`

document.getElementById('footerGeneral').innerHTML = `
<footer>
        <div class="container-fluid bg-body-tertiary mt-5">
            <div class="container-xxl">
                <article class="d-flex flex-wrap justify-content-between align-items-center py-4 mt-4 change-to-column">
                    <div class="col-md-4">
                        <span class="mb-0 name-page-footer fs-4">ElArte Helados</span>
                        <a class="fs-6 mx-1" href="/templates/general/log-intranet.html">Intranet</a>
                    </div>
                    <div class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                    <img src="../../images/cono_helado_rosa.png" class="img-pink-ice-cream">
                    </div>
                    <ul class="nav col-md-4 justify-content-end">
                        <li class="nav-item"><a href="https://www.instagram.com/" class="nav-link px-2"><i class="bi bi-instagram"></i></a></li>
                        <li class="nav-item"><a href="https://www.facebook.com/" class="nav-link px-2"><i class="bi bi-facebook"></i></a></li>
                        <li class="nav-item"><a href="https://www.tiktok.com/es/" class="nav-link px-2"><i class="bi bi-tiktok"></i></a></li>
                    </ul>
                </article>
            </div>
        </div>
    </footer>
    <style>
    * {
    font-family: 'Roboto', sans-serif;
}

ul, ol {
    margin: 0 !important;
    padding: 0 !important;
}

li {
    list-style: none;
}

a {
    text-decoration: none !important;
}

header, footer {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
}


i, a, footer {
    color: #F4896B !important;
}

.nav-item{
    color: #242424;
}


.imgLogMain {
    height: 3rem;
}

.img-pink-ice-cream{
    height: 3rem;
}

.name-page-footer{
    font-family: 'Carattere', cursive;
    color: #F4896B;
}

@media (max-width: 991.98px) {
    .list-nav-one, .list-nav-two{
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

@media (max-width: 575.98px) {
    .change-to-column{
        flex-direction: column;
    }
}

</style>
`