# Projeto: Passeio 3D Interativo da Planta Residencial (V1, V2 & V3 + Mobile)

## 1. Visão Geral e Versões Disponíveis
O projeto oferece três versões interativas no terreno de **5,00 m × 30,00 m** (alternáveis em 1 clique no topo da interface e exportadas como arquivos HTML portáteis independentes em `versoes/`):

- **Versão 1 (`V1: Quintal`):** planta principal da casa (`0,00 m – 18,50 m`) com lavanderia corrigida (tanque e máquina de lavar lado a lado na mesma parede) + quintal amplo nos fundos (`11,50 m`). Especificação preservada em `docs/design-v1.md`.
- **Versão 2 (`V2: Edícula Gamer` — padrão):** mantém a casa principal idêntica (`0,00 m – 18,50 m`, com tanque e máquina na mesma parede) e redistribui os `11,50 m` dos fundos em:
  - **Área de Lazer / Gourmet (`18,50 m – 25,60 m` | `7,10 m × 5,00 m`):** terraço de pedra na saída do quarto principal, pergolado amplo em madeira com varal de luzes quentes, **churrasqueira moderna em tijolo escuro + bancada gourmet com pia**, **mesa grande para 6 lugares**, e jardim gramado com pisantes até a edícula.
  - **Edícula nos Fundos (`25,60 m – 30,00 m` | `4,40 m × 5,00 m`):**
    - **Quarto Gamer (`3,40 m × 4,40 m`):** porta-balcão deslizante de vidro na frente, **setup gamer completo** (mesa com LED RGB, 2 monitores acesos, PC torre com vidro e RGB, teclado/mouse/headset, cadeira gamer, painéis acústicos e prateleira LED), cama de casal, frigobar/estante e porta de acesso ao banheiro.
    - **Banheiro da Edícula (`1,60 m × 4,40 m`):** bancada com pia e espelho LED, vaso sanitário, janela alta fosca na fachada e box Blindex amplo nos fundos.
- **Versão 3 (`V3: 1ª Fiada` — base V1):** exibe sobre o Radier polido exclusivamente a **modulação da 1ª fiada (`h = 19 cm`) em blocos estruturais de concreto (`14 × 19 × 39 cm`)**, sem paredes altas, teto ou móveis. Totaliza **110 blocos** (`76` inteiros, `23` de amarração e `11` meios-blocos) nas paredes `P1` a `P8`, **18 arranques verticais nos pontos de graute**, vãos de portas abertos no piso e fiada contínua marcada sob as janelas (`src/data/firstCourseV1.js` e `versoes/planta-3d-v3-primeira-fiada.html`).

## 2. Melhorias Gráficas & Experiência Mobile
- **Iluminação e Reflexos:** `PMREMGenerator` + `RoomEnvironment` para reflexos reais em vidros, espelhos, metais e porcelanato; texturas procedurais com bump maps sutis, rodapés internos, coifa, pendentes na península, varal de luzes no pergolado e iluminação suave RGB no Quarto Gamer.
- **Desktop e Celular:** layout responsivo (`100dvw × 100dvh`, `viewport-fit=cover`, safe-area insets), alvos de toque mínimos de `44×44px` em dispositivos de toque (`@media (pointer: coarse)`), menu `Opções` em popover no celular, minimapa recolhido automaticamente em telas estreitas e geração de dois arquivos HTML portáteis offline (`versoes/planta-3d-v1-original.html` e `versoes/planta-3d-v2-edicula-gamer.html`).

## 3. Planta Baixa Imprimível, Contagem de Blocos e Orçamento Regional Itapevi/SP (V1)
- **Alvenaria Estrutural (`14×19×39 cm`):** estimativa para a casa principal da V1 (`13,50 m × 3,80 m`, sem muros externos de divisa) em `src/data/masonryTakeoff.js`, detalhada por parede (`P1`–`P8`) e separada em Bloco Inteiro (`1.125 un` líq. / `1.238 un` c/ +10%), Meio-Bloco (`144` / `159 un`), Bloco de Amarração `34 cm` (`120` / `132 un`) e Bloco Canaleta U (`189` / `208 un`), com margem de quebra configurável (`5% / 10% / 15%`).
- **Estimativa de Custos (Itapevi / Zona Oeste da Grande SP):** valores médios regionais para os blocos (`R$ 5.875,20` líquidos / `R$ 6.466,60` com `+10%` de quebra) e orçamento completo da obra em 5 etapas (Radier, Alvenaria Estrutural, Cobertura/Laje/Caixa d'Água, Esquadrias e Instalações/Acabamento), totalizando **`R$ 115.869,25`** (`R$ 73.803,25` materiais + `R$ 42.066,00` mão de obra; `R$ 2.258,66/m²`, dentro da faixa local SINAPI-SP / CUB-SP de `R$ 108 mil` a `R$ 132 mil`).
- **Piso Final e Cobertura:** Radier em concreto polido (`51,30 m²`) em todo o interior da casa; duas águas de telha sanduíche aparente (frente `7,50 m` e fundos `4,00 m`) caindo para o corredor (`3,40 m → 3,00 m`) e laje impermeabilizada exposta no meio (`3,80 × 2,00 m = 7,60 m²`) apoiando a caixa d'água de `1.000 L`.
- **Aberturas atualizadas:** frente `3,15 × 2,70 m`, 2 janelas laterais `2,00 × 1,70 m`, porta área de serviço `0,90 × 2,10 m`, janela banheiro `0,80 × 0,60 m` e janela do quarto nos fundos `2,00 × 2,00 m` com peitoril (`0,80 m`).
- **Saídas para impressão:** prancha vetorial em A4 paisagem (`planta-impressao.html`) e arquivo PDF pronto de 2 páginas em `versoes/planta-blocos-v1.pdf`.

