# Vue learning

Learning about **VueJS**, vue-router, Vuex, **SPA's** (Single-Page-web-App) **Webpack**, JavaScript ES6 / Babel.

*By Dennis Burger, september 2018*

## Prerequisites

* [NodeJS](https://nodejs.org/en/) installed
* `vue-cli` installed, by running:

```bash
npm i -g @vue/cli
```

This project uses the [Vue-cli v3.x](https://cli.vuejs.org/).

## One time setup

Open a **command-line** or **Terminal** and `cd` into the directory where this project `package.json` -file resides. And install the required NPM packages running the regular command:

``` bash
npm install
```

## Running a local development server

Start a hot reloading local development server by running:

```bash
npm run serve
```

Open a web browser to the following address:

	http://localhost:8080

## Production ready build

Running the **build command** below will generate a production ready build inside the `dist/` directory with all its assets and dependencies.

```bash
npm run build
```

Inside the `package.json` file I changed the **build mode** for this production build to `--mode development`. This way, on the production site, you can still inspect this app. using the web browser Vue developer tools to inspect for example the Vue components and Vuex state.

### Local previewing the production build version

You can use a simple NPM package called [serve](https://www.npmjs.com/package/serve) which is a **simple local web server** to quickly view the `dist/` build version. **Install it globally once** by running:

```bash
npm i -g serve
```

Afterwards you can run the command below each time you want to view / inspect the build version.

```bash
serve -s dist/
```

The `-s` option (which stands for **single**) makes sure every HTTP 404 request redirects the `index.html` page. This is recommended for SPA web sites.

Now preview the build version in your browser:

	http://localhost:5000

### For Apache

Create a `.htaccess` config file inside the `/docs` directory. And have the web server serve this as (named) virtual-host.

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

### For Microsoft IIS server

Create a `web.config` config file inside the `/docs` directory. And have the web server serve this as (named) virtual-host.

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
