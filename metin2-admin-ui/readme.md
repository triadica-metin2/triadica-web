/metin2-admin-ui
|-- /src
    |-- /app
        |-- /core
            |-- /services                     # Global services
            |-- /models                       # Data models
            |-- /guards                       # Route guards
            |-- /interceptors                 # HTTP interceptors
        |-- /features
            |-- /accounts
                |-- account-list.component.ts # Standalone component
                |-- account-detail.component.ts
                |-- account.service.ts        # Standalone service
            |-- /players
                |-- player-detail.component.ts
                |-- player.service.ts
            |-- /logs
                |-- logs-list.component.ts
                |-- logs.service.ts
            |-- /bans
                |-- ban-account.component.ts
                |-- ban.service.ts
        |-- /shared
            |-- /ui-components                # Reusable standalone UI components
            |-- /utils                        # Directives, pipes, etc.
        |-- /layouts                          # Layout components like headers, footers, etc.
    |-- /assets
    |-- /environments                        # Environment-specific configuration
|-- angular.json
|-- package.json
|-- tsconfig.json
