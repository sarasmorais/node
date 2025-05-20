import http from 'node:http'

const users = []

const server = http.createServer((req,res) => {

    const{method,url} = req

    if(method === 'GET' && url === '/users'){
        if(users.length === 0){
            return res.end('Nenhum usuário encontrado.');
        }
        return res.end(JSON.stringify(users));
    } 

    if (method === 'POST' && url === '/users'){
        users.push({
            id:1,
            name:'Sara Morais'
        });

        return res.end('Usuário criado com sucesso');
    }


    if(method === 'GET' && url === '/produtos'){
        if(users.length === 0){
            return res.end ('Nenhum produto encontrado');
        }else{
            return res.end(JSON.stringify(users));
        }
    } 

    if (method === 'PACH' && url === '/produtos'){
        if(users.length !==0){
            users[0].produto = 'Produto 01';
            return res.end('Atualização de usuário efetuada.');
        } else {
            return res.end('Nenhum produto encontrado');
        }

    }

    return res.end('Página Inicial!')

}) 
server.listen(3000)


// MÉTODOS: 
//GET = LER ALGO
//POST = ESCREVER ALGO
//PUT = ATUALIZAR ALGO (COMPLETO - um conjunto de infos)
//PATCH = ATUALIZAR ALGO (ESPECIFICO)
//DELETE = DELETAR ALGO 
//HEAD =
//OPTIONS = 
