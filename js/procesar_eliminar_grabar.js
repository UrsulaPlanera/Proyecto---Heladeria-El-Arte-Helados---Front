const { createApp } = Vue
    createApp({
        data() {
            return {
                //url:'http://localhost:5000/productos',
                // si el backend esta corriendo local usar localhost 5000(si no lo subieron a pythonanywhere)
                urlRegistros:'https://ursulaplanera.pythonanywhere.com/registros', // si ya lo subieron a pythonanywhere
                urlLocales: 'https://ursulaplanera.pythonanywhere.com/locales',
                urlProductos:'https://ursulaplanera.pythonanywhere.com/productos',
                urlSabores: 'https://ursulaplanera.pythonanywhere.com/sabores',
                error:false,
                cargando:true,
                /*atributos para el guardar los valores del formulario */
                productos:[],
                id_producto:0,
                nombre_producto:"",
                descripcion_producto:"",
                imagen_producto:"",
                stock_producto:0,
                precio_producto:0,
                registros:[],
                id_registro:0,
                fecha_registro: "",
                local_registro:"",
                monto_registro:0,
                locales: [],
                id_local:0,
                id_unico_local:'',
                municipio_local:'',
                nombre_local: '',
                sabores: [],
                id_sabor:0,
                categoria_sabor:"",
                nombre_sabor:"",
            }
        },
        methods: {
            fetchDataProductos(urlProductos) {
                fetch(urlProductos)
                .then(response => response.json())
                .then(data => {
                    this.productos = data;
                    this.cargando=false
                })
                .catch(err => {
                    console.error(err);
                    this.error=true
                })
            },
            fetchDataRegistros(urlRegistros) {
                fetch(urlRegistros)
                .then(response => response.json())
                .then(data => {
                    this.registros = data;
                    this.cargando=false
                })
                .catch(err => {
                    console.error(err);
                    this.error=true
                })
            },
            fetchDataLocales(urlLocales){
                fetch(urlLocales)
                .then(response => response.json())
                .then(data => {
                    this.locales = data;
                    this.cargando=false
                })
                .catch(err => {
                    console.error(err);
                    this.error=true
                })
            },
            fetchDataSabores(urlSabores) {
                fetch(urlSabores)
                .then(response => response.json())
                .then(data => {
                    this.sabores = data;
                    this.cargando=false
                })
                .catch(err => {
                    console.error(err);
                    this.error=true
                })
            },
            eliminarProducto(producto) {
                const url = this.urlProductos+'/' + producto;
                var options = {
                    method: 'DELETE',
                }
                fetch(url, options)
                    .then(res => res.text()) // or res.json()
                    .then(res => {
                        location.reload();
                    })
            },
            eliminarRegistro(registro) {
                const url = this.urlRegistros+'/' + registro;
                var options = {
                    method: 'DELETE',
                }
                fetch(url, options)
                    .then(res => res.text()) // or res.json()
                    .then(res => {
                        location.reload();
                    })
            },
            eliminarLocal(local) {
                const url = this.urlLocales+'/' + local;
                var options = {
                    method: 'DELETE',
                }
                fetch(url, options)
                    .then(res => res.text()) // or res.json()
                    .then(res => {
                        location.reload();
                    })
            },
            eliminarSabor(sabor) {
                const url = this.urlSabores+'/' + sabor;
                var options = {
                    method: 'DELETE',
                }
                fetch(url, options)
                    .then(res => res.text()) // or res.json()
                    .then(res => {
                        location.reload();
                    })
            },
            grabarProducto(){
                let producto = {
                    nombre_producto:this.nombre_producto,
                    descripcion_producto:this.descripcion_producto,
                    precio_producto: this.precio_producto,
                    stock_producto: this.stock_producto,
                    imagen_producto:this.imagen_producto,
                }
                var options = {
                    body:JSON.stringify(producto),
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    redirect: 'follow'
                }
                fetch(this.urlProductos, options)
                    .then(function () {
                        alert("Nueva venta registrada con éxito!")
                        window.location.href = "./productos.html";
                    })
                    .catch(err => {
                        console.error(err);
                        alert("Error al Grabar")
                    })
            },
            grabarRegistro(){
                let registro = {
                    local_registro:this.local_registro,
                    monto_registro:this.monto_registro,
                }
                var options = {
                    body:JSON.stringify(registro),
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    redirect: 'follow'
                }
                fetch(this.urlRegistros, options)
                    .then(function () {
                        alert("Venta almacenada con éxito!")
                        window.location.reload();
                    })
                    .catch(err => {
                        console.error(err);
                        alert("Error al Grabar")
                    })
            },
            grabarLocal(){
                let local = {
                    id_unico_local:this.id_unico_local,
                    municipio_local:this.municipio_local,
                    nombre_local: this.nombre_local,
                }
                var options = {
                    body:JSON.stringify(local),
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    redirect: 'follow'
                }
                fetch(this.urlLocales, options)
                    .then(function () {
                        alert("Nuevo local grabado con éxito!")
                        window.location.href = "./locales.html";
                    })
                    .catch(err => {
                        console.error(err);
                        alert("Error al Grabar")
                    })
            },
            grabarSabor(){
                let sabor = {
                    categoria_sabor:this.categoria_sabor,
                    nombre_sabor: this.nombre_sabor,
                }
                var options = {
                    body:JSON.stringify(sabor),
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    redirect: 'follow'
                }
                fetch(this.urlSabores, options)
                    .then(function () {
                        alert("Nuevo sabor grabado con éxito!")
                        window.location.href = "./sabores.html";
                    })
                    .catch(err => {
                        console.error(err);
                        alert("Error al Grabar")
                    })
            },
        },
        created() {
            this.fetchDataProductos(this.urlProductos)
            this.fetchDataRegistros(this.urlRegistros)
            this.fetchDataLocales(this.urlLocales)
            this.fetchDataSabores(this.urlSabores)
        },
    }).mount('#app')