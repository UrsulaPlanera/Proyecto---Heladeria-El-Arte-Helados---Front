console.log(location.search) // lee los argumentos pasados a este formulario
var id=location.search.slice(4)
console.log(id)
const { createApp } = Vue
    createApp({
        data() {
            //no se incluyó un método de edición para registro, dado que no tendría sentido editar los datos de un compra realizada...
            return {
                id_producto:0,
                nombre_producto:"",
                descripcion_producto:"",
                imagen_producto:"",
                stock_producto:0,
                precio_producto:0,
                urlProductos:'https://ursulaplanera.pythonanywhere.com/productos/'+id,
                id_local:0,
                id_unico_local:'',
                municipio_local:'',
                nombre_local: '',
                urlLocales: 'https://ursulaplanera.pythonanywhere.com/locales/'+id,
                id_registro:0,
                fecha_registro: "",
                local_registro:"",
                monto_registro:0,
                urlRegistros: 'https://ursulaplanera.pythonanywhere.com/registros/'+id,
                id_sabor:0,
                categoria_sabor:"",
                nombre_sabor:"",
                urlSabores: 'https://ursulaplanera.pythonanywhere.com/sabores/'+id,
            }
        },
        methods: {
            fetchDataProductos(urlProductos) {
                fetch(urlProductos)
                    .then(response => response.json())
                    .then(data => {
                            console.log(data)
                            this.id_producto= data.id_producto
                            this.nombre_producto = data.nombre_producto;
                            this.descripcion_producto = data.descripcion_producto;
                            this.stock_producto= data.stock_producto
                            this.precio_producto= data.precio_producto
                            this.imagen_producto= data.imagen_producto
                        })
                        .catch(err => {
                            console.error(err);
                            this.error=true
                        })
            },
            fetchDataLocales(urlLocales) {
                fetch(urlLocales)
                    .then(response => response.json())
                    .then(data => {
                            console.log(data)
                            this.id_local=data.id_local;
                            this.id_unico_local = data.id_unico_local;
                            this.municipio_local=data.municipio_local;
                            this.nombre_local=data.nombre_local
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
                            console.log(data)
                            this.id_registro= data.id_registro;
                            this.fecha_registro = data.fecha_registro;
                            this.local_registro= data.local_registro;
                            this.monto_registro= data.monto_registro
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
                            console.log(data)
                            this.id_sabor= data.id_sabor;
                            this.categoria_sabor = data.categoria_sabor;
                            this.nombre_sabor= data.nombre_sabor;
                        })
                        .catch(err => {
                            console.error(err);
                            this.error=true
                        })
            },
            modificarProducto() {
                let producto = {
                    nombre_producto:this.nombre_producto,
                    descripcion_producto:this.descripcion_producto,
                    precio_producto: this.precio_producto,
                    stock_producto: this.stock_producto,
                    imagen_producto:this.imagen_producto
                }
                var options = {
                    body: JSON.stringify(producto),
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    redirect: 'follow'
                }
                fetch(this.urlProductos, options)
                    .then(function () {
                        alert("Información de producto modificado con éxito!")
                        window.location.href = "./productos.html";
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Modificar")
                })
            },
            modificarLocal() {
                let local = {
                    id_unico_local:this.id_unico_local,
                    municipio_local: this.municipio_local,
                    nombre_local: this.nombre_local,
                }
                var options = {
                    body: JSON.stringify(local),
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    redirect: 'follow'
                }
                fetch(this.urlLocales, options)
                    .then(function () {
                        alert("Información de local modificada con éxito!")
                        window.location.href = "./locales.html";
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Modificar")
                })
            },
            modificarRegistro() {
                let registro = {
                    local_registro:this.local_registro,
                    monto_registro: this.monto_registro,
                }
                var options = {
                    body: JSON.stringify(registro),
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    redirect: 'follow'
                }
                fetch(this.urlRegistros, options)
                    .then(function () {
                        alert("Venta modificada con éxito!")
                        window.location.href = "./registros.html";
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Modificar")
                })
            },
            modificarSabor() {
                let sabor = {
                    categoria_sabor:this.categoria_sabor,
                    nombre_sabor: this.nombre_sabor,
                }
                var options = {
                    body: JSON.stringify(sabor),
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    redirect: 'follow'
                }
                fetch(this.urlSabores, options)
                    .then(function () {
                        alert("Información de sabor modificado con éxito!")
                        window.location.href = "./sabores.html";
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Modificar")
                })
            }
        },
        created() {
            this.fetchDataProductos(this.urlProductos)
            this.fetchDataLocales(this.urlLocales)
            this.fetchDataRegistros(this.urlRegistros)
            this.fetchDataSabores(this.urlSabores)
        },
    }).mount('#app')