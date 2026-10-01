/**
 * Cole este código em Extensões > Apps Script dentro da planilha
 * "Contatos do Site — Malu Haddock Lobo", substituindo o conteúdo
 * do arquivo Code.gs. Depois publique como Web App (veja README de deploy).
 *
 * SECRET tem que ser o mesmo valor da variável SHEETS_WEBAPP_SECRET na Vercel.
 * O valor já em uso está salvo direto no editor do Apps Script (Implantar >
 * Gerenciar implantações), não neste arquivo — troque o placeholder abaixo
 * pelo mesmo valor nos dois lugares se precisar gerar um novo.
 */

const SECRET = "COLE_AQUI_O_MESMO_VALOR_DE_SHEETS_WEBAPP_SECRET";

function doPost(e) {
  const dados = JSON.parse(e.postData.contents);

  if (dados.secret !== SECRET) {
    return resposta({ ok: false, erro: "não autorizado" });
  }
  if (!dados.nome || !dados.telefone || !dados.email) {
    return resposta({ ok: false, erro: "faltam campos obrigatórios" });
  }

  const planilha = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  planilha.appendRow([
    dados.nome,
    dados.telefone,
    dados.email,
    dados.mensagem || "",
    dados.origem || "site",
    new Date(),
  ]);

  return resposta({ ok: true });
}

function resposta(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}
