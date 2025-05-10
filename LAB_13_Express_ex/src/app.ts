import express, {Request, Response} from 'express';
import { Produto } from './Produto';

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.json());

function hello(req: Request, res: Response):void{
    res.status(200).send("Hello World!");
}

function filtraProdutoPorId(req: Request, res: Response):void{
    try{
        let id = req.params.id;
        res.status(200).json({
            id: id
        })
    }
    catch(e:unknown){
        res.status(400).json({
            message: "Favor informar um ID valido."
        })
    }
}

function filtraProdutoPorNome(req: Request, res: Response):void{
    try{
        let nome = req.query.nome;
        res.status(200).json({
            nome: nome
        })
    }
    catch(e:unknown){
        res.status(400).json({
            message: "Favor informar um ID valido."
        })
    }
}

function novoProduto(req: Request, res: Response):void{
    try{
        let data: any = req.body;

        if(!data.id || !data.nome || !data.preco || !data.fabricante){
            throw new Error("Esta faltando informacao, porduto tem que ter id, name, price e fabricante.");
        }
        if(!data.fabricante.id || !data.fabricante.nome || !data.fabricante.endereco){
            throw new Error("Esta faltando informacao, fabricante tem que ter id, name e endereco.");
        }

        const produto = new Produto(data.id, data.nome, data.preco, data.fabricante);
        res.status(200).json({
            status: "sucess",
            mensagem: "Produto cadastrado com sucesso",
            produto: produto
        })
    }
    catch(e:unknown){
        res.status(400).json({
            message: "Favor informar um objeto valido."
        })
    }
}

app.get('/api/hello', hello);
app.get('/api/product', filtraProdutoPorNome);
app.get('/api/product/:id', filtraProdutoPorId);
app.post('/api/product', novoProduto);
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));