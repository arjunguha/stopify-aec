Build procedure: 

In browserfs-candy, run the following commands: 
- `mvn install` 
- `npm run build`

In example-app, run the following commands: 
- `mvn generate-sources` 
- `webpack` 
- `node server.js` 


Note: If any changes are made to the BrowserFS repository, run `npm run build` in BrowserFS before running the above commands.