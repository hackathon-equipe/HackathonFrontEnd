import axios from 'axios'
import { useAuthStore } from '@/stores/auth'
import { baixarImagem, deletarFotoAntiga } from '@/composables/image'
const useAuth = useAuthStore()


export async function submitUpdate(usuario, dados, imagem) {
    usuario = dados
    console.log(imagem)
    try {
      if (usuario.senha && usuario.senha !== usuario.senhaConfirmacao) {
        alert('As senhas não coincidem.')
        return
      }
  
      let telefoneId = null
      if (usuario.telefone.ddd && usuario.telefone.numero) {
        if (!usuario.telefone.id) {
          const telefoneResponse = await axios.post('/telefones/', {
            ddd: usuario.telefone.ddd,
            numero: usuario.telefone.numero
          })
          telefoneId = telefoneResponse.data.id
        } else {
          telefoneId = usuario.telefone.id
        }
      }
      if (imagem) {
        await deletarFotoAntiga(usuario)
      }
  
      let imageKey = usuario.foto ? usuario.foto.attachment_key : ''
  
      if (imagem) {
        imageKey = await baixarImagem(imagem)
      }
  
      const updatedUser = {
        name: usuario.name,
        email: usuario.email,
        senha: usuario.senha || undefined,
        foto_attachment_key: imageKey
      }
  
      if (telefoneId) {
        updatedUser.telefone = telefoneId
      }
  
      console.log('Payload para o backend:', updatedUser)
  
      await useAuth.updateUser(updatedUser)
      alert('Dados atualizados com sucesso!')
    } catch (error) {
      console.error('Erro ao atualizar os dados:', error.response?.data || error)
      alert('Erro ao atualizar os dados. Tente novamente.')
    }
  }