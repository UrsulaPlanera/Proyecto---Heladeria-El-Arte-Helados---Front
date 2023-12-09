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