This is React view for Magento 2 based on Magento 2.2.2 API and node server.

React - redux


How to:

# Node #

1. Instalation
```
- Run `npm i` in root directory
- Set up options file (rename to local options.js)
- Start server by `npm start`
- Go to localhost:8080
```

# Magento 2 #

1. System -> User Roles
```
- Create new User role: Restuser
- Add new Role Resources (avoid allow to access to external plugins/modules - maybe still buggy)
```
2. System -> All Users
```
- Add new user: restuser/anything/anything/anything@anything.com/Q!w2e3r4/Q!w2e3r4/English/Active
- Set User role to: restuser
```
3. System -> Integrations
```
- Create new integration: restuser
- Email, callback URL, Indentity link URL keep empty for now.
- API tab - add all resources
- Save integration
- Activate integration - click allow button
- Save all Tokens for extensions and paste them into options.js file in server config
```
```
Go to localhost:8080
```

#Troubles#

1. Stores -> Configuration
```
- Go to Services tab/OAuth
- Change customer/admin Token Lifetime from default to anything
- Anyelse setting here...
```