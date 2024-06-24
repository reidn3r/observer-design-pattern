# Observer Design Pattern
Este projeto é uma implementação do padrão de projeto Observer em TypeScript. Ele demonstra como usar classes e métodos para criar um sistema onde objetos (observadores) são notificados automaticamente sobre mudanças em outro objeto.

Baseado em: <a href="https://refactoring.guru/design-patterns/observer" target="_blank"> Refactoring Guru </a>

## Estrutura do Projeto

O projeto é composto pelos seguintes arquivos principais:

- `./src/interface/publisher-interface.ts`: Define a interface e a classe base para o sujeito.
- `./src/interface/observer-interface.ts`: Define a interface para os observadores.
- `./src/classes/publisher.ts`: Implementa a classe concreta do sujeito, contendo o estado de interesse e a lógica de notificação.
- `./src/classes/observer.ts`: Implementa a classe concreta dos observadores, que reagem às mudanças no sujeito.
- `./main.ts`: Arquivo que coloca em funcionamento as interfaces e classes criadas.

## Como Executar
```
    #Clone o repositório
    $git clone git@github.com:reidn3r/observer-design-pattern.git

    #Instale as dependências
    npm install

    #Execute o arquivo main.ts
    cd ./src
    npx ts-node main.ts
```