import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=(path)=>readFileSync(new URL(path,import.meta.url),'utf8');
const manifest=JSON.parse(read('../manifest.json'));
const other=JSON.parse(read('../manifest.webmanifest'));
const pricing=JSON.parse(read('../commercial-config.json'));
test('Marca FORTECOMPANNY+ IA aparece nas principais telas e no PWA',()=>{
 for(const path of ['../index.html','../assistente.html','../consulta-nfe.html'])assert.match(read(path),/FORTECOMPANNY\+ IA/);
 assert.equal(manifest.name,'FORTECOMPANNY+ IA — Consulta Fiscal');
 assert.equal(manifest.short_name,'FORTECOMPANNY+ IA');
 assert.equal(other.name,manifest.name);
 assert.equal(other.short_name,manifest.short_name);
});
test('Assinatura mensal sem preço definido e sem cobrança ativa',()=>{
 assert.equal(pricing.displayName,'FORTECOMPANNY+ IA');
 assert.equal(pricing.subscription.billingPeriod,'monthly');
 assert.equal(pricing.subscription.priceBRL,null);
 assert.equal(pricing.subscription.pricingStatus,'a_definir');
 assert.equal(pricing.subscription.checkoutEnabled,false);
 assert.equal(pricing.subscription.contractingEnabled,false);
 assert.equal(pricing.subscription.automaticRenewalEnabled,false);
 assert.match(read('../index.html'),/valor a definir/);
});
test('IA não é anunciada como inferência ou homologação fiscal ativa',()=>{
 assert.equal(pricing.ai.inferenceEnabled,false);
 assert.equal(pricing.ai.providerConfigured,false);
 assert.equal(pricing.ai.planSharingEnabled,false);
 assert.equal(pricing.tax.sefazIssuanceEnabled,false);
 assert.match(read('../index.html'),/inteligência artificial ainda em preparação/);
});
