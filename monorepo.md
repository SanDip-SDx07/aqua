C:\Users\sandi\Downloads\Projects\aqua>tree /F /A
Folder PATH listing
Volume serial number is 76D0-0D76
C:.
| .gitignore
| aqua.code-workspace
| monorepo.md
| package.json
| tsconfig.json
|
+---apps
| +---public
| | | .gitignore
| | | app.json
| | | App.tsx
| | | BUILD_GUIDE.js
| | | eas.json
| | | index.ts
| | | metro.config.js
| | | package.json
| | | tsconfig.json
| | | types.ts
| | | **package.txt
| | | **package2.txt
| | | **tsconfig.txt
| | |
| | +---.expo
| | | devices.json
| | | README.md
| | |
| | +---api
| | | entry.ts
| | | index.ts
| | |
| | +---assets
| | | 20L-nobg.svg
| | | 20l.png
| | | adaptive-icon.png
| | | banner-1.png
| | | banner-2.png
| | | banner-3.jpg
| | | favicon.png
| | | file.svg
| | | icon.png
| | | splash-icon.png
| | | WaterJarIcon.tsx
| | |
| | +---data
| | | entry.ts
| | | notifications.ts
| | | orders.ts
| | | transactions.ts
| | |
| | +---src
| | | +---components
| | | | CallButton.tsx
| | | | DaysSlider.tsx
| | | | MessageButton.tsx
| | | | QuickPopup.tsx
| | | |
| | | +---constants
| | | | styles.ts
| | | |
| | | +---modals
| | | | NotifyModal.tsx
| | | | OrderModal.tsx
| | | | QAIModal.tsx
| | | | STCModal.tsx
| | | | SubsModal.tsx
| | | | WHModal.tsx
| | | |
| | | +---navigations
| | | | | AuthContext.tsx
| | | | | NavStack.tsx
| | | | |
| | | | +---(stacks)
| | | | | AuthStack.tsx
| | | | | MainStack.tsx
| | | | | ModalStack.tsx
| | | | |
| | | | \---(tabs)
| | | | TabNavBottom.tsx
| | | |
| | | +---screens
| | | | | Notification.tsx
| | | | |
| | | | +---home
| | | | | Home.tsx
| | | | | HomeContext.tsx
| | | | |
| | | | +---orders
| | | | | OrderContext.tsx
| | | | | OrderParts.tsx
| | | | | Orders.tsx
| | | | |
| | | | +---profile
| | | | | Profile.tsx
| | | | | ProfileContext.tsx
| | | | |
| | | | \---wallet
| | | | WalletContext.tsx
| | | | Wallets.tsx
| | | |
| | | \---views
| | | +---auth
| | | | Entry.tsx
| | | |
| | | +---bookingCards
| | | | NormalBookingCard.tsx
| | | |
| | | +---orders
| | | +---qualityAssurance
| | | | QualityAssuranceCard.tsx
| | | |
| | | \---subscription
| | | SubscribedCard.tsx
| | | SubscriptionCards.tsx
| | | SubsDisplayCard.tsx
| | |
| | \---utils
| | index.ts
| |
| \---vendor
+---backend
| | .eslintrc.js
| | config.env
| | index.ts
| | package.json
| | prettier.config.js
| | **package.txt
| | **tsconfig.txt
| |
| \---src
| | server.ts
| |
| +---@config
| | connectMongoDB.ts
| | connectRedis.js
| |
| +---@service
| +---@utils
| | catchAsync.ts
| | globalRouteHandler.ts
| |
| +---controllers
| | userController.ts
| |
| +---models
| | userModel.ts
| |
| \---routes
| userRoutes.ts
|
\---packages
+---shared
| index.ts
| package.json
|
\---utils
AppError.ts
generateUserID.native.ts
generateUserID.node.ts
getCurLocation.native.ts
index.ts
isMobile.ts
package.json
**package.txt

C:\Users\sandi\Downloads\Projects\aqua>

app/
├─ \_layout.tsx // Root layout = replaces NavStack + MainStack
├─ index.tsx // Default landing (Welcome / Entry)
│
├─ (auth)/ // Auth group
│ ├─ \_layout.tsx
│ └─ entry.tsx // From src/views/auth/Entry.tsx
│
├─ (tabs)/ // Tabs group
│ ├─ \_layout.tsx // Replaces TabNavBottom
│ ├─ home.tsx // From screens/home/Home.tsx
│ ├─ orders.tsx // From screens/orders/Orders.tsx
│ ├─ wallet.tsx // From screens/wallet/Wallets.tsx
│ └─ profile.tsx // From screens/profile/Profile.tsx
│
├─ modals/ // Modal routes (if any)
│ ├─ \_layout.tsx
│ ├─ notify.tsx // From NotifyModal.tsx
│ ├─ order.tsx // From OrderModal.tsx
│ ├─ subs.tsx // From SubsModal.tsx
│ └─ qa.tsx // From QAIModal.tsx
│
└─ notification.tsx // From screens/Notification.tsx
