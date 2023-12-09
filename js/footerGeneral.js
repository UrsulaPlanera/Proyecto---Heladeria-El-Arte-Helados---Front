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