import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequests(request, response) {
    if(request.method === 'POST') {
        const TOKEN = 'f23197ea6aa91accce01adf53307d9';
        const client = new SiteClient(TOKEN);
        
        // Validar os dados, antes de sair cadastrando
        const registroCriado = await client.items.create({
            itemType: "970955", // ID do Model de "Communities" criado pelo Dato
            ...request.body,
             // title: "Comunidade de Teste",
             // imageUrl: "https://github.com/PortelaVictor.png",
             // creatorSlug: "PortelaVictor"
        })
    
        console.log(registroCriado);
    
        response.json({
            dados: 'Algum dado qualquer',
            registroCriado: registroCriado,
        })
        return;
    }

    response.status(404).json({
        message: 'Ainda não temos nada no GET, mas no POST tem!'
    })
}