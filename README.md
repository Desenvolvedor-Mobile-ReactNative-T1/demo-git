# Demo Git - Contador Simples

Projeto **extremamente básico** em JavaScript para ensinar como funciona o Git na prática.

## O que é este projeto?

Um contador na tela com três botões: `+`, `-` e `Zerar`.  
Abra o `index.html` no navegador para testar.

## Estrutura de pastas

```
demo-git/
├── index.html      → Página principal (HTML)
├── app.js          → Lógica do contador (JavaScript)
├── estilos.css     → Visual da página (CSS)
├── .gitignore      → Arquivos que o Git deve ignorar
└── README.md       → Este arquivo de documentação
```

## O que é o Git?

O Git é um sistema de **controle de versão**. Ele guarda o histórico das mudanças do seu código, como se fosse uma "máquina do tempo" para o projeto.

### Conceitos importantes

| Conceito | O que significa |
|----------|-----------------|
| **Repositório** | A pasta do projeto com histórico Git (pasta `.git`) |
| **Commit** | Um "snapshot" (foto) do código em um momento |
| **Branch** | Uma linha de desenvolvimento separada |
| **Staging** | Área onde você prepara arquivos antes do commit |

## Passo a passo para demonstrar na aula

### 1. Iniciar o repositório

```bash
cd demo-git
git init
```

### 2. Ver o status (arquivos novos/modificados)

```bash
git status
```

### 3. Adicionar arquivos ao staging

```bash
git add .
```

### 4. Fazer o primeiro commit

```bash
git commit -m "feat: adiciona contador simples"
```

### 5. Ver o histórico de commits

```bash
git log --oneline
```

### 6. Fazer uma mudança e commitar de novo

Edite o `app.js` (ex: mude o texto ou adicione um `console.log`) e rode:

```bash
git status
git add app.js
git commit -m "feat: adiciona log no console"
git log --oneline
```

### 7. Criar uma branch (linha paralela de desenvolvimento)

```bash
git branch feature-mudar-cor
git checkout feature-mudar-cor
```

Mude a cor no `estilos.css`, depois:

```bash
git add estilos.css
git commit -m "style: muda cor do contador para verde"
```

### 8. Voltar para a branch principal e fazer merge

```bash
git checkout main
git merge feature-mudar-cor
```

> Se a branch principal se chamar `master` em vez de `main`, use `master` nos comandos.

## Fluxo visual

```
main:     A --- B --- C ----------- E (merge)
                    \             /
feature:             D (mudança de cor)
```

- **A** = primeiro commit (projeto criado)
- **B** = segunda mudança
- **C** = ponto onde criamos a branch
- **D** = mudança na branch `feature-mudar-cor`
- **E** = merge da feature de volta na `main`

## Dicas para a apresentação

1. Sempre rode `git status` antes e depois de cada mudança — o pessoal vê o que o Git está rastreando.
2. Use mensagens de commit curtas e claras (`feat:`, `fix:`, `style:`).
3. Mostre `git log --oneline --graph --all` para visualizar branches.
4. O `.gitignore` evita commitar arquivos desnecessários (como `node_modules/`).

## Como rodar o projeto

Basta abrir o arquivo `index.html` no navegador (duplo clique ou arrastar para o Chrome).
