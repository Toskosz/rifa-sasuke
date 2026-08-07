# Rifa Sasuke

Site estático da rifa do Sasuke.

## Como ver

Abra `index.html` no navegador, ou sirva a pasta localmente:

```bash
python3 -m http.server 8080
```

## Fotos

Coloque as imagens em [`images/`](images/) como `sasuke-1.jpg` … `sasuke-4.jpg`. Veja [`images/README.md`](images/README.md).

## Números

A lista de exemplo (0–299) é gerada em [`script.js`](script.js). Troque o array quando tiver os donos reais.

## Design — paleta do Sasuke

Cores derivadas do pelo, nariz e entorno (cobertor/coleira) do Sasuke. Variáveis CSS em [`styles.css`](styles.css).

| Role | Nome | Hex | Inspiração |
| --- | --- | --- | --- |
| Primary / Dominant | Soft Cream White | `#F5F3EF` | Peito e pelo claro do rosto |
| Secondary / Text | Deep Charcoal Brown | `#2C2723` | Listras escuras e cauda |
| Accent / Highlights | Soft Warm Rose | `#E09A93` | Nariz e orelha interna |
| Supporting Neutral | Warm Medium Gray-Brown | `#7D736A` | Destaques do tabby e coleira |
| Pop Color / Accent | Slate Blue | `#7B99AB` | Cobertor azul-claro e detalhes da coleira |

### Uso na UI

- **Background:** Soft Cream White (`#F5F3EF`) — fundo limpo, quente e legível.
- **Typography:** Deep Charcoal Brown (`#2C2723`) — títulos e corpo com bom contraste.
- **Buttons / CTAs:** Soft Warm Rose (`#E09A93`) no primário; Slate Blue (`#7B99AB`) no secundário, hovers e links.
- **Borders & cards:** Warm Medium Gray-Brown (`#7D736A`) em baixa opacidade para bordas, fundos suaves e texto secundário.
