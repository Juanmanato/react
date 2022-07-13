import firebase from "../config/firebase";
   export async function traerProductos () {
        const productos = await firebase.firestore().collection('productos').get()
        return productos.docs
    }

    export async function traerProductoId (id) {
        const producto = await firebase.firestore().doc('productos/'+id).get()
        return producto
       
    }

    export async function crearProducto (data){
        const addProducto = await firebase.firestore().collection("productos").add({
            nombre:data.nombre,
            precio:data.precio,
            descripcion:data.descripcion,
            imagen:data.imagen,
          })
        return addProducto
    }

    export async function modificar (id, data){
        const setProducto = await firebase.firestore().doc('productos/'+id).set(data)
        return setProducto
    }

    export async function eliminar (id){
        const deleteProdcuto = await firebase.firestore().doc('productos/'+ id).delete()
        return deleteProdcuto
    }

    // export async function subirImg ( image ){ 
    //     const almacenamiento =  await firebase.storage().ref().child("imagenes/" + image)
    //     .put(image)
     
    //     console.log("archivo", almacenamiento)
    // }

  