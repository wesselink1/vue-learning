# VueJS learning notes

*By Dennis Burger, january 2018, Waddinxveen*

## Commonly installed VueJS packages

```bash
# Vue router, application URL routing
npm i --save vue-router

# Vuex, for state management
npm i --save vuex

# Axios, promise based Ajax requests
npm i --save axios
```

## Deployment to production server

Run the Webpack build command to get a `dist/build.js` file ready for deployment. This build JavaScript file will contain everyting like Vue itself and all required extra's like above packages.

```bash
npm run build
```

To be able to run it on Apache or MS IIS you'll have serve the `index.html` file at all times. Even for errors. For more info on the Vue Router **history** mode and server configuration see the [Vue Router documentation page](https://router.vuejs.org/en/essentials/history-mode.html).

### Apache `.htaccess` config

```bash
<ifModule mod_rewrite.c>
	RewriteEngine On
	RewriteBase /
	RewriteRule ^index\.html$ - [L]
	RewriteCond %{REQUEST_FILENAME} !-f
	RewriteCond %{REQUEST_FILENAME} !-d
	RewriteRule . /index.html [L]
</ifModule>
```

### IIS `web.config` config file

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
  <system.webServer>
    <rewrite>
      <rules>
        <rule name="Handle History Mode and custom 404/500" stopProcessing="true">
            <match url="(.*)" />
            <conditions logicalGrouping="MatchAll">
              <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
              <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
            </conditions>
          <action type="Rewrite" url="/" />
        </rule>
      </rules>
    </rewrite>
  </system.webServer>
</configuration>
```