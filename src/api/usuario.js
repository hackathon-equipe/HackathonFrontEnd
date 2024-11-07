import axios from 'axios'
export default class UsuarioApi {
  async buscarUsuario() {
    const { data } = await axios.get('/usuarios/me')
    return data
  }
}
