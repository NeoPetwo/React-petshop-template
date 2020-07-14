// Daniel da Rocha Fróes 10255956
// Gabriel Santos Nicolau 10684600
// Kaio Tadeu Rodrigues 7561083

//Para simplificações na correção as senhas ficarão salvas aqui
//Após a correção este user será apagado
let user = "neopetwoadmin";
let pwd = "LmSEPZFB9ReL6uaj";

module.exports = {
  // connectionString: "mongodb://localhost:27017/LocalConnection"
  connectionString: `mongodb+srv://${user}:${pwd}@neopetwomongocluster.yjjg4.mongodb.net/<dbname>?retryWrites=true&w=majority`
}