document.getElementById('headerGestor').innerHTML=`
<header class="bg-body-tertiary">
            <div class="container-xxl">
                <nav class="navbar nav-pills navbar-expand-lg bg-body-tertiary p-4">
                    <div class="container-fluid g-0">
                        <img src="../../../images/cono_helado_azul.png" class="img-log-main" title="El Arte Helados">
                        
                        <button class="navbar-toggler btn-log-out" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeaderGestor" aria-controls="navbarHeaderGestor" aria-expanded="false" aria-label="Toggle navigation">
                            <i class="bi bi-three-dots"></i>
                        </button>
                        <div class="collapse navbar-collapse list-webs-nav" id="navbarHeaderGestor">
                            <ul class="navbar-nav list-nav-one">
                            <p class="px-2 mb-0 fs-4 fw-bold title-main">ElArte Helados</p>
                                
                            </ul>
                            <ul class="nav d-flex list-nav-two">
                                <li class="p-3">
                                    <a class="btn btn-log-out" href="../../general/index.html">Salir</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            
    </header>
    <style scoped>
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
        cursor: pointer;
    }

    .btn-log-out{
        background-color: #04C4D9 !important;
        color: #fff !important;
    }

    .img-log-main{
        height: 3rem;
    }

    .title-main{
        font-family: 'Carattere', cursive;
        color: #04C4D9;
    }

    .nav-li-link{
        color: #000 !important;
    }


    @media (max-width: 991.98px) {

        .list-webs-nav, .list-nav-one , .navegador-gestor{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items:center;
        }

        .navegador-gestor li{
            margin-top: 0.5em;
            margin-bottom: 0.5em;
        }
    }

    @media (min-width: 992px) {
        .navegador-gestor{
            display: none;
        }
        .list-webs-nav{
            justify-content: space-between;
        }
    }
    </style>
`