class CarritoService {
    URL_CARRITO = 'https://61da4f23ce86530017e3cd0f.mockapi.io/carrito/'

    async guardarCarritoService(carrito) {
        let carritoGuardado = await http.post(this.URL_CARRITO, carrito)
        return carritoGuardado
    }
}

const carritoService = new CarritoService()
