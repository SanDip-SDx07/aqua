aqua/ <- Root monorepo
├── apps/
│ ├── aqua-public/
│ │ └── package.json
│ ├── aqua-vendor/
│ │ └── package.json
│ ├── aqua-executive/
│ │ └── package.json
│ └── aqua-partner/
│ └── package.json
├── packages/
│ └── aqua-shared/
│ └── package.json
├── backend/
│ ├── src/
│ │ └── server.ts
│ ├── package.json
│ └── tsconfig.json
├── tsconfig.base.json
├── tsconfig.json <- Root TS references
└── package.json <- Root

C:\Users\sandi\Downloads\Projects\aqua>tree /A /F
Folder PATH listing
Volume serial number is 76D0-0D76
C:.
| .gitignore
| aqua.code-workspace
| monorepo.md
| package.json
| tsconfig.base.json
| tsconfig.json
| yarn.lock
|
+---apps
| \---aqua-public
| | .gitignore
| | app.json
| | App.tsx
| | BUILD_GUIDE.js
| | eas.json
| | index.ts
| | package-lock.json
| | package.json
| | tsconfig.json
| | types.ts
| | \_package
| |
| +---.expo
| | | devices.json
| | | README.md
| | |
| | \---web
| | \---cache
| | \---production
| | \---images
| | \---favicon
| | \---favicon-24272cdaeff82cc5facdaccd982a6f05b60c4504704bbf94c19a6388659880bb-contain-transparent
| | favicon-48.png
| |
| +---.vscode
| +---assets
| | 20L-nobg.svg
| | 20l.png
| | adaptive-icon.png
| | banner-1.png
| | banner-2.png
| | banner-3.jpg
| | favicon.png
| | file.svg
| | icon.png
| | splash-icon.png
| | WaterJarIcon.tsx
| |
| +---components
| | CallButton.tsx
| | DaysSlider.tsx
| | MessageButton.tsx
| | QuickPopup.tsx
| |
| +---constants
| | styles.ts
| |
| +---data
| | notifications.ts
| | orders.ts
| | transactions.ts
| |
| +---modals
| | NotifyModal.tsx
| | OrderModal.tsx
| | QAIModal.tsx
| | STCModal.tsx
| | SubsModal.tsx
| | WHModal.tsx
| |
| +---navigations
| | NavBottom.tsx
| | NavStack.tsx
| |
| +---node_modules
| | \---.bin
| | expo
| | expo-modules-autolinking
| | expo-modules-autolinking.cmd
| | expo.cmd
| | fingerprint
| | fingerprint.cmd
| | prettier
| | prettier.cmd
| | react-native
| | react-native.cmd
| | rnc-cli
| | rnc-cli.cmd
| | tsc
| | tsc.cmd
| | tsserver
| | tsserver.cmd
| |
| +---screens
| | | Notification.tsx
| | |
| | +---home
| | | Home.tsx
| | | HomeContext.tsx
| | |
| | +---orders
| | | OrderContext.tsx
| | | OrderParts.tsx
| | | Orders.tsx
| | |
| | +---profile
| | | Profile.tsx
| | | ProfileContext.tsx
| | |
| | \---wallet
| | WalletContext.tsx
| | Wallets.tsx
| |
| \---views
| +---bookingCards
| | NormalBookingCard.tsx
| |
| +---Orders
| +---QualityAssurance
| | QualityAssuranceCard.tsx
| |
| \---Subscription
| SubscribedCard.tsx
| SubscriptionCards.tsx
| SubsDisplayCard.tsx
|
+---backend
| | .eslintrc.js
| | config.env
| | package.json
| | prettier.config.js
| | \_\_tsconfig.js
| |
| \---src
| | server.js
| |
| +---@config
| | connectMongoDB.js
| | connectRedis.js
| |
| +---@service
| +---@utils
| | catchAsync.js
| | globalRouteHandler.js
| |
| +---controllers
| | userController.js
| |
| +---models
| | userModel.js
| |
| \---routes
\---packages
+---shared
| | index.ts
| | package.json
| | tsconfig.json
| |
| \---components
| index.ts
|
\---utils
AppError.ts
index.ts
isMobile.ts
package.json
tsconfig.json
