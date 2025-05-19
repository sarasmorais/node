import http from 'node:http'

const users = []

const server = http.createServer((req,res) => {
    const{method,url} = req

    if(method === 'GET' && url === '/users'){
        return res

        .setHeader('content-type','aplication/json')
        .end(JSON.stringify(users))

    } 

    if (method === 'POST' && url === '/users'){
        users.push({
            id:1,
            name:'Luan Olivera',
            email:'LuanPDD@hotmail.com'
        })

        return res.end('Criação de usuário')

    }

    return res.end('Página Inicial!')


}) //criação de um servidor com o requerimento e uma resposta

server.listen(3000)


// MÉTODOS: 
//GET = LER ALGO
//POST = ESCREVER ALGO
//PUT = ATUALIZAR ALGO (COMPLETO - um conjunto de infos)
//PATCH = ATUALIZAR ALGO (ESPECIFICO)
//DELETE = DELETAR ALGO 
//HEAD =
//OPTIONS = 
