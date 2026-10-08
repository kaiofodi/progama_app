import {AlertaSMS} from "./model/AlertaSMS";
import {AlertaEmail} from "./model/AlertaEmail";
import {AlertaPainel} from "./model/AlertaPainel";

const sms = new AlertaSMS("Seu cartão foi cronado", "Alta", "47 99028922");
const email = new AlertaEmail("Ola, boa tarde! Seu kartao foi cronado", "Media", "777neimarjunio@gmail.com")
const painel = new AlertaPainel("Aula de sonegacao de impostos", "Baixo", "sala 67")

painel.alterarPrioridade("Alta");

const alertas = [sms, email, painel];

for(let i = 0; i < alertas.length; i++){
    const alerta = alertas[i];

    alerta.enviar();
}

