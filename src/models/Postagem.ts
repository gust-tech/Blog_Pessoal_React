import Tema from './Tema'

interface Postagem{
    id: number;
    titulo: string;
    texto: string;
    data: unknown; //testar com Date depois
    tema?: Tema| null
}

export default Postagem;